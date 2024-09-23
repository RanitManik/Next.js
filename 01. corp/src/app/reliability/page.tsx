import React from "react";
import reliabilityImage from "public/reliability.jpg";
import HeroComponent from "@/components/hero";

export default function ReliabilityPage() {
    return (
        <HeroComponent
            imgData={reliabilityImage}
            imgAlt={`welding`}
            title={`Super high reliability hosting`}
        />
    );
}
