import styled from "styled-components"

export const PostCardContainer = styled.div`
    background-color: #262D34;
    border: 1px solid #262D34;
    border-radius: 20px;
    width: 75%;
    height: fit-content;
    margin-top: 11vh;
    padding: 4vh;
    margin-left: 4vh;
`

export const PostImage = styled.img`
    height: 25vh;
    width: 30vh;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #262D34;
`

export const Inline = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 0.5vh;
`

export const PostTitle = styled.p`
    background-color: #262D34;
    font-weight: 600;
    font-size: medium;
    letter-spacing: 0.8px;
    margin-top: 1vh;
`

export const PostContent = styled.p`
    background-color: #262D34;
    font-style: light;
    font-size: x-small;
    letter-spacing: 0.4px;
    color: #d3d3d3;
    margin-top: 1.5vh;
    margin-bottom: 3vh;
`

export const Percentage = styled.p`
    font-weight: 1000;
    font-size: medium;
    letter-spacing: 0.4px;
    margin-bottom: 1vh;
`

export const Content = styled.p`
    font-style: light;
    font-size: x-small;
    letter-spacing: 0.4px;
    margin-left: 1.5vh;
    color: #d3d3d3;
`

export const Treasure = styled.img`
    height: 3vh;
    width: 3vh;
    margin-left: 2vh;
    margin-top: -1vh;
`