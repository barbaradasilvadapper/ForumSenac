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
    grid-template-rows: 23vh 6vh 23vh 50vh;
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

    &::-webkit-scrollbar {
      width: 6px;
      background-color: #D0D4CE;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 0;
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: #71806B;
    }
`

export const MainIndicatorContainer = styled.div`
    grid-area: "main-indicators";
    display: grid;
    grid-template-areas: "thrid first second";
    grid-template-columns: 20% 23% 21%;
    height: 40vh;
    justify-content: center;
    margin-top: 5vh;
    align-items: end;
`

export const Avatar2 = styled.img`
    grid-area: "thrid";
    border-radius: 50%;
    justify-content: center;
    height: 35%;
    width: 45%;
`

export const Avatar1 = styled.img`
    grid-area: "thrid";
    border-radius: 50%;
    justify-content: center;
    height: 35%;
    width: 48%;
`

export const Avatar3 = styled.img`
    grid-area: "thrid";
    border-radius: 50%;
    justify-content: center;
    height: 40%;
    width: 45%;
`

export const ThirdContainer = styled.div`
    grid-area: "thrid";
    background-color: #262D34;
    border: 1px solid #262D34;
    border-radius: 30% 30% 0% 0%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 30vh;
    align-items: center;
    width: 25vh;
`

export const SecondContainer = styled.div`
    grid-area: "thrid";
    background-color: #262D34;
    border: 1px solid #262D34;
    border-radius: 30% 30% 0% 0%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 35vh;
    width: 25vh;
    align-items: center;
`

export const FirstContainer = styled.div`
    background-color: #1B1E22;
    grid-area: "thrid";
    border: 1px solid #1B1E22;
    border-radius: 30% 30% 0% 0%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 40vh;
    width: 30vh;
    align-items: center;
`

export const GeneralIndicatorContainer = styled.div`
    grid-area: "general-indicators";
    display: grid;
    grid-template-areas: "activity";
    grid-template-columns: 80%;
    height: 40vh;
    gap: 7vh;
    margin-top: 8vh;
    margin-left: 16%;
    margin-bottom: 8vh;
`

export const GeneralVisionContainer = styled.div`
    grid-area: "general-vision";
    background-color: #262D34;
    border: 1px solid #262D34;
    border-radius: 15px;
    display: flex;
    align-items: center;
`

export const ActivityContainer = styled.div`
    grid-area: "activity";
    background-color: #262D34;
    border: 1px solid #262D34;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: small;
`

export const Tabela = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-items: center;
    margin-left: 4%;
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