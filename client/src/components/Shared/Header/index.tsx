import React from 'react';

const Header = ({ username }: { username: string }) => (
    <nav>
        {
            username ? <h2 className="text-center">Hi {username}, Lets play!</h2> : <h2 className="text-center">Cats Card Game</h2>
        }
    </nav>
)

export default Header;