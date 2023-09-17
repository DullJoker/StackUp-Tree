"use client";

import { AnimatePresence, motion } from "framer-motion";
import LinksItem from "~/components/items/linksItem";
import Links from "~/config/links";

export const LinkLister = () => {
  return (
    <div className="flex flex-col w-full gap-6 max-w-4xl mx-auto">
      {Links.map((current, idx) => {
        return (
          <AnimatePresence key={current.href}>
            <motion.div
              key={current.href}
              initial={{ y: 300, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -300, opacity: 0 }}
              transition={{
                delay: 0.15 * idx,
                duration: 0.25,
              }}
              className="flex w-full rounded-2xl bg-MainDarkGray shadow-md hover:shadow-xl"
            >
              <div
                key={current.href}
                className="flex w-full rounded-2xl bg-MainDarkGrayshadow-md hover:shadow-xl"
              >
                <div className="p-4 flex w-full">
                  <LinksItem
                    Icon={current.icon}
                    title={current.title}
                    href={current.href}
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        );
      })}
    </div>
  );
};
