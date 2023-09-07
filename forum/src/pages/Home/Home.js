import { useNavigate } from "react-router-dom"

import { Grid } from "../../StyledGlobal";
import FilterBar from "../../components/FilterBar/FilterBar"
import PageIntro from "../../components/PageIntroduction/PageIntro"
import PostCard from "../../components/PostCard/PostCard"
import { DisabledStatus, HomeContainer, HomeGrid, PostContainer } from "./StyledHome"
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";

import RecentesIcon from "../assets/Recente.png"
import TopIcon from "../assets/Top.png"
import ResolvidosIcon from "../assets/Resolvidos.png"
import ProfilePhoto from "../assets/Monster.svg"
import MonsterReport from "../../components/MonsterReport/MonterReport";

function Home(){
    const buttons = [
        { label: 'Recente', icon: RecentesIcon},
        { label: 'Top', icon: TopIcon },
        { label: 'Respondidos', icon: ResolvidosIcon },
    ];
    
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
    ];


    return(
        <>
        <Grid>
        <Header />
        <Menu />
        <HomeContainer>
            <HomeGrid>
                <PageIntro PageTitle="Desafios" PageSubtitle="Seja a voz da mudança e participe ativamente dos debates, sugerindo possíveis intervenções. O poder da transformação está em suas mãos!"/>
                <MonsterReport 
                    PostTitle="Continue assim!"
                    Percentage={65}
                />
                <FilterBar buttons={buttons}/>
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
            </HomeGrid>
        </HomeContainer>
        </Grid>
        </>
    )
}

export default Home