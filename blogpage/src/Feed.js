import React from 'react'
import Post from './Post'
import { useParams } from 'react-router-dom'
const Feed = ({posts}) => {
  const {id} = useParams
  const post  = posts.find(post =>(post.id).toString()===id)
  return (
    <div style={{minHeight:'70vh',display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap'}}>
    {posts.map(post=>(<Post key={post.id} post={post}/>))}

    </div>
  )
}

export default Feed