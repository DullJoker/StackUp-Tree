import React from "react"
import { type IconType } from "react-icons"

import Link from "next/link"

const LinksItem = ({
  Icon,
  title,
  href,
  disabled,
}: {
  Icon: IconType
  title: string
  href: string
  disabled?: boolean
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className="relative my-auto flex w-full items-center px-2 py-2 text-lg"
      aria-disabled={disabled}
      onClick={disabled ? (e) => e.preventDefault() : undefined}
    >
      <span className="absolute text-4xl text-MainRed">
        <Icon />
      </span>
      <span className="mx-auto my-auto line-clamp-1 md:max-w-md hidden md:flex">
        {title}
      </span>
      <span className="mx-auto my-auto line-clamp-1 md:max-w-md md:hidden">
        {title.length > 22 ? title.slice(0, 22) + "..." : title}
      </span>
    </Link>
  )
}

export default LinksItem
