import DateSelector from "../../components/DateSelector/DateSelector";
import PageIntro from "../../components/PageIntroduction/PageIntro";
import RankingInfo from "../../components/RankingInfo/RankingInfo";
import TabelaRanking from "../../components/TabelaRanking/TabelaRanking";
import StatIndicator from "../../components/StatIndicator/StatIndicator";
import { ActivityContainer, DashboardContainer, Avatar1, Avatar2, Avatar3, ThirdContainer, FirstContainer, SecondContainer, DashboardGrid, GeneralIndicatorContainer, GeneralVisionContainer, MainIndicatorContainer, ScrollDiv, TooltipContainer, TooltipText, Tabela } from "./Ranking.jsx";

import React from 'react';
import { ResponsiveContainer, ComposedChart, Bar, XAxis, Tooltip } from 'recharts';
import { Grid } from "../../StyledGlobal";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import imagemlogin from "../../assets/imagemlogin.png"


function Ranking() {

    return(
    <>
    <Grid>
    <Header />
    <Menu />
    <DashboardContainer>
        <DashboardGrid>
            <PageIntro 
                PageTitle="Ranking" 
                PageSubtitle="Descubra os membros mais ativos e influentes da comunidade, suba no ranking ao se engajar nos desafios e seja reconhecido por suas contribuições valiosas!"
            />
            <DateSelector/>
            <ScrollDiv>           
            <MainIndicatorContainer>
             <ThirdContainer> <Avatar3 src={'https://bit.ly/dan-abramov'}/> <RankingInfo Username="Jacob Jones" Points="1674"/> </ThirdContainer>
                <FirstContainer> <Avatar1 src={'https://bit.ly/dan-abramov'}/> <RankingInfo Username="Jenny Wilson" Points="2560"/> </FirstContainer>
                <SecondContainer> <Avatar2 src={'https://bit.ly/dan-abramov'}/> <RankingInfo Username="Robert Fox" Points="1891"/> </SecondContainer>
            </MainIndicatorContainer>
            <GeneralIndicatorContainer>
                <ActivityContainer>
                <Tabela>
                    <TabelaRanking
                        Name="Jenny Wilson"
                        Id="2425666"
                        Amount="+455"
                        Date="20 Dec 22"

                        Name2="Robert Fox"
                        Id2="5678932"
                        Amount2="-380"
                        Date2="20 Dec 22"

                        Name3="Jacob Jones"
                        Id3="1098733"
                        Amount3="+400"
                        Date3="20 Dec 22"
                    />
                </Tabela>
                </ActivityContainer>
            </GeneralIndicatorContainer>
            </ScrollDiv> 
        </DashboardGrid>
    </DashboardContainer>
    </Grid>
    </>
    )
};

export default Ranking;