import React from 'react';

const Card = (props: {children: React.ReactNode}) => {
    return (
        <div className="trading-card">
            <div className="mystery-card">
                {props.children}
            </div>
        </div>
    );
}

export default Card;