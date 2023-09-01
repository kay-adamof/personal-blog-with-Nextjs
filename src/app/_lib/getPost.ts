export const getPost = async (postId:string) => {
  const res = await fetch(`https://qiita.com/api/v2/items/${postId}`);
  return await res.json();
};
