import React, { use, useEffect, useState } from 'react';
import AuthContext from '../Context/AuthContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useLoaderData, useNavigate, useParams } from 'react-router';
import AnimatedSection from './AnimatedSection';
import AnimatedText from './AnimatedText';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const UpdateArtifact = () => {
  
    const [types,setTypes]=useState([])
    const {user}=use(AuthContext)
  const[data,setData]=useState([])
    const navigate=useNavigate()
    useEffect(()=>{
        fetch('https://artifacts-server-rose.vercel.app/artifactsbytype')
        .then(res=>res.json())
        .then(data=>{
            setTypes(data)
    
        })
    },[])
    const params = useParams();

    useEffect(() => {
        if (!params.id || !user?.accessToken) return;

        fetch(`https://artifacts-server-rose.vercel.app/artifacts/${params.id}`, {
            headers: {
                authorization: `Bearer ${user.accessToken}`,
            }
        })
            .then(res => res.json())
            .then(dat => {
                setData(dat);
              
            })
            .catch(err => {
                toast(err.message || "Failed to fetch artifact details", {
                    type: 'error',
                    theme: 'colored'
                });
            });
    }, [params.id, user?.accessToken]);
 const {artifactImage,artifactName,shortDescription,artifactType,
historicalContext,createdAt,discoveredAt,discoveredBy,presentLocation,_id}=data
    const updateinfo=e=>{
  e.preventDefault();
  const form=e.target;
  const formdata=new FormData(form)
  const data=Object.fromEntries(formdata.entries()) 
  axios.put(`https://artifacts-server-rose.vercel.app/artifacts/${_id}`,data,{
   headers:{
              authorization:`Bearer ${user.accessToken}`
             }
  })
  .then(res=>{
    Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Artifact updated Successfully",
          showConfirmButton: false,
          timer: 1500
        });
        navigate('/myartifacts')
  })
  .catch(err=>{
     toast(err,{
                theme:"colored",
                type:'error',
              })
  })
  
}

    return (
      <div className=' py-10 w-5/6 mx-auto '>
      <Helmet>
        <title>Update Artifacts</title>
      </Helmet>
        <div className='text-center space-y-2 mb-6'>
        <AnimatedSection>
        <AnimatedText
        text="Update Artifacts"
        as="h1"
        className='text-4xl font-bold text-neutral '
      />
            </AnimatedSection>
 <AnimatedSection>
    <p className='font-medium text-neutral opacity-80'>View, manage, and edit the artifacts you’ve added.

</p>
 </AnimatedSection>
 </div>
        <div className='bg-base-100 p-10 border-secondary  rounded-2xl'>
        <form className='grid md:grid-cols-2 gap-5' onSubmit={updateinfo}>
             <fieldset className="fieldset">
  <legend className="fieldset-legend">Name</legend>
  <input type="text" className="input w-full" value={user?.displayName||""} readOnly name='name'  />
  
</fieldset>
<fieldset className="fieldset">
  <legend className="fieldset-legend">Email</legend>
  <input type="email" className="input w-full"  value={user?.email||""} readOnly name='email' />
  
</fieldset>
            <fieldset className="fieldset">
       
  <legend className="fieldset-legend">Artifact Name</legend>
  <input type="text" className="input w-full" placeholder="Artifact Name" name='artifactName' defaultValue={artifactName} />
  
</fieldset>

<fieldset className="fieldset">
  <legend className="fieldset-legend">Artifact Type</legend>
  <select  className="select w-full" name='artifactType' defaultValue={artifactType}>
  <option disabled={true}>Pick a type</option>
  {
    types.map(ty=><option>{ty}</option>)
  }
  </select>
  
</fieldset>
<fieldset className="fieldset">
  <legend className="fieldset-legend">Historical Context</legend>
  <input type="text" className="input w-full" placeholder="Historical Context" name='historicalContext' defaultValue={historicalContext}/>
  
</fieldset>
<fieldset className="fieldset">
  <legend className="fieldset-legend">Short description </legend>
  <input type="text" className="input w-full" placeholder="Short Description" name='shortDescription' defaultValue={shortDescription}/>
  
</fieldset>
<fieldset className="fieldset">
  <legend className="fieldset-legend">Created At </legend>
  <input type="text" className="input w-full" placeholder="Created At " name='createdAt' defaultValue={createdAt} />
  
</fieldset>
<fieldset className="fieldset">
  <legend className="fieldset-legend">Discovered At</legend>
  <input type="text" className="input w-full" placeholder="Discovered At"  name='discoveredAt' defaultValue={discoveredAt}/>
  
</fieldset>
<fieldset className="fieldset">
  <legend className="fieldset-legend">Discovered By</legend>
  <input type="text" className="input w-full" placeholder="Discovered By" name='discoveredBy' defaultValue={discoveredBy}/>
  
</fieldset>
<fieldset className="fieldset">
  <legend className="fieldset-legend">Present Location</legend>
  <input type="text" className="input w-full" placeholder="Present Location" name='presentLocation' defaultValue={presentLocation}/>
  
</fieldset>
<fieldset className="fieldset md:col-span-2" >
  <legend className="fieldset-legend">Artifact Image</legend>
  <input type="URL" className="input w-full" placeholder="Artifact Image"  name='artifactImage' defaultValue={artifactImage} />
  
</fieldset>
<button className='btn btn-neutral md:col-span-2 '>Update Artifact </button>
</form>
        </div>
        </div>
    );
};

export default UpdateArtifact;