import { IPost } from "@/qiita.schema.types";
import { itemsUrl } from '@/app/_constants/URLs';

export const getPosts = async () => {
  const res = await fetch(itemsUrl);
  const posts: IPost[] = await res.json();
  return posts;
};
