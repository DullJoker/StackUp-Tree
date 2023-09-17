import Image from "next/image";
import React from "react";
import { appConfig } from "~/config/app";
import LogoStackUp from "~/images/StackUpLogo.webp";

const Header = () => {
  return (
    <div className="flex w-full items-center gap-12 border-b-4 border-MainRed bg-MainBlack px-4 py-6 text-white">
      <h1 className="flex items-center text-2xl font-bold tracking-wider">
        <Image src={LogoStackUp} alt="StackUp" className="w-16 h-auto" />|
        <span className="bg-MainPrimary ml-[.38rem] rounded-sm px-1 font-extrabold tracking-tight">
          {appConfig.member.name}
        </span>
      </h1>
    </div>
  );
};

export default Header;
