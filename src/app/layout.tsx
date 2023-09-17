import { type Metadata } from "next";
import React from "react";
import Header from "~/components/header";
import { appConfig } from "~/config/app";
import "~/styles/tailwind.css";

export const metadata: Metadata = {
  title: {
    default: `${appConfig.member.name} @ StackUp Socials`,
    template: `%s | ${appConfig.member.name} @ StackUp Socials`,
  },
  description: `${appConfig.member.name}'s socials in a neat list!`,
  icons: ["/favicon.ico"],
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <main className="flex min-h-screen flex-col">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
