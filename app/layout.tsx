import type { Metadata } from "next";
import "./globals.css";
import { Roboto, Space_Grotesk } from 'next/font/google';
import LeftSideBar from "./components/leftSideBar";

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['400', '700'] });
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: "Dev Hunt",
  description: "Place for Projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      className="font-secondary flex">
        <LeftSideBar />
        {children}
      </body>
    </html>
  );
}
