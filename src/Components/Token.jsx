import React, { use } from 'react';
import AuthContext from '../Context/AuthContext';

const Token = () => {
    const {user}=use(AuthContext)
    return user.accessToke;
};

export default Token;