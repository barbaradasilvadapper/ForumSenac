import { Username, Points, Avatar, TitleContainer } from "./RankingInfo.jsx";

function RankingInfo(props) {
    return(
    <>
    <TitleContainer>
        <Username>{props.Username}</Username>
        <Points>{props.Points}</Points> 
    </TitleContainer>
    </>
    )
};

export default RankingInfo;