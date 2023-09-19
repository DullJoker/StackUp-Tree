import { appConfig } from "~/config/app"
import ProfilePicFallback from "~/images/StackUpLogo.webp"

export const remoteImage = async (url: string) => {
  const response = await fetch(url)
  const blob = await response.blob()
  const arrayBuffer = await blob.arrayBuffer()
  const base64String = bufferToBase64(arrayBuffer)
  return "data:" + blob.type + ";base64," + base64String
}

function bufferToBase64(buffer: ArrayBuffer): string {
  let binary = ""
  const bytes = new Uint8Array(buffer)
  for (let i = 0; i < bytes.byteLength; i++) {
    if (bytes[i] === undefined) break
    binary += String.fromCharCode(bytes[i] as number)
  }
  return btoa(binary)
}

export const getProfilePic = async () => {
  try {
    const remotePicture = await remoteImage(
      appConfig.member.profilePicture.src.toString()
    )

    return {
      src: remotePicture,
      width: 100,
      height: 100,
    }
  } catch (error) {
    console.error(error)
    return ProfilePicFallback
  }
}
