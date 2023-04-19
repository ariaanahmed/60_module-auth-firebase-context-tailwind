import React from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { useContext } from 'react';

const Home = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            {user && <span>{user.displayName}</span>}
        </div>
    );
};

export default Home;