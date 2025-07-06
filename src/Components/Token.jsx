import React, { use } from 'react';
import AuthContext from '../Context/AuthContext';

const Token = () => {
    const {user}=use(AuthContext)
    console.log("jo")
    console.log(user.accessToken)
    return user.accessToken;
};

export default Token;