import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { GoogleAnalytics } from '@next/third-parties/google'
import { curriculumData } from "./data/data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "João Pedro Martins",
  description: "Currículo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll light-scroll">
      <head>
        <meta name="og:title" property="og:title" content={"Currículo de " + curriculumData.user.name}></meta>
        <meta name="twitter:card" content="summary">{"Currículo de " + curriculumData.user.name}</meta>
        <meta name="description">{curriculumData.user.brief}</meta>
      </head>
      <body className={inter.className}>
        {children}
        <Analytics/>
        <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS || ""} />
        </body>
    </html>
  );
}
