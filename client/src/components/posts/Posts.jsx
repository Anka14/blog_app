import Post from '../post/Post'
import React from './posts.css'

export default function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((p) => (
        < Post post={p} />
      ))}


    </div>
  )
}
