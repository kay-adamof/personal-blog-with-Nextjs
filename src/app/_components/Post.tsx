import { Post } from "#/qiita";
import Link from "next/link";
import React from "react";
import { itemsUrl } from "./Posts";
import { cl } from "@/util";

type Props = {
  post: Post;
};

export default function Post({ post }: Props) {
  return (
    <div>
      <Link href={}>{post.title}</Link>
    </div>
  );
}
