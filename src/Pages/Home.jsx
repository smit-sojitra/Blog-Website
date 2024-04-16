import React, { useEffect, useState } from 'react'
import Blogs from '../Components/Blogs'
import Header from '../Components/Header'
import Pagination from '../Components/Pagination'
import Preloader from '../Components/Preloader'

const Home = () => {
  const [loading,setLoading] = useState(true);
  useEffect(()=>{
    window.addEventListener('load',()=>{
      setLoading(false);
    })
  },[])
  return (
    <div className='flex w-full items-center h-full flex-col bg'>
      <div className='w-11/12 max-w-[670px] flex flex-col mx-auto'>

      {
        loading?
        (<Preloader/>):
        (
          <div>
          <Header/>
            <div className='my-[100px]'>
          <Blogs/>
          </div>
            <Pagination/>
          </div>
        )
      }
      </div>
    </div>
  )
}

export default Home