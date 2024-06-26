import React from 'react'
import Feed from './Feed'
const Home = ({posts}) => {
  return (
    <div>
        <Feed posts={posts}/>
    </div>
  )
}

export default Home