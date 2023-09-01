import { getPost } from "@/app/_lib/getPost";
import { IPost } from "@/qiita.schema.types";
import { cl } from "@/util";
import React from "react";

type Props = {
  params: {
    postId: string;
  };
};

export default async function Post({ params: { postId } }: Props) {
  const post: IPost = await getPost(postId)
  return (
    <article className="prose  ">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </article>
  );
}
