import React from "react";

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

  return (
    <>
      <TagPageContainer>
          <TagPageGrid>
            <PageIntro
              PageTitle="Tags"
              PageSubtitle="Aqui, você pode explorar uma variedade de tópicos que sejam de seu interesse, filtrando suas pesquisas através de tags relevantes e envolventes."
            />
            <FilterBar buttons={buttons} />
            <PostContainer>
                <TagCard posts={posts}/>
            </PostContainer>
          </TagPageGrid>
      </TagPageContainer>
    </>
  );
}

export default Tags;
