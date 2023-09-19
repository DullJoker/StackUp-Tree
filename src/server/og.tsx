/* eslint-disable react/no-unknown-property */
import { appConfig } from "~/config/app"
import { getProfilePic } from "~/utils/remoteImage"

import { ImageResponse } from "next/server"

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */

export const getOpenGraphImage = async () => {
  try {
    const ProfilePicture = await getProfilePic()
    const handle = appConfig.member.handle

    return new ImageResponse(
      (
        <div
          // convert above style to tailwind css
          tw="bg-[rgba(191,30,46,1)] h-full w-full flex text-center items-center justify-center flex-col flex-nowrap"
        >
          <div tw="flex items-center justify-center">
            <img
              height={500}
              width={500}
              src={ProfilePicture.src}
              tw="mx-auto h-58 w-58 rounded-full shadow-2xl shadow-[rgba(0,0,0,0.75)]"
              alt="Profile Picture - StackUp Socials"
            />
          </div>
          <div tw="text-5xl font-bold text-white text-center mt-8">
            {handle}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
