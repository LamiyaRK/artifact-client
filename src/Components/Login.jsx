import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import AuthContext from '../Context/AuthContext';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import AnimatedSection from './AnimatedSection';
import AnimatedText from './AnimatedText';
import { Helmet } from 'react-helmet';

const Login = () => {
    const {handlelogin,setUser,glogin}=use(AuthContext)
    const loc=useLocation()
  
    const navigate=useNavigate()
    const handleLogin=(e)=>{
          e.preventDefault();
          const form=e.target;
         const email=form.email.value;
         const pass=form.pass.value;
        handlelogin(email,pass)
       .then(res=>{
          setUser(res.user)
           navigate(loc.state||'/')
            Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Login Successful",
            showConfirmButton: false,
            timer: 1500
          });
          
        }).catch(err=>{
                  toast(err,{
                    theme:"colored",
                    type:'error',
                  })
                  
                 })
    }
    const googlelogin=()=>{
        glogin()
        .then(res=>{
         
           Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Login Successful",
      showConfirmButton: false,
      timer: 1500
    });
    navigate(loc.state||'/')
        }).catch(err=>{
              toast(err,{
                theme:"colored",
                type:'error',
              })
              
             })
    }
    
    return (
        <div className='mx-auto my-[80px]'>
        <Helmet>
          <title>Login</title>
        </Helmet>
        <AnimatedSection>
        <AnimatedText
        text="Login"
        as="h1"
        className='text-4xl font-bold text-neutral text-center mb-5'
      />
      </AnimatedSection>
      <AnimatedSection>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto ">
      <div className="card-body">
        <form className="fieldset " onSubmit={handleLogin}>
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" name="email"/>
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" name="pass" />
          <div><a className="link link-hover">Forgot password?</a></div>
       <button className="btn btn-neutral mt-4 hover:bg-secondary" >Login</button>  
         <div class="divider">OR</div>
         <button class="btn bg-white text-black border-[#e5e5e5]" onClick={googlelogin}>
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>
       <div><a >Don't have any account?<Link to='/signup'><span className="link link-hover">Register</span></Link></a></div> 
        </form>
      </div>
    </div>
      </AnimatedSection>
          
        </div>
    );
};

export default Login;