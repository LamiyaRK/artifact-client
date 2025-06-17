import React, { use } from 'react';
import AuthContext from './AuthContext';
import { Navigate, useLocation, useNavigation } from 'react-router';
import Loading from '../Components/Loading';

const PrivateRoute = ({children}) => {
    const {user,loader}=use(AuthContext)
    const loc=useLocation()
   // console.log(user)
    
   
    if(loader)
    {
        return <Loading/>
    }
  if(!user)
    {
        return <Navigate to='/login' state={loc.pathname}></Navigate>
    }
    return children;
};

export default PrivateRoute;