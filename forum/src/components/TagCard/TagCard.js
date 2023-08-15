import React from "react";
import {
  Column,
  PostCardContainer,
  PostContent,
  PostTag,
  PostTagContainer,
  PostTitle,
} from "./StyledTagCard";

function TagCard({ pairs }) {
  
  return (
    <>
      {pairs.map((pair, index) => (
        <PostCardContainer key={index}>
          {pair.map((post, innerIndex) => (
            <Column key={innerIndex}>
              <PostTagContainer>
                <PostTag>{post.PostTag}</PostTag>
              </PostTagContainer>
              <PostTitle>{post.PostTitle}</PostTitle>
              <PostContent>{post.PostContent}</PostContent>
            </Column>
          ))}
        </PostCardContainer>
      ))}
    </>
  );
}

export default TagCard;
