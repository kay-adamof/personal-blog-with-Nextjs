import { cl } from "@/util";
import React from "react";

const URL = "https://qiita.com/api/v2/users/kay-adamof/items";

export default async function Posts() {
  const res = await fetch(URL);
  const posts: Post[] = await res.json();
  return (
    <div>
      {posts.map((post) => {
        return <div key={post.title}>{post.title}</div>;
      })}
    </div>
  );
}
