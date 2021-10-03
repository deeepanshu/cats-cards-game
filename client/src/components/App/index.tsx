import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Deck, User, Header } from '@components';
import { RootState, getLastGame, toggleLoading } from '@store';
import { cacheImages } from '@lib/utils';
import { IMAGES_TO_PRECACHE } from '@lib/constants';

const App = () => {

    const dispatch = useDispatch();
    const { user, environment } = useSelector((state: RootState) => state);

    useEffect(() => {
        cacheImages(IMAGES_TO_PRECACHE);
    }, []);

    // useEffect(() => {
    //     if (user.userName) {
    //         dispatch(toggleLoading(true));
    //         dispatch(getLastGame());
    //     }
    // }, [user.userName])

    if (environment.loading) {
        return <h4 className="text-center">Loading...</h4>
    }

    return (
        <div className="d-flex flex-column">
            <Header username={user.userName} />
            {
                user.userName ? <Deck /> : <User />
            }
        </div>
    );
}

export default App;