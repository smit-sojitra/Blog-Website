import './App.css';
import { useContext, useEffect,useState} from 'react';
import { AppContext } from './Context/AppContext';
import { Route,Routes, useLocation, useSearchParams } from 'react-router-dom';
import Home from './Pages/Home';
import CategoryPage from './Pages/CategoryPage';
import { TagPage } from './Pages/TagPage';
import BlogPage from './Pages/BlogPage';

export const App = () => {
  
  const [loading,setLoading] = useState(true);
  const [searchParams,setSearchParams]= useSearchParams();
  const location = useLocation();
  const {fetchBlogs} = useContext(AppContext);
  useEffect(()=>{
    console.log('hii');
    const page = searchParams.get('page') ?? 1;
    if(location.pathname.includes('tag')){
      const tag = location.pathname.split('/').at(-1).replaceAll("-"," ");
      fetchBlogs(page,tag);
    }
    else if(location.pathname.includes('category')){
      const category = location.pathname.split('/').at(-1).replaceAll("-"," ")
      fetchBlogs(page,null,category);
    }
    else{
      fetchBlogs(page);
    }
    setTimeout(() => {
        setLoading(false);
      
    }, 2000);
  },[location.pathname,location.search])
  
    return (
    <Routes>
      <Route path='/' element={<Home loading={loading}/>}></Route>
      <Route path='/blogs/:blogId' element={<BlogPage/>}></Route>
      <Route path='/tags/:tag' element={<TagPage/>}></Route>
      <Route path='/categories/:categoryddd' element={<CategoryPage/>}></Route>
    </Routes>
  );
}

export default App;

