import React from "react";
import performanceImage from "public/performance.jpg";
import HeroComponent from "@/components/hero";

export default function PerformancePage() {
    return (
        <HeroComponent
            imgData={performanceImage}
            imgAlt={`welding`}
            title={`We serve high performance applications`}
        />
    );
}
