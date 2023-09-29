import { getRemoteImage } from "~/server/remote-image"

export const runtime = "edge"
export const revalidate = 86400

export const GET = getRemoteImage
