import React from 'react'
import SearchPage from '@/components/search-page';
import ProjectCards from '../components/ProjectCards';

const Search = () => {
  return (
    <div className='w-full h-screen flex flex-col pt-10 pb-14'>
      <div className='w-full h-full flex items-center justify-center'>
        <ProjectCards />
      </div>
      <div className='flex w-full h-full items-end'>
      <SearchPage />
      </div>
    </div>
  )
}

export default Search