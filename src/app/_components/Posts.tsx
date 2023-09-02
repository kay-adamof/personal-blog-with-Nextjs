import React from "react";
import Post from "./Post";
import { getPosts } from '@/app/_lib/getPosts'

export default async function Posts() {
  const posts = await getPosts() 

  return (
    <div>
      {posts.map((post, index) => {
        return <Post key={post.id} post={post} />;
      })}
    </div>
  );
}
