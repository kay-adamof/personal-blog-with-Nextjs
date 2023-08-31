import React from "react";
import Post from "./Post";
import { getPosts } from '@/app/_lib/getPosts'

export default async function Posts() {
  const posts = await getPosts() 

  return (
    <div>
      {posts.map((post, index) => {
        if (index != 1) {
          return undefined;
        }
        return <Post key={post.id} post={post} />;
      })}
    </div>
  );
}
