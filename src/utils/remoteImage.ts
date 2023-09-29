import { appConfig } from "~/config/app"
import ProfilePicFallback from "~/images/StackUpLogo.webp"

import { headers } from "next/headers"

export const getRemoteFetchUrl = (imgRemoteUrl: string) => {
  if (typeof window === "undefined") {
    const headersList = headers()
    const host = headersList.get("Host")
    return `http://${host}/api/image-fetch?url=${encodeURIComponent(
      imgRemoteUrl
    )}`
  } else {
    return "/api/image-fetch?url=" + encodeURIComponent(imgRemoteUrl)
  }
}

export const remoteImage = async (url: string) => {
  const { arrayBuffer, imageFormat } = await remoteImageArrayBuffer(url)
  const base64String = bufferToBase64(arrayBuffer)
  return "data:" + imageFormat + ";base64," + base64String
}

export const remoteImageArrayBuffer = async (url: string) => {
  const response = await fetch(url)
  const blob = await response.blob()
  return await {
    arrayBuffer: await blob.arrayBuffer(),
    imageFormat: blob.type,
  }
}

export const bufferToBase64 = (buffer: ArrayBuffer): string => {
  let binary = ""
  const bytes = new Uint8Array(buffer)
  for (let i = 0; i < bytes.byteLength; i++) {
    if (bytes[i] === undefined) break
    binary += String.fromCharCode(bytes[i] as number)
  }
  return btoa(binary)
}

export const getRemoteImageObject = async (
  remoteUrl: string,
  size?: number
) => {
  try {
    const remotePicture = await remoteImage(
      remoteUrl || appConfig.member.profilePicture.src.href
    )

    return {
      src: remotePicture,
      width: size || 100,
      height: size || 100,
    }
  } catch (error) {
    console.error(error)
    return ProfilePicFallback
  }
}
