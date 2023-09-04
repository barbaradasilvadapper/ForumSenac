import { MainDashboardContainer } from "./StyledMainDashboard"
import { Column, PostContent, PostTagContainer, PostTitle } from "./StyledMainDashboard"

function MainDashboard(props){
    return(
    <>
        <MainDashboardContainer>
        <Column>
                <PostTitle>
                    {props.PostTitle}
                </PostTitle>
                <PostContent>
                    {props.PostContent}
                </PostContent>
                <PostTagContainer>
                </PostTagContainer>
        </Column>
        </MainDashboardContainer>
    </>
    )
}

export default MainDashboard