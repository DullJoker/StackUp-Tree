import { type Metadata, type NextPage } from "next"
import { appConfig } from "~/config/app"
import { LinkLister } from "~/contents/linksLister"
import { getProfilePic } from "~/utils/remoteImage"

import Image from "next/image"

export const revalidate = 86400

export const generateMetadata = async () => {
  return {
    title: `${appConfig.member.name} @ StackUp Socials`,
  } as Metadata
}

const Home: NextPage = async () => {
  const ProfilePicture = await getProfilePic()

  return (
    <>
      <section id="Details" className="flex w-full flex-col bg-MainRed py-10">
        <Image
          src={ProfilePicture}
          height={100}
          width={100}
          alt={`Profile Picture - ${appConfig.member.name}`}
          className="mx-auto h-28 w-28 rounded-full object-center object-contain bg-black antialiased"
          priority
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
      <section id="Links" className="mx-2 mt-6 flex px-4">
        <LinkLister />
      </section>
    </>
  )
}

export default Home
