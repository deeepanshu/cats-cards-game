import MysteryCard from '@components/MysteryCard';
import { toggleLoading, setUser as setUserRx, getLastGame } from '@store';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const User = () => {
    const dispatch = useDispatch();
    const [user, setUser] = useState<string>('');

    const saveUserName = () => {
        if (!user) return;
        sessionStorage.setItem('username', user);
        dispatch(toggleLoading(true));
        dispatch(setUserRx(user));
        dispatch(getLastGame());
    }

    return (
        <div className="d-flex flex-column mt-30">
            <input autoFocus className="user-input" type="text" placeholder={"What should we call you?"} onChange={(e) => setUser(e.target.value)} value={user} />
            <button className="fill mt-20" onClick={saveUserName}>Play</button>
        </div>
    );
}

export default User;