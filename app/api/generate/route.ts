import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { imageUrl, theme, room } = await request.json();

  let startResponse = await fetch("https://api.replicate.com/v1/predictions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Token " + process.env.REPLICATE_API_KEY,
    },
    body: JSON.stringify({
      version:
        "854e8727697a057c525cdb45ab037f64ecca770a1769cc52287c2e56472a247b",
      input: {
        image: imageUrl,
        prompt:
          "Make a " + room + ".The person want this in that room: " + theme,
        a_prompt:
          "best quality, extremely detailed, photo from Pinterest, interior, cinematic photo, ultra-detailed, ultra-realistic, award-winning, Room",
        n_prompt:
          "longbody, lowres, bad anatomy, bad hands, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality",
      },
    }),
  });

  let jsonStartResponse = await startResponse.json();

  let endpointUrl = jsonStartResponse.urls.get;
  let restoredImage: string | null = null;
  while (!restoredImage) {
    console.log("Please wait...");
    let finalResponse = await fetch(endpointUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + process.env.REPLICATE_API_KEY,
      },
    });
    let jsonFinalResponse = await finalResponse.json();

    if (jsonFinalResponse.status === "succeeded") {
      restoredImage = jsonFinalResponse.output;
    } else if (jsonFinalResponse.status === "failed") {
      break;
    } else {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }

  return NextResponse.json(
    restoredImage ? restoredImage : "Failed to restore image"
  );
}
