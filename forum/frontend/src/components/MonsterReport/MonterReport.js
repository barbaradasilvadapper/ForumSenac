import { Column, PostCardContainer, PostContent, PostTitle, Percentage, Content, PostImage, Inline, Treasure } from "./StyledMonsterReport.jsx"
import PostImageMonster from "../assets/MonsterReport.png"
import TreasureImage from "../assets/Treasure.png"
import { Progress } from "@chakra-ui/progress";


function MonsterReport( props ){
    return(
    <>
        <PostCardContainer>
            <Column>
                <PostImage src={PostImageMonster}/>
                <PostTitle>
                    {props.PostTitle}
                </PostTitle>
                <PostContent>
                    Você atingiu
                    <Inline>
                        <Percentage>{props.Percentage}%</Percentage>
                        <Content>da sua meta mensal</Content>
                    </Inline>
                </PostContent>
                <div style={{ display: 'grid', gridTemplateColumns: '5fr 1fr' }}>
                    <Progress value={props.Percentage} size='sm' colorScheme='green' borderRadius={25}/>
                    <Treasure src={TreasureImage} />
                </div>
            </Column>
        </PostCardContainer>
    </>
    )
}

export default MonsterReport;