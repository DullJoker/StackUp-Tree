/* eslint-disable react/no-unknown-property */

/* eslint-disable @next/next/no-img-element */
import { type Metadata } from "next"
import { appConfig } from "~/config/app"
import LinkLister from "~/contents/linksLister"
import { getRemoteFetchUrl } from "~/utils/remoteImage"

export const revalidate = 86400

export const generateMetadata = async () => {
  return {
    title: `${appConfig.member.name} @ StackUp Socials`,
  } as Metadata
}

const Home = async () => {
  const remoteImage = new URL(
    getRemoteFetchUrl(appConfig.member.profilePicture.src.href)
  )

  const imageUrl = remoteImage.pathname + remoteImage.search

  return (
    <>
      <section id="Details" className="flex w-full flex-col bg-MainRed py-10">
        <img
          src={imageUrl}
          height={100}
          width={100}
          alt={`Profile Picture - ${appConfig.member.name}`}
          className="mx-auto h-28 w-28 rounded-full object-center object-contain bg-black antialiased"
        />
        <h2 className="mx-auto mt-6 text-2xl font-extrabold text-white">
          {appConfig.member.handle}
        </h2>
      </section>
      <section id="Bio" className="flex w-full flex-col bg-MainDarkGray">
        <p className="mx-auto py-4 text-md font-extrabold text-white">
          {appConfig.member.bio}
        </p>
      </section>
      <section id="Links" className="mx-2 mt-6 mb-4 flex px-4">
        <LinkLister />
      </section>
    </>
  )
}

export default Home
