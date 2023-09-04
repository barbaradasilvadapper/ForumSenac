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
        <Column>
        <PostTagContainer>
                <PostTag>{post.PostTag}</PostTag>
              </PostTagContainer>
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

export default TagSearch;
