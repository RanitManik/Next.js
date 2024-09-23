import type { StaticImageData } from "next/image";
import Image from "next/image";

interface HeroProps {
    imgData: StaticImageData;
    imgAlt: string;
    title: string;
}

export default function HeroComponent(props: HeroProps) {
    return (
        <>
            <div className="relative h-svh">
                <div className="absolute inset-0 -z-10">
                    <Image
                        fill
                        style={{ objectFit: "cover" }}
                        src={props.imgData}
                        alt={props.imgAlt}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900" />
                </div>

                <div className="flex items-center justify-center pt-48">
                    <h1 className="text-6xl text-white">{props.title}</h1>
                </div>
            </div>
        </>
    );
}
