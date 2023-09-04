import { PostContainer } from "../../pages/Home/StyledHome";
import { Avatar, Column, IdContainer, PostCardContainer, PostContent, PostTag, PostTagContainer, PostTitle, Time } from "./AnswerCard.jsx"

function AnswerCard(props){
    return(
    <>
        <PostCardContainer>
            <IdContainer>
                <Avatar src={props.UserPhoto} backgroundColor="#262D34"/>
                <Column>
                    {props.Username}
                    <Time>{props.TimePosted}</Time>
                </Column>
            </IdContainer>
            <Column>
                <PostTitle>
                    {props.PostTitle}
                </PostTitle>
                <PostContent>
                    {props.PostContent}
                </PostContent>
            </Column>
        </PostCardContainer>
    </>
    )
}

export default AnswerCard;