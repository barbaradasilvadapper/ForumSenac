import { Grid } from "@chakra-ui/react";
import { styled } from "styled-components";

export const AvatarContainer = styled.div`
    background-color: #1E252B;
    height: 90vh;
    width: 100%;
    display: grid;
    grid-template-areas: "introduction carousel";
    grid-template-columns: 45% 55%;
`

export const IntroductionContainer = styled.div`
    grid-area: "introduction";
    display: flex;
    align-items: left;
    justify-content: center;
    flex-direction: column;
`

export const PageTitle = styled.p`
    font-size: xx-large;
`

export const PageSubtitle = styled.p`
    width: 70%;
    font-size: smaller;
`

export const CarouselContainer = styled.div`
    grid-area: "carousel";
    background-color: #a4cb2d;
`