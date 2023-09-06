import React, { useState } from 'react';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react';
import { ResponsiveContainer, ComposedChart, Bar, XAxis, CartesianGrid, Tooltip, Cell } from 'recharts';
import { Grid } from '../../StyledGlobal';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import DateSelector from '../../components/DateSelector/DateSelector';
import PageIntro from '../../components/PageIntroduction/PageIntro';
import StatIndicator from '../../components/StatIndicator/StatIndicator';
import { ActivityContainer, DashboardContainer, DashboardGrid, GeneralIndicatorContainer, GeneralVisionContainer, MainIndicatorContainer, ScrollDiv, TooltipContainer, TooltipText, Column, PostContent, PostTitle, DashboardContent, Porcentagem, ActivityTitle, ActivityGraph } from './StyledDashboard';

function Dashboard() {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleBarMouseEnter = (data, index) => {
      setActiveIndex(index);
    };
  
    const handleBarMouseLeave = () => {
      setActiveIndex(null);
    };
  
    const handleClick = (data, index) => {
      // Lógica para lidar com o clique na barra
    };

  const statValues = [
    {
      StatTitle: 'Posição no ranking',
      StatValue: '23°',
      StatDirection: 'increase',
      StatPercentage: 37.8,
    },
    {
      StatTitle: 'Soluções propostas',
      StatValue: '10',
      StatDirection: 'decrease',
      StatPercentage: 2,
    },
    {
      StatTitle: 'Desafios desenvolvidos',
      StatValue: '3',
      StatDirection: 'increase',
      StatPercentage: 11,
    },
  ];

  const data = [
    { name: 'Jan', likes: 15, proposal: 5, challenge: 3 },
    { name: 'Fev', likes: 20, proposal: 10, challenge: 2 },
    { name: 'Mar', likes: 7, proposal: 2, challenge: 4 },
    { name: 'Abr', likes: 15, proposal: 2, challenge: 2 },
    { name: 'Mai', likes: 13, proposal: 8, challenge: 5 },
    { name: 'Jun', likes: 7, proposal: 3, challenge: 1 },
    { name: 'Jul', likes: 15, proposal: 5, challenge: 3 },
    { name: 'Ago', likes: 20, proposal: 10, challenge: 2 },
    { name: 'Set', likes: 7, proposal: 2, challenge: 4 },
    { name: 'Out', likes: 15, proposal: 2, challenge: 2 },
    { name: 'Nov', likes: 13, proposal: 8, challenge: 5 },
    { name: 'Dez', likes: 7, proposal: 3, challenge: 1 },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const dataPoint = data.find((entry) => entry.name === label);
      if (dataPoint) {
        return (
          <TooltipContainer>
            <TooltipText>{`Likes: ${dataPoint.likes}`}</TooltipText>
            <TooltipText>{`Propostas: ${dataPoint.proposal}`}</TooltipText>
            <TooltipText>{`Desafios: ${dataPoint.challenge}`}</TooltipText>
            <TooltipText>{`Interações totais: ${
              dataPoint.proposal + dataPoint.challenge + dataPoint.likes
            }`}</TooltipText>
          </TooltipContainer>
        );
      }
    }

    return null;
  };

  const activityValue = {
    Percentage: '65',
    ReportContent: 'Da meta proposta',
  };

  return (
    <>
      <Grid>
        <Header />
        <Menu />
        <DashboardContainer>
          <DashboardGrid>
            <PageIntro
              PageTitle="Dashboard"
              PageSubtitle="Desvende o potencial da nossa página de dashboard! Aqui, você pode visualizar seus marcos, acompanhar suas conquistas e medir o impacto das suas interações."
            />
            <DateSelector />
            <ScrollDiv>
              <MainIndicatorContainer>
                {statValues.map((values, index) => (
                  <StatIndicator
                    key={index}
                    StatTitle={values.StatTitle}
                    StatValue={values.StatValue}
                    StatDirection={values.StatDirection}
                    StatPercentage={values.StatPercentage}
                  />
                ))}
              </MainIndicatorContainer>
              <GeneralIndicatorContainer>
                <GeneralVisionContainer>
                  <Column>
                    <ActivityTitle>
                      <PostTitle>Visão geral</PostTitle>
                      <PostContent>Atividade na comunidade</PostContent>
                    </ActivityTitle>
                    <ActivityGraph>
                      <ResponsiveContainer barCategoryGap="10%">
                        <ComposedChart data={data}>
                          <XAxis dataKey="name" axisLine={false} />
                          <Tooltip content={<CustomTooltip />} isAnimationActive={false}/>
                          <Bar
                            dataKey="proposal"
                            barSize={50}
                            fill="white"
                            shape={(props) => (
                                <rect rx={10} ry={10} {...props} />
                            )}
                            onMouseEnter={(data, index) => handleBarMouseEnter(data, index)}
                            onMouseLeave={handleBarMouseLeave}
                            onClick={(data, index) => handleClick(data, index)}
                            >
                            {data.map((entry, index) => (
                                <Cell
                                cursor="pointer"
                                fill={index === activeIndex ? '#5932EA' : '#F2EFFF'}
                                key={`cell-${index}`}
                                />
                            ))}
                            </Bar>
                        </ComposedChart>
                      </ResponsiveContainer>
                    </ActivityGraph>
                  </Column>
                </GeneralVisionContainer>

                <ActivityContainer>
                  <Column>
                    <PostTitle>Atividade</PostTitle>
                    <PostContent>Percentual de atividade exercida</PostContent>
                    <CircularProgress
                      size="x-sm"
                      value={65}
                      color="purple"
                      thickness="12px"
                    >
                      <CircularProgressLabel
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          flexDirection: 'column',
                        }}
                      >
                        <Porcentagem>{activityValue.Percentage}%</Porcentagem>
                        <DashboardContent>
                          {activityValue.ReportContent}
                        </DashboardContent>
                      </CircularProgressLabel>
                    </CircularProgress>
                  </Column>
                </ActivityContainer>
              </GeneralIndicatorContainer>
            </ScrollDiv>
          </DashboardGrid>
        </DashboardContainer>
      </Grid>
    </>
  );
}

export default Dashboard;
