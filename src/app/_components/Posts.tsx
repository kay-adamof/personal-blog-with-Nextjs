import { cl } from "@/util";
import React from "react";
import { Post } from "../../../types";

const itemsUrl = "https://qiita.com/api/v2/users/kay-adamof/items";
// const articleUrl = "/api/v2/items/:item_id"

export default async function Posts() {
  const res = await fetch(itemsUrl);
  const posts: Post[] = await res.json();
  cl('==========================')
  cl(posts.at(0))
  return (
    <div>
      {posts.map((post,index) => {
        if(index!=1){return undefined}
        return <div key={post.title}>{index} {post.title} {post.body}</div>;
      })}
    </div>
  );
}
