import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import * as jose from "jose";
import { prisma } from "@/db";

export async function userId() {
  const token = cookies().get("hanko")?.value;
  const payload = jose.decodeJwt(token ?? "");
  return payload.sub;
}

export async function POST(req: Request) {
  const userID = await userId();
  const { src } = await req.json();
  const title = "abc";

  if (userID) {
    if (typeof title !== "string" || title.length === 0) {
      throw new Error("That can't be a title");
    }
    await prisma.item.create({
      data: { title, src, userId: userID ?? "" },
    });

    return NextResponse.json({ message: "Created Todo" }, { status: 200 });
  } else {
    return NextResponse.json({ error: "Not Found" }, { status: 404 });
  }
}
