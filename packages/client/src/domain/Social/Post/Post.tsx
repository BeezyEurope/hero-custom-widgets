import React from "react";
import {
  StyledContentText,
  StyledContentTime,
  StyledContentUserTime,
} from "./Post.styles";

type PostProps = {
  link: string;
  user: string;
  createdAt: string;
  width: number;
  text: string;
};

const Post: React.FC<PostProps> = ({
  link,
  user,
  createdAt,
  width,
  text,
}: PostProps): React.ReactElement => {
  return (
    <a href={link} target="_top">
      <StyledContentUserTime style={{ width: "100vw" }}>
        {user} <StyledContentTime date={createdAt} />
      </StyledContentUserTime>
      <StyledContentText style={{ width }}>{text}</StyledContentText>
    </a>
  );
};

export default Post;
