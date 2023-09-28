import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";
import { useWallet } from '@mintbase-js/react';
import { ESize, MbButton } from 'mintbase-ui';

export const metadata = {
  title: "Precedent - Building blocks for your Next.js project",
  description:
    "Precedent is the all-in-one solution for your Next.js project. It includes a design system, authentication, analytics, and more.",
  twitter: {
    card: "summary_large_image",
    title: "Precedent - Building blocks for your Next.js project",
    description:
      "Precedent is the all-in-one solution for your Next.js project. It includes a design system, authentication, analytics, and more.",
    creator: "@steventey",
  },
  metadataBase: new URL("https://precedent.dev"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(sfPro.variable, inter.variable)}>
        <Suspense fallback="...">
          {/* @ts-expect-error Server Component */}
          {/* <NearWalletConnector /> */}
        </Suspense>
          <main className="flex w-full flex-col items-center justify-center py-32">
            {children}
          </main>
          <Footer />
        <Analytics />
      </body>
    </html>
  );
}


const  NearWalletConnector = () => {
  const {
    connect,
    isConnected,
  } = useWallet();
  return (
    <MbButton onClick={connect} label={'Connect to NEAR Wallet'} size={ESize.BIG}/>
  )
}
