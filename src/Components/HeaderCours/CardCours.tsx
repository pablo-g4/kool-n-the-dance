import React, { useState } from "react";
import "./HeaderCours.css"

const CardCours = ({
    imgSrc,
    title,
}: {
    imgSrc: string,
    title: string
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
            <div className="img__description w-100 mt-2">
                <p>{title}</p>
            </div>
            <img src={imgSrc} className="card-img-top"/>
        </div>

    )
}

export default CardCours