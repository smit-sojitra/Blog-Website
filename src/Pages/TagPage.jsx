import React, { useContext } from 'react'
import Header from '../Components/Header'
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'
import Pagination from '../Components/Pagination'
import Blogs from '../Components/Blogs'

export const TagPage = () => {
  // const {tag} = useContext(AppContext);
  const location = useLocation();
  const tag = location.pathname.split('/').at(-1);
  const navigate = useNavigate();
  return (
    <div className='bg w-full h-full'>
      <div className='w-11/12 max-w-[670px] flex flex-col mx-auto gap-y-7 mt-[100px]'>
        <Header/>
        <div>
          <button className='border-2 border-gray-300 py-1 px-4 rounded-md' onClick={()=>navigate(-1)}>Back</button>
          <h2 className='font-medium text-xl my-5'>
            Blog Tagged <span>#{tag}</span>
          </h2>
          <Blogs/>
          <Pagination/>
        </div>
      </div>
    </div>
  )
}
