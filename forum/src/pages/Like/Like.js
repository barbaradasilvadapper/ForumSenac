import FilterBar from "../../components/FilterBar/FilterBar"
import PageIntro from "../../components/PageIntroduction/PageIntro"
import PostCard from "../../components/PostCard/PostCard"
import { DisabledStatus, LikeContainer, LikeGrid, PostContainer } from "./StyledLike"

import RecentesIcon from "../assets/Recente.png"
import TopIcon from "../assets/Top.png"
import ResolvidosIcon from "../assets/Resolvidos.png"
import ProfilePhoto from "../assets/Monster.svg"

import { Grid } from "../../StyledGlobal";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import MonsterReport from "../../components/MonsterReport/MonterReport"

function Like(){
    const buttonsContent = [
        { label: 'Recente', icon: RecentesIcon},
        { label: 'Top', icon: TopIcon },
        { label: 'Respondidos', icon: ResolvidosIcon },
    ]
    const postContent = [
        {
            UserPhoto: ProfilePhoto,
            Username: "Julia Yume",
            TimePosted:"5 min",
            PostTitle:"O papel das políticas públicas e da legislação trabalhista na diversidade e inclusão:",
            PostContent:"Quais medidas podem ser implementadas para incentivar a inclusão de trabalhadores marginalizados no mercado de trabalho e garantir a igualdade de oportunidades?",
            PostTag1:"políticas",
            PostTag2:"trabalho",
            PostTag3:"oportunidades",
        },
        {
            UserPhoto: ProfilePhoto,
            Username: "Julia Yume",
            TimePosted:"5 min",
            PostTitle:"O papel das políticas públicas e da legislação trabalhista na diversidade e inclusão:",
            PostContent:"Quais medidas podem ser implementadas para incentivar a inclusão de trabalhadores marginalizados no mercado de trabalho e garantir a igualdade de oportunidades?",
            PostTag1:"políticas",
            PostTag2:"trabalho",
            PostTag3:"oportunidades",
        },
    ]

    return(
    <>
    <Grid>
    <Header />
    <Menu />
        <LikeContainer>
            <LikeGrid>
                <PageIntro 
                    PageTitle="Likes" 
                    PageSubtitle="Relembre tudo aquilo que você curtiu na plataforma aqui!"
                />
                <MonsterReport 
                    PostTitle="Continue assim!"
                    Percentage={65}
                />
                <FilterBar buttons={buttonsContent}/>
                <DisabledStatus/>
                <PostContainer>
                {postContent.map((post, index) => (
                    <PostCard 
                        key={index}
                        UserPhoto={post.UserPhoto}
                        Username={post.Username}
                        TimePosted={post.TimePosted}
                        PostTitle={post.PostTitle}
                        PostContent={post.PostContent}
                        PostTag1={post.PostTag1}
                        PostTag2={post.PostTag2}
                        PostTag3={post.PostTag3}
                    />
                ))}
                </PostContainer>
                <DisabledStatus/>
            </LikeGrid>
        </LikeContainer>
    </Grid>
    </>
    )
}

export default Like;