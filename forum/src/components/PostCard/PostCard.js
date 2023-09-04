import { PostContainer } from "../../pages/Home/StyledHome";
import { Avatar, Column, IdContainer, PostCardContainer, PostContent, PostTag, PostTagContainer, PostTitle, Time } from "./StyledPostCard"

function PostCard(props){
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
                <PostTagContainer>
                    <PostTag>
                        {props.PostTag1}
                    </PostTag>
                    <PostTag>
                        {props.PostTag2}
                    </PostTag>
                    <PostTag>
                        {props.PostTag3}
                    </PostTag>
                </PostTagContainer>
            </Column>
        </PostCardContainer>
    </>
    )
}

export default PostCard;