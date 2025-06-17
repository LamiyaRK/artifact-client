import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Components/Home";
import TcardDetails from "../Components/TcardDetails";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import AddArtifacts from "../Components/AddArtifacts";
import AllArtifacts from "../Components/AllArtifacts";
import MyArtifacts from "../Components/MyArtifacts";
import UpdateArtifact from "../Components/UpdateArtifact";
import Favourites from "../Components/Favourites";
import PrivateRoute from "../Context/PrivateRoute";
import Loading from "../Components/Loading";
import Errorpage from "../Components/Errorpage";

import AuthContext from "../Context/AuthContext";
import Token from "../Components/Token";

const router=createBrowserRouter(
    [
        {
            path:'/',
            Component:HomeLayout,
            children:[
                {    index:true,
                    path:'/',
                    Component:Home
                },
                {
                    path:'/card-details/:id',
                    
                    element:<PrivateRoute>
                        <TcardDetails></TcardDetails>
                    </PrivateRoute>
                     
                },
                {
                    path:'/login',
                    Component:Login
                },
                {
                    path:'/signup',
                    Component:Signup
                },
            {
                path:'/addartifacts',
                  element:<PrivateRoute> 
               <AddArtifacts></AddArtifacts>
               </PrivateRoute>
            },
            {
                path:'/allartifacts',
                loader:()=>fetch('http://localhost:3000/artifactsall'),
                Component:AllArtifacts
                 
               
            },
            {
                path:'/myartifacts',
                element:<PrivateRoute> 
               <MyArtifacts></MyArtifacts>
               </PrivateRoute>
                
            },
            {
                path:'/updateartifact/:id',
                loader:({params})=>fetch(`http://localhost:3000/artifacts/${params.id}`),
               element:<PrivateRoute> 
               <UpdateArtifact></UpdateArtifact>
               </PrivateRoute>
                

            },
            {
                path:'/favorites',
                loader:()=>fetch('http://localhost:3000/artifactsall'),
                element:<PrivateRoute> 
                <Favourites></Favourites>
               </PrivateRoute>
               
            },
            
            
            ]
            
            
        },
        {
            path:'*',
            Component:Errorpage
        }
    ]
)

export {router};