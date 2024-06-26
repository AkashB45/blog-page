import React from 'react'
import { useParams,Link } from 'react-router-dom'

const Postpage = ({posts,handledelete}) => {
  const {id} = useParams();
  const post = posts.find(post=>post.id.toString()===id)

  return (
    <div style={{height:'70vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
      {post &&   <> 
<div className="relative max-w-xs m-5 p-5 overflow-hidden bg-white shadow-lg rounded-xl dark:bg-gray-800">
    <a href="#" className="block w-full h-full">
     <div className="w-full">
            <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                {post.title}
            </p>
           
            <p className="mb-4 text-sm text-gray-400 dark:text-gray-300">
                {(post.body.length)<=60?post.body:(`${post.body.slice(0,60)}...`)};
            </p>
        </div>
   
    </a>
   <Link to={`/edit/${post.id}`}> <button className="flex-shrink-0 px-5 py-2 mx-5 text-base font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200">
                        Edit
                    </button>
    </Link>
    <button className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" onClick={()=>handledelete(id)} type="submit">
                        Delete
                    </button>
</div>

</>}
      {!post &&   <> 
<div className="relative max-w-xs m-5 p-5 overflow-hidden bg-white shadow-lg rounded-xl dark:bg-gray-800">
    <a href="#" className="block w-full h-full">
     <div className="w-full">
            <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                Post not found
            </p>
           
            <p className="mb-4 text-sm text-gray-400 dark:text-gray-300">
            Sorry for inconvenience...
            </p>
        </div>
    
    </a>
</div>

</>}
    </div>
  )
}

export default Postpage