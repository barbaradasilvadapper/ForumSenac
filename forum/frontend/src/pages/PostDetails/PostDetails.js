import { Grid } from "../../StyledGlobal"
import Header from "../../components/Header/Header"
import Menu from "../../components/Menu/Menu"
import { HomeContainer, HomeGrid, PostContainer, Avatar, PostTitle, PageHead, PostContent, Time, CommentContainer, HeadInfo, User, PostTagContainer, PostTag, Textarea, Input, FieldTitle, SubmitButton } from "./StyledPostDetails.jsx"
import BackArrowIcon from "../assets/BackArrow.png"

import ProfilePhoto from "../assets/Monster.svg"
import AnswerCard from "../../components/AnswerCard/AnswerCard"
import { BackButton, BackIcon } from "../CreatePost/StyledCreatePost.jsx"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { api } from "../../services/api.js"

function PostDetails(){
    const {postID} = useParams([]);
    const [ post, setPost ] = useState([]);
    const [ comments, setComments ] = useState([]);
    const [commentTitle, setCommentTitle] = useState('');
    const [comment, setComment] = useState('');

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }

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

    useEffect(() => {
        const fetchData = async () => {

        try{
            const response = await api.post("/comment/comment", {postID: postID});
            const commentList = response.data.data;
            setComments(commentList);
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
                    <BackButton onClick={goBack}>
                        <BackIcon src={BackArrowIcon}/>
                    </BackButton>
                    <Avatar src={post.UserPhoto}/>
                    <HeadInfo>
                        <User>{post.UserName}</User>
                        <Time>{post.PublishedTime}</Time>
                    </HeadInfo>
                </PageHead>
                <PostContainer>
                    <PostTitle>{post.PostName}</PostTitle>
                    <PostContent>{post.PostDescription}</PostContent>
                    <PostTagContainer>
                        <PostTag>{post.TagName1}</PostTag>
                        <PostTag>{post.TagName2}</PostTag>
                        <PostTag>{post.TagName3}</PostTag>
                    </PostTagContainer>
                    <PostTitle>Compartilhe sua proposta</PostTitle>
                        <FieldTitle>Título da proposta</FieldTitle>
                        <Input value={commentTitle} onChange={(e) => setCommentTitle(e.target.value)} placeholder="Digite aqui o título do seu comentário..."/>
                        <FieldTitle>Sua proposta</FieldTitle>
                        <Textarea value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Digite aqui o título..."/>
                        <SubmitButton>Postar</SubmitButton>
                    <PostTitle>Veja outras propostas</PostTitle>
                </PostContainer>
                <CommentContainer>
                {comments !== '' ? (
                    comments.map((comment) => (
                    <AnswerCard
                        key={comment.CommentID}
                        UserPhoto={ProfilePhoto}
                        Username={comment.UserName}
                        TimePosted={comment.PublishedTime}
                        PostTitle={comment.CommentTitle}
                        PostContent={comment.Comment}
                    />
                    ))
                ) : (
                    <div>No comments to display</div>
                )}
                </CommentContainer>
            </HomeGrid>
        </Grid>
        </HomeContainer>
        </>
    )
}

export default PostDetails