import { PostContainer } from "../../pages/Home/StyledHome";
import { Column, PostCardContainer, PostContent, PostTitle } from "./CardProgress.jsx"
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { Porcentagem } from "./CardProgress.jsx";
import { DashboardContent } from "./CardProgress.jsx";


function CardProgress( props ){
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
                <CircularProgress size='x-sm' value={65} color='purple' thickness='12px'>
                    <CircularProgressLabel style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
                        <Porcentagem>{props.Percentage}%</Porcentagem>
                        <DashboardContent>{props.ReportContent}</DashboardContent>
                    </CircularProgressLabel>
                </CircularProgress>
            </Column>
        </PostCardContainer>
    </>
    )
}

export default CardProgress;