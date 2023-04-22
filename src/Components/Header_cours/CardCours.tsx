import React, { Component, useState } from "react";
import "./Header_cours.css"

const CardCours = ({
    imgSrc,
    description,
}: {
    imgSrc: string,
    description: string
}) => {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = (e: any) => {
        setIsHovering(true);
    };
    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    return (
        <div className="cropedDiv" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img src={imgSrc} className="card-img-top"/>
            {/* <div className="img__description">
                <p>{description}</p>
            </div> */}
        </div>

    )
}

export default CardCours