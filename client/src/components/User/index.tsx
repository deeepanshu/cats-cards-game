import MysteryCard from '@components/MysteryCard';
import { setUser as setUserRx } from '@store/slices/user';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const User = () => {
    const dispatch = useDispatch();
    const [user, setUser] = useState<string>('');

    const saveUserName = () => {
        localStorage.setItem('username', user);
        dispatch(setUserRx(user));
    }

    return (
        <MysteryCard>
            <div className="d-flex flex-column">
                <h4>What should we call you?</h4>
                <input className="user-input" type="text" placeholder={"Username"} onChange={(e) => setUser(e.target.value)} value={user} />
                <button className="fill mt-20" onClick={saveUserName}>Save & Next</button>
            </div>
        </MysteryCard>
    );
}

export default User;