import { PostContainer } from "../../pages/Home/StyledHome";
import { Avatar, Column, IdContainer, PostCardContainer, PostContent, PostTag, PostTagContainer, PostTitle, Time } from "./CardProgress.jsx"
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { Porcentagem } from "./CardProgress.jsx";
import { DashboardContent } from "./CardProgress.jsx";


function CardProgress(props){
    return(
    <>
        <PostCardContainer>
            <Column>
                <PostTitle>
                    {props.PostTitle}
                </PostTitle>
                <PostContent>
                    {props.PostContent}
                </PostContent>
                <CircularProgress size='lg' value={65} color='purple' thickness='12px'>
                    <CircularProgressLabel>
                        <Porcentagem>65%</Porcentagem>
                        <DashboardContent>Do total de <br/> desafios</DashboardContent>
                    </CircularProgressLabel>
                </CircularProgress>
            </Column>
        </PostCardContainer>
    </>
    )
}

export default CardProgress;