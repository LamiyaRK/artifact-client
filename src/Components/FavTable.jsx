import React from 'react';
import { Link } from 'react-router';

const FavTable = ({da,index}) => {
   const {
        artifactImage,
        artifactName,
      
        artifactType,
       
        discoveredAt,
        discoveredBy,
        presentLocation,
        _id
    } = da;

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
       
<Link to={`/card-details/${_id}`}><button className='fancy-button'>View details</button></Link>







        </td>
      </tr>
    );
};

export default FavTable;