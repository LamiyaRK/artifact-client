import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import Allcard from './Allcard';
import AnimatedSection from './AnimatedSection';
import AnimatedText from './AnimatedText';
import { Helmet } from 'react-helmet';

const AllArtifacts = () => {
  const data = useLoaderData();
  const [search, setSearch] = useState('');
  const [artifacts, setArtifacts] = useState(data);

  useEffect(() => {
    if (search === '') {
      setArtifacts(data); // Reset when input is cleared
    } else {
      fetch(`http://localhost:3000/artifacts?search=${search}`)
        .then(res => res.json())
        .then(data => setArtifacts(data));
    }
  }, [search, data]);

  return (
    <div className='py-10 w-5/6 mx-auto my-[40px]'>
      <Helmet>
        <title>All Artifacts</title>
      </Helmet>

      <div className='text-center space-y-2 mb-6'>
        <AnimatedSection>
          <AnimatedText
            text="All Artifacts"
            as="h1"
            className='text-4xl font-bold text-neutral'
          />
        </AnimatedSection>

        <AnimatedSection>
          <p className='font-medium text-neutral opacity-80'>
            Browse our complete collection of historical artifacts from around the world.
          </p>
        </AnimatedSection>

        <input
          type="text"
          placeholder="Search by artifact name"
          className="input input-bordered w-full max-w-xs"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-[40px]'>
        {
          artifacts.map(da => <Allcard key={da._id} da={da}></Allcard>)
        }
      </div>
    </div>
  );
};

export default AllArtifacts;
