import { IPost } from "@/qiita.schema.types";
import { cl } from "@/util";
import React from "react";

type Props = {
  params: {
    postId: string;
  };
};

export default async function Post({ params: { postId } }: Props) {
  const res = await fetch(`https://qiita.com/api/v2/items/${postId}`);
  const post: IPost = await res.json();

  return (
    <article className="prose lg:prose-xl">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </article>
  );
}
