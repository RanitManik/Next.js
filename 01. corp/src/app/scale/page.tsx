import React from "react";
import scaleImage from "public/scale.jpg";
import HeroComponent from "@/components/hero";

export default function ScalePage() {
    return (
        <HeroComponent
            imgData={scaleImage}
            imgAlt={`steel factory`}
            title={`Scale your app to infinity`}
        />
    );
}
