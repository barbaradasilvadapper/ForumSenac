import { Grid } from "../../StyledGlobal"
import FilterBar from "../../components/FilterBar/FilterBar"
import Header from "../../components/Header/Header"
// import MainDashboard from "../../components/MainDashboard/MainDashboard"
import Menu from "../../components/Menu/Menu"
import PageIntro from "../../components/PageIntroduction/PageIntro"
import PostCard from "../../components/PostCard/PostCard"
import { DisabledStatus, MyPostsContainer, MyPostsGrid, PostContainer } from "./MyPosts.jsx"

import RecentesIcon from "../assets/Recente.png"
import ResolvidosIcon from "../assets/Resolvidos.png"
import ProfilePhoto from "../assets/Monster.svg"
import CardProgress from "../../components/CardProgress/CardProgress.js"

function MyPosts(){
    const buttons = [
        { label: 'Recente', icon: RecentesIcon},
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
            <MyPostsContainer>
            <MyPostsGrid>
                <PageIntro PageTitle="Seus desafios" PageSubtitle="Questionar é o caminho mais rápido para o crescimento social e a descoberta de novas soluções que antes pareciam inalcançáveis!"/>
                <CardProgress 
                    PostTitle="Resolvidos"
                    PostContent="Percentual de interação em seus desafios"/>
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

            </MyPostsGrid>
            </MyPostsContainer>
        </Grid>
        </>
    )
}

export default MyPosts