import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { GoogleAnalytics } from '@next/third-parties/google'
import { userData } from "./data/data";

const lexend = Lexend({ 
  subsets: ["latin"],
  weight: ['200', '400', '600', '800'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll light-scroll">
      <head>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content={"Currículo de " + userData.name} />
        <meta property="og:author" content={userData.name} />
        <meta property="og:image" content="author.jpeg" />
        <title>{userData.name}</title>
        <meta name="twitter:card" content={"Currículo de " + userData.name}/>
      </head>
      <body className={lexend.className}>
        {children}
        </body>
    </html>
  );
}
