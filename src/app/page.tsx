import { Metadata, type NextPage } from "next";
import Image, { StaticImageData } from "next/image";
import { appConfig } from "~/config/app";
import { LinkLister } from "~/contents/linksLister";
import ProfilePicFallback from "~/images/StackUpLogo.webp";
import { remoteImage } from "~/utils/remoteImage";

export const metadata: Metadata = {
  title: `${appConfig.member.name} @ StackUp Socials`,
};

const getProfilePic = async () => {
  try {
    if (appConfig.member.profilePicture.srcType == "remote") {
      const remotePicture = await remoteImage(
        appConfig.member.profilePicture.src,
      );

      return {
        src: remotePicture,
        width: 100,
        height: 100,
      };
    } else if (appConfig.member.profilePicture.srcType == "local") {
      return (await import(
        appConfig.member.profilePicture.src
      )) as StaticImageData;
    }
    return ProfilePicFallback;
  } catch (error) {
    console.error(error);
    return ProfilePicFallback;
  }
};

const Home: NextPage = async () => {
  const ProfilePicture = await getProfilePic();

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
          {appConfig.member.name}
        </h2>
      </section>
      <section id="Links" className="mx-2 mt-14 flex px-4">
        <LinkLister />
      </section>
    </>
  );
};

export default Home;
