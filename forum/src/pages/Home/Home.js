import { Grid } from "../../StyledGlobal"
import FilterBar from "../../components/FilterBar/FilterBar"
import Header from "../../components/Header/Header"
import MainDashboard from "../../components/MainDashboard/MainDashboard"
import Menu from "../../components/Menu/Menu"
import PageIntro from "../../components/PageIntroduction/PageIntro"
import PostCard from "../../components/PostCard/PostCard"
import { DisabledStatus, HomeContainer, HomeGrid, PostContainer } from "./StyledHome"
import ProfilePhoto from "../assets/Monster.svg"

function Home(){
    return(
        <>
        <HomeContainer>
        <Grid>
            <Header />
            <Menu />
            <HomeGrid>
                <PageIntro PageTitle="Desafios" PageSubtitle="Seja a voz da mudança e participe ativamente dos debates, sugerindo possíveis intervenções. O poder da transformação está em suas mãos!"/>
                <MainDashboard />
                <FilterBar />
                <DisabledStatus/>
                <PostContainer>
                    <PostCard
                        UserPhoto={ProfilePhoto}
                        Username="Julia Yume"
                        TimePosted="5 min"
                        PostTitle="O papel das políticas públicas e da legislação trabalhista na diversidade e inclusão:"
                        PostContent="Quais medidas podem ser implementadas para incentivar a inclusão de trabalhadores marginalizados no mercado de trabalho e garantir a igualdade de oportunidades?"
                        PostTag1="políticas"
                        PostTag2="trabalho"
                        PostTag3="oportunidades"
                    />
                </PostContainer>
                <DisabledStatus/>
            </HomeGrid>
        </Grid>
        </HomeContainer>
        </>
    )
}

export default Home