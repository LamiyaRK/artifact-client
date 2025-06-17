import axios from 'axios';
import React, { use, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import AuthContext from '../Context/AuthContext';
import AnimatedSection from './AnimatedSection';
import AnimatedText from './AnimatedText';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const AddArtifacts = () => {
    const [types,setTypes]=useState([])
    const {user}=use(AuthContext)

useEffect(()=>{
    fetch('https://artifacts-server-rose.vercel.app/artifactsbytype')
    .then(res=>res.json())
    .then(data=>{
        setTypes(data)

    })
},[])
const addinfo=e=>{
  e.preventDefault();
  const form=e.target;
  const formdata=new FormData(form)
  const data=Object.fromEntries(formdata.entries()) 
  axios.post('https://artifacts-server-rose.vercel.app/artifactsall',data,{
   headers:{
              authorization:`Bearer ${user.accessToken}`
             }
  })
  .then(res=>{
     Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Artifact added Successfully",
      showConfirmButton: false,
      timer: 1500
    });
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
          <title>Add Artifact</title>
        </Helmet>
        <div className='text-center space-y-2 mb-6'>
        <AnimatedSection>
        <AnimatedText
        text="Add New Artifact"
        as="h1"
        className='text-4xl font-bold text-neutral '
      />
            </AnimatedSection>
 <AnimatedSection>
    <p className='font-medium text-neutral opacity-80'>Share a historical artifact by adding its details and image to our collection.

</p>
 </AnimatedSection>
 </div>
        <div className='bg-base-100 p-10 border-secondary  rounded-2xl'>
        <form className='grid grid-cols-1 md:grid-cols-2 gap-5' onSubmit={addinfo}>
             <fieldset className="fieldset">
  <legend className="fieldset-legend">Name</legend>
  <input type="text" className="input w-full" value={user?.displayName||""} readOnly name='name'/>
  
</fieldset>
<fieldset className="fieldset">
  <legend className="fieldset-legend">Email</legend>
  <input type="email" className="input w-full"  value={user?.email||""} readOnly name='email'/>
  
</fieldset>
            <fieldset className="fieldset">
       
  <legend className="fieldset-legend">Artifact Name</legend>
  <input type="text" className="input w-full" placeholder="Artifact Name" name='artifactName' />
  
</fieldset>

<fieldset className="fieldset">
  <legend className="fieldset-legend">Artifact Type</legend>
  <select defaultValue="Artifact Type" className="select w-full" name='artifactType'>
  <option disabled={true}>Pick a type</option>
  {
    types.map(ty=><option>{ty}</option>)
  }
  </select>
  
</fieldset>
<fieldset className="fieldset">
  <legend className="fieldset-legend">Historical Context</legend>
  <input type="text" className="input w-full" placeholder="Historical Context" name='historicalContext' />
  
</fieldset>
<fieldset className="fieldset">
  <legend className="fieldset-legend">Short description </legend>
  <input type="text" className="input w-full" placeholder="Short description " name='shortDescription'/>
  
</fieldset>
<fieldset className="fieldset">
  <legend className="fieldset-legend">Created At </legend>
  <input type="text" className="input w-full" placeholder="Created At " name='createdAt' />
  
</fieldset>
<fieldset className="fieldset">
  <legend className="fieldset-legend">Discovered At</legend>
  <input type="text" className="input w-full" placeholder="Discovered At"  name='discoveredAt'/>
  
</fieldset>
<fieldset className="fieldset">
  <legend className="fieldset-legend">Discovered By</legend>
  <input type="text" className="input w-full" placeholder="Discovered By" name='discoveredBy'/>
  
</fieldset>
<fieldset className="fieldset">
  <legend className="fieldset-legend">Present Location</legend>
  <input type="text" className="input w-full" placeholder="Present Location" name='presentLocation' />
  
</fieldset>
<fieldset className="fieldset md:col-span-2" >
  <legend className="fieldset-legend">Artifact Image</legend>
  <input type="URL" className="input w-full" placeholder="Artifact Image"  name='artifactImage' />
  
</fieldset>
<button className='btn btn-neutral md:col-span-2 hover:bg-secondary'>Add Artifact </button>
</form>
        </div>
        </div>
    );
};

export default AddArtifacts;