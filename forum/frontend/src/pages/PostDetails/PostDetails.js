import { Grid } from "../../StyledGlobal"
import Header from "../../components/Header/Header"
import Menu from "../../components/Menu/Menu"
import { DisabledStatus, HomeContainer, HomeGrid, PostContainer, Avatar, PostCardContainer, PostTitle, PageHead } from "./StyledPostDetails.jsx"
import BackArrowIcon from "../assets/BackArrow.png"

import ProfilePhoto from "../assets/Monster.svg"
import AnswerCard from "../../components/AnswerCard/AnswerCard"
import { BackButton, BackIcon } from "../CreatePost/StyledCreatePost.jsx"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { api } from "../../services/api.js"

function PostDetails(){
    const {postID} = useParams([]);
    const [ post, setPost ] = useState([]);

    useEffect(() => {
        const fetchData = async () => {

        try{
            const response = await api.post("/post/post/detail", {postID: postID});
            const postList = response.data.data[0];
            setPost(postList);
        } catch (err) {
            console.error(err);
        }};
        fetchData();
    }, []);

    return(
        <>
        <HomeContainer>
        <Grid>
            <Header />
            <Menu />
            <HomeGrid>
                <PageHead>
                    <BackButton>
                        <BackIcon src={BackArrowIcon}/>
                    </BackButton>
                    <Avatar src={post.UserPhoto}/>
                    <PostCardContainer>
                        <PostTitle>{post.PostName}</PostTitle>
                    </PostCardContainer>
                </PageHead>
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