import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-primary text-primary-content justify-between w-12/12 mx-auto px-5">
            <Link className="normal-case text-xl" to='/'>AuthMaster</Link>
            <div className='flex gap-4'>
                <Link to='/'>Home</Link>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
            </div>
        </div>
    );
};

export default Header;