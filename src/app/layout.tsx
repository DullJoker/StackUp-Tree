import { type Metadata } from "next";
import { headers } from "next/headers";
import React from "react";
import Footer from "~/components/footer";
import Header from "~/components/header";
import { appConfig } from "~/config/app";
import "~/styles/tailwind.css";

export const generateMetadata = async () => {
  const headersList = headers();
  const domain = headersList.get("x-forwarded-host") || headersList.get("host");
  const metadataBase = new URL(domain || "https://acme.com");

  return {
    title: {
      default: `${appConfig.member.name} @ StackUp Socials`,
      template: `%s | ${appConfig.member.name} @ StackUp Socials`,
    },
    description: `${appConfig.member.name}'s socials in a neat list!`,
    icons: ["/favicon.ico"],
    metadataBase,
    openGraph: {
      title: `${appConfig.member.name} @ StackUp Socials`,
      description: `${appConfig.member.name}'s socials in a neat list!`,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: `/api/og`,
          width: 1200,
          height: 630,
          alt: `${appConfig.member.name} @ StackUp Socials`,
        },
      ],
    },
  } as Metadata;
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en-US">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <main className="flex min-h-screen flex-col">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
