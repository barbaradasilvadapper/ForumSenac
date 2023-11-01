import React from "react";
import {
  Column,
  PostCardContainer,
  PostContent,
  PostTag,
  PostTagContainer,
  PostTitle,
} from "./StyledTagSearch";

function TagSearch({ posts }) {

  const novoPost = posts.map((post, index) =>{
    return(
      <PostCardContainer key={index}>
        <PostTagContainer>
          <PostTag>{post.PostTag}</PostTag>
        </PostTagContainer>
      </PostCardContainer>
    )
  })

  return (
    <>
      {novoPost}
    </>
  );
}

export default TagSearch;
