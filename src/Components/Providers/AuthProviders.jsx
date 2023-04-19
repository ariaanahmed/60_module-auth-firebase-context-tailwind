import React, { createContext } from 'react';

export const AuthContext = createContext(null)

const AuthProviders = ({children}) => {
    const user = {displayName: 'Sagar Wala Aankh'}
    return (
        <div>
            <AuthContext.Provider value={user}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProviders;