import styled from "styled-components"

export const MainDashboardContainer = styled.div`
    grid-area: "status";
    border-radius: 15px;
    margin: 7vh;
    height: 50vh; */
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #262D34;
`

export const PostTitle = styled.p`
    background-color: #262D34;
    font-style: bold;
    font-size: small;
    letter-spacing: 0.4px;
    margin-top: 1vh;
`

export const PostContent = styled.p`
    background-color: #262D34;
    font-style: light;
    font-size: 10px;
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
