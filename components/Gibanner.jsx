import React from 'react';
import Link from 'next/link';

import { urlFor } from "../lib/client";

const Gibanner = ({ giBanner }) => {
    return (
        <div className={"hero-banner-container"}>
            <div>
                <p className={"beats-solo"}>{giBanner.smallText}</p>
                <h3>
                    {giBanner.midText}
                </h3>
                <h1>{giBanner.largeText1}</h1>
                <img src={urlFor((giBanner.image))} alt={"headphones"} className={"hero-banner-image"}/>

                <div>
                    <Link href={`/product/${giBanner.product}`}>
                        <button type={"button"}>{giBanner.buttonText}</button>
                    </Link>
                    <div className={"desc"}>
                        <h5>Descrição</h5>
                        <p>{giBanner.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gibanner