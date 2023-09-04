import DateSelector from "../../components/DateSelector/DateSelector";
import PageIntro from "../../components/PageIntroduction/PageIntro";
import StatIndicator from "../../components/StatIndicator/StatIndicator";
import { ActivityContainer, DashboardContainer, DashboardGrid, GeneralIndicatorContainer, GeneralVisionContainer, MainIndicatorContainer, ScrollDiv, TooltipContainer, TooltipText } from "./StyledDashboard";

import React, { useState } from 'react';
import { ResponsiveContainer, ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function Dashboard() {
    const statValues = [
        {
            StatTitle: "Posição no ranking",
            StatValue: 23 + "°",
            StatDirection: "increase",
            StatPercentage: 37.8
        },
        {
            StatTitle: "Soluções propostas",
            StatValue: 10,
            StatDirection: "decrease",
            StatPercentage: 2
        },
        {
            StatTitle: "Desafios desenvolvidos",
            StatValue: 3,
            StatDirection: "increase",
            StatPercentage: 11
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
          const dataPoint = data.find(entry => entry.name === label);
          if (dataPoint) {
              return (
                  <TooltipContainer>
                      <TooltipText>{`Likes: ${dataPoint.likes}`}</TooltipText>
                      <TooltipText>{`Propostas: ${dataPoint.proposal}`}</TooltipText>
                      <TooltipText>{`Desafios: ${dataPoint.challenge}`}</TooltipText>
                      <TooltipText>{`Interações totais: ${dataPoint.proposal + dataPoint.challenge + dataPoint.likes}`}</TooltipText>
                  </TooltipContainer>
              );
          }
        }
      
        return null;
    };

    return(
    <>
    <DashboardContainer>
        <DashboardGrid>
            <PageIntro 
                PageTitle="Dashboard" 
                PageSubtitle="Desvende o potencial da nossa página de dashboard! Aqui, você pode visualizar seus marcos, acompanhar suas conquistas e medir o impacto das suas interações."
            />
            <DateSelector/>
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
                    <ResponsiveContainer>
                    <ComposedChart
                        data={data}
                        margin={{
                        top: 50,
                        right: 30,
                        bottom: 50,
                        left: 30,
                        }}
                    >
                        <XAxis dataKey="name" axisLine={false} />
                        <Tooltip content={<CustomTooltip />}/>
                        <Bar 
                            dataKey="proposal"
                            barSize={50}
                            fill="white"
                            shape={(props) => (
                                <rect
                                    rx={10}
                                    ry={10}
                                    {...props}
                                />
                            )}
                        />
                    </ComposedChart>
                    </ResponsiveContainer>
                </GeneralVisionContainer>

                <ActivityContainer>

                </ActivityContainer>
            </GeneralIndicatorContainer>
            </ScrollDiv> 
        </DashboardGrid>
    </DashboardContainer>
    </>
    )
};

export default Dashboard;