import './App.css';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import About from './About';
import NewPost from './NewPost';
import { Navigate, Route, Router, Routes, useNavigate } from 'react-router-dom';
import Home from './Home';
import Postpage from './Postpage';
import Post from './Post';
import { useState,useEffect } from 'react';
import Feed from './Feed';
import Newpost from './NewPost';
import api from './api/posts';
import Edit from './Edit';
function App() {
  const [posts,setPosts]=useState([] );
  const [search,setSearch] = useState('');
  const [searchRes,setSearchRes] = useState([]);
  const [posttitle,setPosttitle] = useState('');
  const [postbody,setPostbody] = useState('');
  const [edittitle,setEdittitle] = useState('');
  const [editbody,setEditbody] = useState('');
  const navigate = useNavigate();
  const handlesubmit=async (e)=>{
    e.preventDefault();
    const id = posts.length?posts[posts.length-1].id+1:1;
    console.log(id);
    const npost = {id:id,title:posttitle,body:postbody};
    try{
      const response = await api.post("/posts",npost);
      const allpost = [...posts,response.data];
      setPosts(allpost);
      }
      catch(err)
      {
        console.log(err.message)
      }
    console.log(posts);
    setPosttitle('');
    setPostbody('');
    navigate('/');
    
  }
  const handleedit=async(id)=>{
    const epost = {id:id,title:edittitle,body:editbody};
    console.log(epost)
    try{
    const response = await api.put(`/posts/${id}`,epost);
    const allpost = posts.map(post=>post.id===id?{...response.data}:post)
    setPosts(allpost);
    }
    catch(err)
    {
      console.log(err.message);
    }
    setEdittitle('');
    setEditbody('');
    navigate('/')
    
  }
  const handledelete=async (id)=>{
    try{
      await api.delete(`/posts/${id}`);
      const nposts = posts.filter(post=>post.id!=id);
      setPosts(nposts);
          }
          catch(err)
          {
            console.log(err.message)
          }
        navigate('/');
  }
  useEffect(()=>{

    const fetchpost= async()=>{
      try{
      const response = await api.get("/posts");
      setPosts(response.data);
      }
      catch(err)
      {
        console.log(err.message)
      }
    }
    fetchpost();
  },[])
  useEffect(
    ()=>{
      const filteredres = posts.filter((post)=>(
      (post.title).toLowerCase().includes(search.toLowerCase()))||
      (post.body).toLowerCase().includes(search.toLowerCase()));
      setSearchRes(filteredres.reverse());
    },
  [posts,search])
  return (
    <div className="App" style={{backgroundColor:'antiquewhite'}}>
      <Header/>
      <Nav search={search} setSearch={setSearch}/> 
      <Routes>
        <Route path='/'>
          <Route index element={<Home posts={searchRes}/>}/>
          <Route path=":id" element={<Postpage posts={posts} handledelete = {handledelete} />}/>
        </Route>
        <Route path='/edit/:id' element={<Edit edittitle={edittitle} setEdittitle={setEdittitle} editbody={editbody}  setEditbody={setEditbody} handleedit={handleedit} posts={posts}/>}>
          </Route>
        <Route path='/about' element={<About/>}/>
        <Route path='/newpost' element={ <Newpost posttitle={posttitle} setPosttitle={setPosttitle} postbody={postbody}setPostbody={setPostbody} handlesubmit={handlesubmit} posts = {posts} /> }>
          </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
