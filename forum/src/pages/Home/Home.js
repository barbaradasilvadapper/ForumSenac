import { Grid } from "../../StyledGlobal"
import FilterBar from "../../components/FilterBar/FilterBar"
import Header from "../../components/Header/Header"
import MainDashboard from "../../components/MainDashboard/MainDashboard"
import Menu from "../../components/Menu/Menu"
import PageIntro from "../../components/PageIntroduction/PageIntro"
import PostCard from "../../components/PostCard/PostCard"
import { DisabledStatus, HomeGrid, PostContainer } from "./StyledHome"

function Home(){
    return(
        <>
        <Grid>
            <Header />
            <Menu />
            <HomeGrid>
                <PageIntro PageTitle="Desafios" PageSubtitle="Seja a voz da mudança e participe ativamente dos debates, sugerindo possíveis intervenções. O poder da transformação está em suas mãos!"/>
                <MainDashboard />
                <FilterBar />
                <DisabledStatus/>
                <PostContainer>
                    <PostCard/>
                </PostContainer>
            </HomeGrid>
        </Grid>
        </>
    )
}

export default Home