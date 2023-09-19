import { getOpenGraphImage } from "~/server/og";

export const runtime = "edge";
export const revalidate = 86400;

export const GET = getOpenGraphImage;
