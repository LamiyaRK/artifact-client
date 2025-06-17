import React from 'react'
import { useNavigate } from 'react-router';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const MyTable = ({da,index,refresh}) => {
  console.log(da)
  const navigate=useNavigate()
     const {artifactImage,
artifactType,discoveredAt,discoveredBy,artifactName,_id,
presentLocation}=da
     const handleDelete=()=>{
      Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
   
  refresh(_id);
 
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  
    navigate("/allartifacts")
  }
});
     }
    return (
        <tr>
        <td>
          {index+1}
        </td>
       <td >
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={artifactImage}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{artifactName}</div>
              <div className="text-sm opacity-50">{artifactType}</div>
            </div>
          </div>
        </td>
        <td>
         {discoveredBy}
          <br />
          <span className="badge badge-ghost badge-sm">{discoveredAt}</span>
        </td>
        <td>{presentLocation}</td>
        <td className='flex items-center  gap-2'>
       


<button onClick={handleDelete}
  class="group relative flex h-14 w-14 flex-col items-center justify-center overflow-hidden rounded-xl border-2 border-red-800 bg-red-400 hover:bg-red-600"
>
  <svg
    viewBox="0 0 1.625 1.625"
    class="absolute -top-7 fill-white delay-100 group-hover:top-6 group-hover:animate-[spin_1.4s] group-hover:duration-1000"
    height="15"
    width="15"
  >
    <path
      d="M.471 1.024v-.52a.1.1 0 0 0-.098.098v.618c0 .054.044.098.098.098h.487a.1.1 0 0 0 .098-.099h-.39c-.107 0-.195 0-.195-.195"
    ></path>
    <path
      d="M1.219.601h-.163A.1.1 0 0 1 .959.504V.341A.033.033 0 0 0 .926.309h-.26a.1.1 0 0 0-.098.098v.618c0 .054.044.098.098.098h.487a.1.1 0 0 0 .098-.099v-.39a.033.033 0 0 0-.032-.033"
    ></path>
    <path
      d="m1.245.465-.15-.15a.02.02 0 0 0-.016-.006.023.023 0 0 0-.023.022v.108c0 .036.029.065.065.065h.107a.023.023 0 0 0 .023-.023.02.02 0 0 0-.007-.016"
    ></path>
  </svg>
  <svg
    width="16"
    fill="none"
    viewBox="0 0 39 7"
    class="origin-right duration-500 group-hover:rotate-90"
  >
    <line stroke-width="4" stroke="white" y2="5" x2="39" y1="5"></line>
    <line
      stroke-width="3"
      stroke="white"
      y2="1.5"
      x2="26.0357"
      y1="1.5"
      x1="12"
    ></line>
  </svg>
  <svg width="16" fill="none" viewBox="0 0 33 39" class="">
    <mask fill="white" id="path-1-inside-1_8_19">
      <path
        d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"
      ></path>
    </mask>
    <path
      mask="url(#path-1-inside-1_8_19)"
      fill="white"
      d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"
    ></path>
    <path stroke-width="4" stroke="white" d="M12 6L12 29"></path>
    <path stroke-width="4" stroke="white" d="M21 6V29"></path>
  </svg>
</button>

<Link to={`/updateartifact/${_id}`}><p
  class="md:block pl-2 pt-2 bg-success text-success hover:bg-indigo-800 shadow-3xl rounded-xl z-30 group"
>
  <div class="relative h-12 w-12">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="green"
      viewBox="0 0 48 48"
      height="48"
      width="48"
      class="absolute inset-0 z-30"
    >
      <rect
        fill="white"
        transform="rotate(-50, 38, 38)"
        rx="2"
        height="6"
        width="30"
        y="10"
        x="25"
      ></rect>
      <rect
        fill="silver"
        transform="rotate(-50, 31, 18)"
        rx="1"
        height="3"
        width="8"
        y="10"
        x="25"
      ></rect>
    </svg>

    <svg
      fill="yellow"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      class="absolute right-6 top-0 h-6 w-6 text-white z-20 hidden group-hover:block"
    >
      <path
        clip-rule="evenodd"
        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
        fill-rule="evenodd"
      ></path>
    </svg>
  </div>
</p></Link>


        </td>
      </tr>
    );
};

export default MyTable;