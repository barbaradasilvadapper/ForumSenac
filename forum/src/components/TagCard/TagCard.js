import React from "react";
import {
  Column,
  PostCardContainer,
  PostContent,
  PostTag,
  PostTagContainer,
  PostTitle,
} from "./StyledTagCard";

function TagCard({ posts }) {

  const novoPost = posts.map((post, index) =>{
    return(
      <PostCardContainer key={index}>
        <Column>
        <PostTagContainer>
                <PostTag>{post.PostTag}</PostTag>
              </PostTagContainer>
              <PostTitle>{post.PostTitle}</PostTitle>
              <PostContent>{post.PostContent}</PostContent>
        </Column>
      </PostCardContainer>
    )
  })

  return (
    <>
      {novoPost}
    </>
  );
}

export default TagCard;
