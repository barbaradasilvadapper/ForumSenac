import React, { useEffect, useState } from "react";

import PageIntro from "../../components/PageIntroduction/PageIntro";
import FilterBar from "../../components/FilterBar/FilterBar";
import { Column, PostCardContainer, PostContainer, PostContent, PostTag, PostTagContainer, PostTitle, TagPageContainer, TagPageGrid } from "./StyledTags";

import RecentesIcon from "../assets/Recente.png";

import { Grid } from "../../StyledGlobal";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import { api } from "../../services/api";

function Tags() {
  const buttons = [
    { label: 'Recente', icon: RecentesIcon },
    // { label: 'Top', icon: TopIcon },
  ];

  const [posts, setPosts] = useState([]);
  const [searched, setSearched] = useState('');

  const handleSearchChange = (value) => {
      setSearched(value);
  };
  
  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await api.get('/tag/tag');
            const postList = response.data.data;
            setPosts(postList);
        } catch (err) {
            console.error(err);
        }
    };
    fetchData();
  }, []);

  return (
    <>
    <Grid>
    <Header />
    <Menu />
      <TagPageContainer>
          <TagPageGrid>
            <PageIntro
              PageTitle="Tags"
              PageSubtitle="Aqui, você pode explorar uma variedade de tópicos que sejam de seu interesse, filtrando suas pesquisas através de tags relevantes e envolventes."
            />
            <FilterBar buttons={buttons} onSearchChange={handleSearchChange}/>
              {searched !== '' ? (
              <PostContainer>
                {posts
                .filter((post) => post.TagName.toLowerCase().includes(searched.toLowerCase()))
                .map((post) => (
                  <PostCardContainer key={post.TagID}>
                      <Column>
                      <PostTagContainer>
                              <PostTag>#{post.TagName}</PostTag>
                            </PostTagContainer>
                            <PostTitle>{post.TagName}</PostTitle>
                            <PostContent>{post.TagDescription}</PostContent>
                      </Column>
                    </PostCardContainer>
                ))}
              </PostContainer>
              ) : (
              <PostContainer>
                {posts.map((post) => (
                  <PostCardContainer key={post.TagID}>
                    <Column>
                    <PostTagContainer>
                            <PostTag>#{post.TagName}</PostTag>
                          </PostTagContainer>
                          <PostTitle>{post.TagName}</PostTitle>
                          <PostContent>{post.TagDescription}</PostContent>
                    </Column>
                  </PostCardContainer>
                ))}
              </PostContainer>
              )}
          </TagPageGrid>
      </TagPageContainer>
    </Grid>
    </>
  );
}

export default Tags;
