import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const Pagination = () => {
  const {posts,page,totalPages,changeHandler} = useContext(AppContext);
  return (
    <div className='bg border-t-2 drop-shadow-md flex justify-center inset-x-0 fixed bottom-0 shadow-xl w-full'>
      <div className='flex w-11/12 max-w-[670px] space-x-4 gap-x-4 justify-between items-center'>
        <div className='space-x-4'>
        { page>1 &&
          <button className='border-2 btn py-1 px-4 rounded-md txt' onClick={()=>changeHandler(page-1)}>Previous</button>
        }
        { page<totalPages &&
          <button className='border-2 btn py-1 px-4 rounded-md txt' onClick={()=>changeHandler(page+1)}>Next</button>
        }
        </div>
        {
          posts.length===0?(<div></div>):(<p className='py-4 txt'>Page {page} of {totalPages}</p>)
        }
      </div>
    </div>
  )
}

export default Pagination