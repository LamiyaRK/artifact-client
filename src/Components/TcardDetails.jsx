import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import AuthContext from '../Context/AuthContext';
import { toast } from 'react-toastify';
import { ImHeart } from "react-icons/im";
import { useContext } from 'react';

const TcardDetails = () => {
    const { user } = useContext(AuthContext);
    const [data, setData] = useState({});
    const [likeCount, setLikeCount] = useState(0);
    const [likedBy, setLikedBy] = useState([]);
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
                setLikeCount(dat.likeCount || 0);
                setLikedBy(dat.likedBy || []);
            })
            .catch(err => {
                toast(err.message || "Failed to fetch artifact details", {
                    type: 'error',
                    theme: 'colored'
                });
            });
    }, [params.id, user?.accessToken]);

    const {
        artifactImage,
        artifactName,
        shortDescription,
        artifactType,
        historicalContext,
        createdAt,
        discoveredAt,
        discoveredBy,
        presentLocation,
        _id
    } = data;

    const result = likedBy.includes(user?.email);

    const handleLike = () => {
        if (!_id) return;

        if (result) {
            const newarr = likedBy.filter(email => email !== user?.email);
            axios.patch(`https://artifacts-server-rose.vercel.app/artifacts/${_id}`, {
                likeCount: likeCount - 1,
                likedBy: newarr
            }).then(() => {
                setLikeCount(likeCount - 1);
                setLikedBy(newarr);
            }).catch(err => {
                toast(err.message, { type: 'error', theme: 'colored' });
            });
        } else {
            const updatedLikedBy = [...likedBy, user?.email];
            axios.patch(`https://artifacts-server-rose.vercel.app/artifacts/${_id}`, {
                likeCount: likeCount + 1,
                likedBy: updatedLikedBy
            }).then(() => {
                setLikeCount(likeCount + 1);
                setLikedBy(updatedLikedBy);
            }).catch(err => {
                toast(err.message, { type: 'error', theme: 'colored' });
            });
        }
    };

    return (
        <div className='py-[100px] bg-[url("/background.png")] bg-cover bg-center'>
            <div className='flex items-center w-4/5 mx-auto gap-5 border-2 border-secondary p-5 bg-base-100 shadow-2xl rounded-2xl '>
                <div>
                    <img src={artifactImage} className='rounded-xl h-[380px]' alt="Artifact" />
                </div>
                <div className='text-neutral space-y-2'>
                    <p className='text-2xl font-bold border-b-1 border-neutral py-2'>{artifactName}</p>
                    <p className='font-semibold opacity-80 w-[80%]'>{shortDescription}</p>
                    <p><span className='font-semibold'>Created At : </span>{createdAt}</p>
                    <p><span className='font-semibold'>Discovered At :</span>{discoveredAt}</p>
                    <p><span className='font-semibold'>Discovered By : </span>{discoveredBy}</p>
                    <p><span className='font-semibold'>Historical Context : </span>{historicalContext}</p>
                    <p><span className='font-semibold'>Artifact Type : </span>{artifactType}</p>
                    <p><span className='font-semibold'>Present Location : </span>{presentLocation}</p>
                    <div className='flex items-center gap-3 text-2xl'>
                        <button onClick={handleLike}>
                            {!result ? <ImHeart className='text-white' /> : <ImHeart className='text-red-500' />}
                        </button>
                        <span className='text-lg'>{likeCount}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TcardDetails;
