import React, { useEffect } from 'react';

interface TradingCard {
    imageUrls: string[];
    rotate: boolean;
};

const TradingCard = ({ rotate,imageUrls }: TradingCard) => {
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
                        {imageUrls && imageUrls.map((i, index) => (
                                <img key={index}  width={150}  className="emotes" src={i} />
                            ))}
                    </div>
                )
            }
        </div>
    );
}

export default TradingCard;