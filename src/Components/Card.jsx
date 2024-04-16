import React from 'react'
import { NavLink } from 'react-router-dom'

const Card = ({post}) => {
    console.log('for blogs')
  return (
    <div className='flex flex-col gap-y-1'>
        <NavLink className="txt" to={`/blogs/${post.id}`}>
        <span className='font-bold underline txt'>{post.title}</span></NavLink>
        <p className="text-[14px] txt">
            By <span className="italic txt">{post.author}</span> on {" "}
            <NavLink className="txt" to={`/categories/${post.category.replaceAll(" ","-")}`}>
                <span className="underline font-medium txt">{post.category}</span>
            </NavLink>
        </p>
        <p className="text-[14px] txt">Posted on {post.date}</p>
        <p className="text-[16px] mt-[7px] txt">{post.content}</p>
        <div className=' space-x-2' >
            {
                post.tags.map((tag,index)=>{
                    return <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                        <span className="text-xs font-semibold underline text-blue-700 cursor-pointer txt" >#{tag}</span>
                    </NavLink>
                })
            }
        </div>
    </div>
  )
}

export default Card
