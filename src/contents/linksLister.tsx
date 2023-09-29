"use client"

import { Div } from "@glitchtech-dev/react-motion"
import { useEffect, useState } from "react"
import LinksItem from "~/components/items/linksItem"
import Links from "~/config/links"

const LinkLister = () => {
  const [linksAreClickable, setLinksAreClickable] = useState(false)
  const linksFlattened = Links.flatMap((current) => current)

  useEffect(() => {
    const totalDelay = 0.15 * linksFlattened.length

    const timeout = setTimeout(() => {
      setLinksAreClickable(true)
    }, totalDelay * 1000)

    return () => {
      clearTimeout(timeout)
    }
  }, [linksFlattened])

  return (
    <div className="flex flex-col w-full gap-6 max-w-4xl mx-auto">
      {linksFlattened.map((current, idx) => {
        return (
          <Div
            key={current.href}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.15 * idx,
              duration: 0.35,
            }}
            className="flex w-full rounded-2xl bg-MainDarkGray shadow-md hover:shadow-xl"
          >
            <div
              key={`link_item_${idx}`}
              className="flex w-full rounded-2xl bg-MainDarkGrayshadow-md hover:shadow-xl"
            >
              <div className="p-4 flex w-full">
                <LinksItem
                  Icon={current.icon}
                  title={current.title}
                  href={current.href}
                  disabled={!linksAreClickable}
                />
              </div>
            </div>
          </Div>
        )
      })}
    </div>
  )
}

export default LinkLister
