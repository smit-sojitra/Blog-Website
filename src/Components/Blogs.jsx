import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import Spinner from './Spinner';
import Card from './Card';

const Blogs = () => {
    const {posts,loading} = useContext(AppContext);
    console.log(posts);
  return (
    <div className='w-11/12 max-w-[670px] flex flex-col gap-y-7  pb-[80px]'>
        {
            loading?
            (<Spinner/>) :
            (
                posts.length ===0?
                (<div className='w-full flex justify-center items-center h-screen'>
                    <p className='txt'>No posts found</p>
                </div>) :
                (posts.map((post)=>{
                    return <Card key={post.id} post={post}/>
                }))
            )
        }
    </div>
  )
}

export default Blogs