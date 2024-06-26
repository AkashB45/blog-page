import React from 'react'
import { Link,useParams } from 'react-router-dom'

const Post = ({post}) => {
  const today = new Date();
  return (
  <> 
<div className="relative max-w-xs m-5 p-5 overflow-hidden bg-white shadow-lg rounded-xl dark:bg-gray-800">
    <div className="block w-full h-full">
     <Link to={`${post.id}`}> <div className="w-full">
            <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                {post.title}
            </p>
           
            <p className="mb-4 text-sm text-gray-400 dark:text-gray-300">
                {(post.body.length)<=60?post.body:(`${post.body.slice(0,60)}...`)};
            </p>
        </div>
    </Link>  
    </div>
</div>
</>

  )
}

export default Post