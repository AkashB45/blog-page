import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Home from './Home'
const Newpost = ({posttitle,postbody,setPosttitle,setPostbody,handlesubmit,posts}) => {
  return (
    <div>
      <br></br>
       <h1 style={{fontSize:'30px',fontFamily:'sans-serif',fontWeight:'bold'}}>New post</h1>
      <br></br>
       
       <form onSubmit={handlesubmit} className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Title</label>
        <input
          type="text"
          id="title"
          required
          value={posttitle}
          onChange={(e) => setPosttitle(e.target.value)}
          placeholder="Enter title"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="post" className="block text-gray-700 text-sm font-bold mb-2">Post</label>
        <textarea
          id="post"
          required
          value={postbody}
          onChange={(e) => setPostbody(e.target.value)}
          placeholder="Enter your post"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
          Submit
        </button>
      </div>
    </form>
    {/* <Home posts={posts}/> */}
    </div>
  )
  
}

export default Newpost