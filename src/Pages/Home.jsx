import React from 'react'
import Blogs from '../Components/Blogs'
import Header from '../Components/Header'
import Pagination from '../Components/Pagination'

const Home = () => {
  return (
    <div className='flex w-full items-center h-full flex-col bg'>
      <Header/>
      <div className='my-[100px]'>
        <Blogs/>
      </div>
      <Pagination/>
    </div>
  )
}

export default Home