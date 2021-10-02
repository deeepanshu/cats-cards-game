import React, { useEffect } from 'react';

interface TradingCard {
    imageUris: string[];
    rotate: boolean;
};

const TradingCard = ({ rotate,imageUris }: TradingCard) => {
    const [isRotated, setIsRotated] = React.useState(false);
    const [showContent, setShowContent] = React.useState(false);
    useEffect(() => {
        setIsRotated(rotate);
        if (rotate) {
            setTimeout(() => setShowContent(true), 500);
        }
    }, [rotate]);
    return (
        <div className={`trading-card base-rotation ${isRotated ? 'rotated' : ""}`}>
            {
                showContent &&
                (
                    <div className="mystery-card">
                        {imageUris && imageUris.map(i => (
                                <img  width={150}  className="emotes" src={i} />
                            ))}
                    </div>
                )
            }
        </div>
    );
}

/*
<div className="content">
                        <div className="emotes-wrapper">
                            {imageUris && imageUris.map(i => (
                                <img className="emotes" src={i} />
                            ))}
                        </div>
                        <h1 className="header">{title}</h1>
                        <div className="footer" >
                            <h3>{subText}</h3>
                            <p>{subDescription}</p>
                        </div>
                    </div>
                    */

export default TradingCard;