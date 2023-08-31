import React from "react";

type Props = {
  params: {
    postId: string;
  };
};

export default function Post({ params }: Props) {
  return <div>
  {params.postId}Post</div>;
}
