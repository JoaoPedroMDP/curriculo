import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { GoogleAnalytics } from '@next/third-parties/google'
import { curriculumData } from "./data/data";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll light-scroll">
      <head>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content={"Currículo de " + curriculumData.user.name} />
        <meta property="og:author" content={curriculumData.user.name} />
        <meta property="og:description" content={curriculumData.user.brief} />
        <meta property="og:image" content="author.jpeg" />
        <title>{curriculumData.user.name}</title>
        <meta name="twitter:card" content={"Currículo de " + curriculumData.user.name}/>
      </head>
      <body className={inter.className}>
        {children}
        </body>
    </html>
  );
}
