import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
import Header from '../Components/Header';
import Spinner from '../Components/Spinner';
import Card from '../Components/Card';

const BlogPage = () => {
    const[blog,setBlog] = useState(null);
    const[relatedBlogs,setRelatedBlogs] = useState([]);
    const {loading,setLoading} = useContext(AppContext);
    const location = useLocation();
    const navigate = useNavigate();
    const blogId = location.pathname.split('/').at(-1);
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/";

    async function fetchBlogs(){
        setLoading(true);
        let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
        try{
            const op = await fetch(url);
            const data = await op.json();
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
            console.log(data.relatedBlogs);
        }
        catch(e){
            setBlog(null);
            setRelatedBlogs([]);
            alert('Something went wrong try again');
        }
        setLoading(false);
    }
    useEffect(()=>{
        if(blogId)
        fetchBlogs();
    },[location.pathname])
  return (
    <div className='w-full h-full'>
        <div className='w-11/12 max-w-[670px] flex flex-col mx-auto gap-y-7 mt-[100px] mb-6 '>
            <Header/>
            <div>
                <button className='border-2 btn py-1 px-4 rounded-md txt' onClick={()=>navigate(-1)}>Back</button>
            </div>
            <div >
                {
                    loading?
                    (<Spinner/>):
                    blog?
                    (
                        <div className='flex flex-col gap-y-7'>
                            <Card post={blog}/>
                            <h2 className='font-bold capitalize text-3xl txt'>Related blogs</h2>
                            {
                                relatedBlogs.map((post)=>{
                                return <Card key={post.id} post={post}/>
                                })
                            }
                        </div>
                    ):
                    (
                        <div className='txt'>no blog found</div>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default BlogPage


