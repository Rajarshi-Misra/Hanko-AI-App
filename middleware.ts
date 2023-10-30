import * as jose from "jose";
import { NextRequest, NextResponse } from "next/server";

const hankoApi = "https://8d67d81e-87b4-44d9-a529-5313c7d48f11.hanko.io";

export default async function middleware(req: NextRequest) {
  const token = req.cookies.get("hanko")?.value;

  const JWKS = jose.createRemoteJWKSet(
    new URL(`${hankoApi}/.well-known/jwks.json`)
  );

  try {
    const verifiedJWT = await jose.jwtVerify(token, JWKS);
    console.log(verifiedJWT);
  } catch {
    return NextResponse.redirect(new URL("/", req.url));
  }
}
export const config = {
  matcher: ["/todo"],
};
