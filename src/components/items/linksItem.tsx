import Link from "next/link";
import React from "react";
import { type IconType } from "react-icons";

const LinksItem = ({
  Icon,
  title,
  href,
}: {
  Icon: IconType;
  title: string;
  href: string;
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className="relative my-auto flex w-full items-center px-2 py-2 text-lg"
    >
      <span className="absolute text-4xl text-MainRed">
        <Icon />
      </span>
      <span className="mx-auto my-auto line-clamp-1 max-w-md">{title}</span>
    </Link>
  );
};

export default LinksItem;
