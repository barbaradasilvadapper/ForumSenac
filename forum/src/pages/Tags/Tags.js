import React from "react";
import { Grid } from "../../StyledGlobal";

import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import PageIntro from "../../components/PageIntroduction/PageIntro";
import FilterBar from "../../components/FilterBar/FilterBar";
import { PostContainer, TagPageContainer, TagPageGrid } from "./StyledTags";

import RecentesIcon from "../assets/Recente.png";
import TopIcon from "../assets/Top.png";
import TagCard from "../../components/TagCard/TagCard";

function Tags() {
  const buttons = [
    { label: 'Recente', icon: RecentesIcon },
    { label: 'Top', icon: TopIcon },
  ];
  const posts = [
    {
      PostTag: "#RelatosSãoLeopoldo",
      PostTitle: "relatos",
      PostContent:
        "Histórias inspiradoras de profissionais de diferentes origens sociais, a importância da representatividade e seus benefícios",
    },
    {
      PostTag: "#RelatosSãoLeopoldo",
      PostTitle: "relatos",
      PostContent:
        "Histórias inspiradoras de profissionais de diferentes origens sociais, a importância da representatividade e seus benefícios",
    },
    {
      PostTag: "#RelatosSãoLeopoldo",
      PostTitle: "relatos",
      PostContent:
        "Histórias inspiradoras de profissionais de diferentes origens sociais, a importância da representatividade e seus benefícios",
    },
  ];
  
  const breakIntoPairs = (array) => {
    const result = [];
    for (let i = 0; i < array.length; i += 2) {
      result.push(array.slice(i, i + 2));
    }
    return result;
  };

  const pairs = breakIntoPairs(posts);

  return (
    <>
      <TagPageContainer>
        <Grid>
          <Header />
          <Menu />
          <TagPageGrid>
            <PageIntro
              PageTitle="Tags"
              PageSubtitle="Aqui, você pode explorar uma variedade de tópicos que sejam de seu interesse, filtrando suas pesquisas através de tags relevantes e envolventes."
            />
            <FilterBar buttons={buttons} />
            <PostContainer>
              {pairs.map((pair, index) => (
                <div key={index}>
                  {pair.map((post, innerIndex) => (
                    <TagCard key={innerIndex} post={post.PostTag[]} post={post.PostTitle} post={post.PostContent}/>
                  ))}
                </div>
              ))}
            </PostContainer>
          </TagPageGrid>
        </Grid>
      </TagPageContainer>
    </>
  );
}

export default Tags;
