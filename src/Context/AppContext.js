import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const  AppContext = createContext();

    function AppContextProvider({children}){
    const [page,setPage] = useState(1);
    const [loading,setLoading] = useState(false);
    const [posts,setPosts] = useState([]);
    const [totalPages,setTotalPages] = useState(null);
    const navigate = useNavigate();
    // console.log('this is page',page);
   
    async function fetchBlogs(page=1,tag,category){    
        setLoading(true);
        console.log('inside fetch function');
        
        let url = `${baseUrl}?page=${page}`;
        if (tag) {
          url += `&tag=${tag}`;
        }
        if (category) {
          url += `&category=${category}`;
        }
        try{
            const op =await fetch(url);
            const data = await op.json();
            if(!data.posts || data.posts.length===0)
            // throw new Error('something went wrong try again');
        setPage(data?.page);
        setTotalPages(data?.totalPages);
        setPosts(data?.posts);
        // console.log(data);
    }
    catch(e){
        alert('Something went wrong');
        console.log(e);
            setPage(1);
            setTotalPages(null);
            setPosts([]);
        }
        setLoading(false);
    }
    function changeHandler(page){
        navigate({search:`?page=${page}`})
        setPage(page);
        // fetchBlogs(page);
    }
    const value={
        posts,
        setPosts,
        page,
        setPage,
        loading,
        setLoading,
        fetchBlogs,
        changeHandler,
        totalPages,
        setTotalPages
    }
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}
export default AppContextProvider;


