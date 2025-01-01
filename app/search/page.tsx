"use client"
import React, { useState } from 'react'
import SearchPage from '@/components/search-page';
import ProjectCards from '../components/ProjectCards';

const Search = () => {
  const [start, SetStart] = useState(false);
  return (
    <div className='w-full h-screen flex flex-col pt-10 pb-14'>
      <div className={`w-full h-full flex items-center justify-center ${start ? "hidden" : ""}`}>
        <ProjectCards />
      </div>
      <SearchPage start={SetStart} />
    </div>
  )
}

export default Search