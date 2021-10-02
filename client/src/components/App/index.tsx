import React, { useEffect } from 'react';

import Deck from '@components/Deck';
import Header from '@components/Shared/Header';

const imgs = [
    'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/face-with-hand-over-mouth_1f92d.png',
    'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/298/collision_1f4a5.png',
    'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/298/grinning-cat-with-smiling-eyes_1f638.png',
    'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/298/bomb_1f4a3.png',
    'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/298/cat-with-wry-smile_1f63c.png',
    'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/298/shuffle-tracks-button_1f500.png'
]

const App = () => {

    const cacheImages = async (imgs: string[]) => {
        const promises = await imgs.map(i => {
            return new Promise(function(resolve, reject) {
                const img = new Image();

                img.src = i;
                img.onload = resolve('done') as unknown as any;
                img.onerror = reject() as unknown as any;

            })
        });
        await Promise.all(promises);
    }

    useEffect(() => {
        cacheImages(imgs);
    })

    return (
        <React.Fragment>
            <Header />
            <Deck />
        </React.Fragment>
    );
}

export default App;