import { Grid } from "../../StyledGlobal"
import FilterBar from "../../components/FilterBar/FilterBar"
import Header from "../../components/Header/Header"
// import MainDashboard from "../../components/MainDashboard/MainDashboard"
import Menu from "../../components/Menu/Menu"
import PageIntro from "../../components/PageIntroduction/PageIntro"
import PostCard from "../../components/PostCard/PostCard"
import { DisabledStatus, HomeContainer, HomeGrid, PostContainer } from "./PostDetails.jsx"

import RecentesIcon from "../assets/Recente.png"
import ResolvidosIcon from "../assets/Resolvidos.png"
import ProfilePhoto from "../assets/Monster.svg"
import CardProgress from "../../components/CardProgress/CardProgress.js"
import AnswerCard from "../../components/AnswerCard/AnswerCard"
import { PostCardContainer } from "./PostDetails.jsx"

function PostDetails(){
    const buttons = [
        { label: 'Recente', icon: RecentesIcon},
        { label: 'Respondidos', icon: ResolvidosIcon },
    ];
    return(
        <>
        <HomeContainer>
        <Grid>
            <Header />
            <Menu />
            <HomeGrid>
                <PageIntro PageTitle="Suas propostas" PageSubtitle="A cada proposta desvendamos um pouco mais o mistério que é a busca por intervenções que realizem uma verdadeira mudança em nossa sociedade!"/>
                <PostCardContainer></PostCardContainer>
                <FilterBar buttons={buttons}/>
                <DisabledStatus/>
                <PostContainer>
                    <AnswerCard
                        UserPhoto={ProfilePhoto}
                        Username="Julia Yume"
                        TimePosted="5 min"
                        PostTitle="O papel das políticas públicas e da legislação trabalhista na diversidade e inclusão:"
                        PostContent="Quais medidas podem ser implementadas para incentivar a inclusão de trabalhadores marginalizados no mercado de trabalho e garantir a igualdade de oportunidades?"
                        PostTag1="políticas"
                        PostTag2="trabalho"
                        PostTag3="oportunidades"
                    />
                    <AnswerCard
                        UserPhoto={ProfilePhoto}
                        Username="Bárbara Dapper"
                        TimePosted="5 min"
                        PostTitle="O papel das políticas públicas e da legislação trabalhista na diversidade e inclusão:"
                        PostContent="Quais medidas podem ser implementadas para incentivar a inclusão de trabalhadores marginalizados no mercado de trabalho e garantir a igualdade de oportunidades?"
                        PostTag1="políticas"
                        PostTag2="trabalho"
                        PostTag3="oportunidades"
                    />
                    <AnswerCard
                        UserPhoto={ProfilePhoto}
                        Username="Gabriela Munari"
                        TimePosted="5 min"
                        PostTitle="O papel das políticas públicas e da legislação trabalhista na diversidade e inclusão:"
                        PostContent="Quais medidas podem ser implementadas para incentivar a inclusão de trabalhadores marginalizados no mercado de trabalho e garantir a igualdade de oportunidades?"
                        PostTag1="políticas"
                        PostTag2="trabalho"
                        PostTag3="oportunidades"
                    />

                    <AnswerCard
                        UserPhoto={ProfilePhoto}
                        Username="Bernardo Haisser"
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

export default PostDetails