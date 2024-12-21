'use client'
import { Badge } from "@/components/ui/badge";
import Microlink from '@microlink/react'
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { encode } from "qss";

type LinkPreviewProps = {
    children: React.ReactNode;
    url: string;
    className?: string;
    width?: number;
    height?: number;
    quality?: number;
    layout?: string;
  } & (
    | { isStatic: true; imageSrc: string }
    | { isStatic?: false; imageSrc?: never }
  );

const Card = ({
  children,
  url,
  className,
  width = 300,
  height = 100,
  quality = 50,
  layout = "fixed",
  isStatic = false,
  imageSrc = "",
}: LinkPreviewProps) => {
    let src;
  if (!isStatic) {
    const params = encode({
      url,
      screenshot: true,
      meta: false,
      embed: "screenshot.url",
      colorScheme: "dark",
      "viewport.isMobile": true,
      "viewport.deviceScaleFactor": 1,
    });
    src = `https://api.microlink.io/?${params}`;
  } else {
    src = imageSrc;
  }
    return (
        <Link target="_blank" href={"https://colorhunt.co/"} className="flex flex-col gap-2 rounded-xl">
            <div className="w-[16vw] h-[9vw] rounded-lg rounded-br-[0.95rem] relative overflow-hidden">
            <Image
                src={src}
                alt="hidden image"
                quality={quality}
                layout="fill"
                className="w-full h-full shadow-2xl"
                objectFit="center"
                priority={true}
            />
            <div className="p-4 shadow-xl rounded-full absolute bottom-[-16.5px] right-[-16.5px] border border-gray-200 bg-white">
                <div className="p-2 rounded-full border">
                <ExternalLink className="size-4"/>
                </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 px-3 py-3 hover:duration-500 hover:ease-in-out hover:bg-radial-gradient-custom rounded-b-xl">
            <div className="flex justify-between w-full">
            <h1 className="font-primary font-semibold text-lg">Color Hunt</h1>
            <Badge className="text-xs font-light" variant={"secondary"}>Built by: Gal Shir</Badge>
            </div>
            <div className="flex gap-2">
            <Badge variant={"outline"} className="font-light">#Colors</Badge>
            <Badge variant={"outline"} className="font-light">#DesignTools</Badge>
            </div>
            </div>
        </Link>
    );
}

export default Card;

