import styled from "styled-components"

export const DashboardContainer = styled.div`
    grid-area: content;
    background-color: #1E252B;
    min-height: 100%;
    min-width: 100%;
    display: flex;
    align-items: right;
    justify-content: right;
`

export const DashboardGrid = styled.div`
    display: grid;
    grid-template-areas: "title"
                         "filter"
                         "main-indicators"
                         "general-indicators";
    grid-template-rows: 23vh 6vh 23vh 40vh;
    margin-left: 7vh;
    margin-right: 7vh;
`

export const ScrollDiv = styled.div`
    overflow: auto;
    height: 60vh;
    &::-webkit-scrollbar-track {
    border-radius: 0;
    background-color: #D0D4CE;
  }

  /* Estilos para a barra de rolagem */
  &::-webkit-scrollbar {
    width: 6px;
    background-color: #D0D4CE;
  }

  /* Estilos para o thumb do scroll */
  &::-webkit-scrollbar-thumb {
    border-radius: 0;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #71806B;
  }
`

export const MainIndicatorContainer = styled.div`
    grid-area: "main-indicators";
    background-color: #262D34;
    border: 1px solid #262D34;
    border-radius: 15px;
    height: 23vh;
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 3vh;
    padding-left: 7vh;
    padding-right: 7vh;
`

export const GeneralIndicatorContainer = styled.div`
    grid-area: "general-indicators";
    display: grid;
    grid-template-areas: "general-vision activity";
    grid-template-columns: 65% 30%;
    max-width: 95%;
    gap: 7vh;
    margin-top: 5vh;
    margin-bottom: 5vh;
`

export const GeneralVisionContainer = styled.div`
    grid-area: "general-vision";
    display: grid;
    grid-template-areas: "activity-title activity-graph";
    grid-template-rows: 10vh 90vh;
    background-color: #262D34;
    border: 1px solid #262D34;
    border-radius: 15px;
    display: flex;
    align-items: center;
`

export const ActivityTitle = styled.div`
    grid-area: "activity-title";
`

export const ActivityGraph = styled.div`
    grid-area: "activity-graph";
    height: 40vh;
    width: 83vh;
`

export const ActivityContainer = styled.div`
    grid-area: "activity";
    background-color: #262D34;
    border: 1px solid #262D34;
    border-radius: 15px;
`

export const TooltipContainer = styled.div`
    height: fit-content;
    width: 25vh;
    font-size: smaller;
    background-color: white;
    border: 1px solid white;
    border-radius: 15px;
    padding: 3vh;
`

export const TooltipText = styled.p`
    color: black;
`


// Activity block

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    padding: 4vh;
`

export const PostTitle = styled.p`
    background-color: #262D34;
    font-weight: 300;
    font-size: large;
    letter-spacing: 0.4px;
`

export const PostContent = styled.p`
    background-color: #262D34;
    font-style: light;
    font-size: small;
    letter-spacing: 0.4px;
    color: #d3d3d3;
    margin-top: 1.5vh;
    margin-bottom: 3vh;
`

export const PostTagContainer = styled.div`
    height: 30px;
    background-color: #262D34;
    display: inline-flex;
    gap: 2vh;
`

export const PostTag = styled.div`
    height: 100%;
    width: fit-content;
    padding-left: 1.5vh;
    padding-right: 1.5vh;
    color: white;
    font-family: 'Roboto', sans-serif;
    display: flex;
    align-items: center;
    background-color: #1E252B;
    border: 1px solid #1E252B;
    border-radius: 5px;
    font-size: smaller;

    &:hover{
        background-color: #252b31;
        border: 1px solid #252b31;
    }
`

export const Porcentagem = styled.p`
    font-weight: 1000;
    font-size: medium;
    letter-spacing: 0.4px;
    margin-bottom: 1vh;
`

export const DashboardContent = styled.p`
    font-style: light;
    font-size: x-small;
    letter-spacing: 0.4px;
    max-width: 10vh;
`