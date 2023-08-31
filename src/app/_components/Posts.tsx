import { IPost } from "#/qiita";
import React from "react";
import Post from "./Post";

export const itemsUrl = "https://qiita.com/api/v2/users/kay-adamof/items";

export default async function Posts() {
  const res = await fetch(itemsUrl);
  const posts: IPost[] = await res.json();
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
