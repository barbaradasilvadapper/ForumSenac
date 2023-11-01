import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow
  } from '@chakra-ui/react'
import { StatContainer, StatIcon } from './StyledStatIndicator';
import RankingIcon from "../assets/RankingPosition.png"

function StatIndicator( props ){
    const arrowColor = props.StatDirection === "increase" ? "#00AC4F" : "#D0004B";
    const textColor = props.StatDirection === "increase" ? "#00AC4F" : "#D0004B";

    return(
    <>
    <StatContainer>
        <StatIcon/>
        <Stat>
            <StatLabel
                style={{
                    color: "#A1A4A7",
                    fontSize: "small"
                }}
            >
                {props.StatTitle}
            </StatLabel>
            <StatNumber
                style={{
                    fontSize: "x-large"
                }}
            >
                {props.StatValue}
            </StatNumber>
            <StatHelpText
                style={{
                    color: textColor,
                    fontSize: "small"
                }}
            >
            <StatArrow type={props.StatDirection} colorScheme={arrowColor}/>
            {props.StatPercentage}%
            </StatHelpText>
        </Stat>
    </StatContainer>
    </>
    )
};

export default StatIndicator;