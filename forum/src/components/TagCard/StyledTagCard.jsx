import styled from "styled-components"

export const PostCardContainer = styled.div`
    background-color: #262D34;
    border: 1px solid #262D34;
    border-radius: 20px;
    width: 40%;
    height: fit-content;
    margin-bottom: 3vh;
    padding: 4vh;
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
    margin-top: 3vh;
`

export const PostContent = styled.p`
    background-color: #262D34;
    font-style: light;
    font-size: 12px;
    letter-spacing: 0.4px;
    color: #d3d3d3;
    margin-top: 1.5vh;
    margin-bottom: 1.5vh;
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
    background-color: #51575D;
    border: 1px solid #51575D;
    border-radius: 5px;
    font-size: smaller;
`