import { getRemoteImageObject } from "~/utils/remoteImage"

import { ImageResponse, NextResponse } from "next/server"

/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unknown-property */

export const getRemoteImage = async (req: Request) => {
  try {
    const searchParams = new URL(req.url).searchParams

    const remoteUrl = searchParams.get("url")

    if (!remoteUrl) {
      return NextResponse.json("Missing url parameter", {
        status: 406,
      })
    }

    const fetchedImage = await getRemoteImageObject(new URL(remoteUrl).href)

    return new ImageResponse(
      (
        <img
          src={fetchedImage.src}
          height={250}
          width={250}
          fetchPriority="high"
          tw="inset-0 w-full h-full"
          alt={`remotely fetched image`}
        />
      ),
      {
        width: 500,
        height: 500,
      }
    )
  } catch (e: unknown) {
    console.log(`${e}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
