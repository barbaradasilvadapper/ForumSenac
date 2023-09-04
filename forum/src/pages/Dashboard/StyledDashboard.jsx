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
    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-thumb {
        width: 0px;
    }
`

export const MainIndicatorContainer = styled.div`
    grid-area: "main-indicators";
    background-color: #262D34;
    border: 1px solid #262D34;
    border-radius: 15px;
    height: 23vh;
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
    grid-template-columns: 57% 38%;
    height: 70vh;
    gap: 7vh;
    margin-top: 5vh;
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