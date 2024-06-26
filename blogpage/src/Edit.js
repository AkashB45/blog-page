import React, { useEffect } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'
const Editpost = ({edittitle,editbody,setEdittitle,setEditbody,handleedit,posts}) => {
    const {id} = useParams();
    const post = posts.find(post=>(post.id).toString()===id);
    useEffect(()=>{
        setEdittitle(post.title);
    setEditbody(post.body);
    },[post])
    
    console.log(post);
  return (
    <div>
      <br></br>
       <h1 style={{fontSize:'30px',fontFamily:'sans-serif',fontWeight:'bold'}}>Edit post</h1>
      <br></br>
       
       <form onSubmit={(e)=> e.preventDefault()}  className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Title</label>
        <input
          type="text"
          id="title"
          required
          value={edittitle}
          onChange={(e) => setEdittitle(e.target.value)}
          placeholder="Enter title"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="post" className="block text-gray-700 text-sm font-bold mb-2">Post</label>
        <textarea
          id="post"
          required
          value={editbody}
          onChange={(e) => setEditbody(e.target.value)}
          placeholder="Enter your post"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={()=>handleedit(post.id)}
          >
          Edit
        </button>
      </div>
    </form>
    </div>
  )
  
}

export default Editpost