import { MDXRemote } from "next-mdx-remote/rsc";
import { getPost } from "@/app/_lib/getPost";
import { IPost } from "@/qiita.schema.types";
import React from "react";
import rehypeHighlight from "rehype-highlight";
import 'highlight.js/styles/night-owl.css'

type Props = {
  params: {
    postId: string;
  };
};

export default async function Post({ params: { postId } }: Props) {
  const post: IPost = await getPost(postId);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <article className="prose">
        <MDXRemote
          source={post.body}
          options={{
            mdxOptions: {
              rehypePlugins: [rehypeHighlight],
            },
          }}
        />
      </article>
    </main>
  );
}
