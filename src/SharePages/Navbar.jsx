import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import AuthContext from '../Context/AuthContext';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

const Navbar = () => {
  const {user,logout}=use(AuthContext)
  console.log(user)
  const handllogout=()=>{
         logout()
         .then(()=>{
          Swal.fire({
  title: "Logged Out Successfully!",
  icon: "success",
  draggable: true
});
         })
         .catch(err=>{
          toast(err,{
                              theme:"colored",
                              type:'error',
                            })
         })
    }
    const list=<>
      <NavLink to='/'> <li className='text-lg text-neutral font-semibold'><a>Home</a></li></NavLink> 
           <NavLink to='/allartifacts'><li className='text-lg text-neutral font-semibold'><a>All Artifacts</a></li></NavLink> 
           {user?  <NavLink to='/addartifacts'> <li className='text-lg text-neutral font-semibold'><a>Add Artifacts</a></li></NavLink> :""}
    </>
    const avtar=
    <div >
      <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-24 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src={user?.photoURL} 
             
            />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a >
            {user?.displayName}
            
          </a>
        </li>
        <li><NavLink to='/myartifacts'><a>My Artifacts</a></NavLink></li>
        <li><NavLink to='/favorites'><a>Liked Artifacts</a></NavLink></li>
        <li ><button onClick={handllogout}>Logout</button></li>
      </ul>
    </div>
    </div>
    
    return (
        <div>
           <div className="navbar bg-transparent shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ">
        {list}
            
      </ul>
    </div>
    <div className='flex items-center gap'>
        <img src="/logo.png" className='h-[80px]'></img>
        <p className='text-neutral text-5xl'><i className='font-bold '>Reli</i>crader</p>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {list}
    </ul>
  </div>
  <div className="navbar-end">
  {user?avtar:<Link to='/login'><a className="btn btn-lg btn-neutral text-lg hover:bg-secondary">Login</a></Link> } 
  </div>
</div>
        </div>
    );
};

export default Navbar;