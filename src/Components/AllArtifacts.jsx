import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import Allcard from './Allcard';
import AnimatedSection from './AnimatedSection';
import AnimatedText from './AnimatedText';
import { Helmet } from 'react-helmet';

const AllArtifacts = () => {
  const initialData = useLoaderData(); 
  const [search, setSearch] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [fetchedData, setFetchedData] = useState(initialData); // data fetched or initial
  const [artifacts, setArtifacts] = useState(initialData); // filtered + sorted data

  // Fetch new data if search changes (optional)
  useEffect(() => {
    if (!search) {
      setFetchedData(initialData);
    } else {
      fetch(`https://artifacts-server-rose.vercel.app/artifacts6?search=${encodeURIComponent(search)}`)
        .then(res => res.json())
        .then(data => setFetchedData(data))
        .catch(() => setFetchedData([]));
    }
  }, [search, initialData]);

  // Apply sorting to fetchedData and update artifacts
  useEffect(() => {
    let sorted = [...fetchedData];

    switch (sortOption) {
      case 'name-asc':
        sorted.sort((a, b) => a.artifactName.localeCompare(b.artifactName));
        break;
      case 'name-desc':
        sorted.sort((a, b) => b.artifactName.localeCompare(a.artifactName));
        break;
      case 'like-asc':
        sorted.sort((a, b) => a.likeCount - b.likeCount);
        break;
      case 'like-desc':
        sorted.sort((a, b) => b.likeCount - a.likeCount);
        break;
    }

    setArtifacts(sorted);
  }, [fetchedData, sortOption]);

  return (
    <div className='py-10 w-5/6 mx-auto my-[40px]'>
      <Helmet>
        <title>All Artifacts</title>
      </Helmet>

      <div className='text-center space-y-2 mb-6'>
        <AnimatedSection>
          <AnimatedText text="All Artifacts" as="h1" className='text-4xl text-neutral' />
        </AnimatedSection>

        <AnimatedSection>
          <p className='font-medium text-neutral opacity-80'>
            Browse our complete collection of historical artifacts from around the world.
          </p>
        </AnimatedSection>

       

        <div className='mt-4'>
         
          <select
            id="sort"
            value={sortOption}
            onChange={e => setSortOption(e.target.value)}
            className="select select-bordered w-full max-w-xs"
          >
           <option value="" disabled>
    Sort by
  </option>
            <option value="name-asc">Name (A-Z)</option>
            <option value="name-desc">Name (Z-A)</option>
            <option value="like-asc">Likes (Low to High)</option>
            <option value="like-desc">Likes (High to Low)</option>
          </select>
        </div>
         <input
          type="text"
          placeholder="Search by artifact name"
          className="input input-bordered w-full max-w-xs"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-[40px]'>
        {artifacts.map(da => (
          <Allcard key={da._id} da={da} />
        ))}
      </div>
    </div>
  );
};

export default AllArtifacts;
