import React from 'react'
import PostItem from './PostItem'

export default function Posts({posts}) {
   
  return (
    <div>
        {
          posts.map((post) => {
            return <PostItem key={post.id} {...post}/>
          })
        }
    </div>
  )
}
