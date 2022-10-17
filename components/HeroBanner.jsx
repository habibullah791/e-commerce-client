import Link from "next/link";
import React from "react";

import { urlFor } from "../lib/client";

const HeroBanner = ({ heroBanner }) => {
    return (
        <div className="hero-banner-container">
            <div>
                <p className="beats-solo">{heroBanner.smallText}</p>
                <h3 className="">{heroBanner.midText}</h3>
                <h1>{heroBanner.largeText1}</h1>
                <img
                    src={urlFor(heroBanner.image)}
                    alt="Headphones"
                    className="hero-banner-image"
                />
                <div>
                    <Link href="/product/ID">
                        <button type="button">BUTTON TEXT</button>
                    </Link>
                    <div className="desc">
                        <h5>{heroBanner.desc}</h5>
                        <p>DESCRIPTION</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroBanner;