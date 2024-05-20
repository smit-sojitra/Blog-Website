import React from 'react'
import Header from '../Components/Header'
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'
import Pagination from '../Components/Pagination'
import Blogs from '../Components/Blogs'

const CategoryPage = () => {
  const location = useLocation();
  const category = location.pathname.split('/').at(-1).replaceAll("-"," ");
  const navigate = useNavigate();
  return (
    <div  className='w-full h-full'>

    <div className='w-11/12 max-w-[670px] flex flex-col mx-auto gap-y-7 mt-[100px]'>
      <Header/>
      <div>
        <button className='border-2 btn txt py-1 px-4 rounded-md' onClick={()=>navigate(-1)}>Back</button>
        <h2 className='font-medium text-xl txt my-5'>
          Blogs On <span>{category}</span>
        </h2>
        <Blogs/>
        <Pagination/>
      </div>
    </div>
    </div>
  )
}

export default CategoryPage