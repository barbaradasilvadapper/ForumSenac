import styled from "styled-components"

export const PostCardContainer = styled.div`
    width: 50%;
    height: fit-content;
    gap: 5vh;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
`

export const PostTitle = styled.p`
    font-style: bold;
    font-size: 10px;
    letter-spacing: 0.4px;
    margin-top: 1vh;
`

export const PostContent = styled.p`
    font-style: light;
    font-size: 8px;
    letter-spacing: 0.4px;
    color: #d3d3d3;
    margin-top: 1.5vh;
    margin-bottom: 2vh;
`

export const PostTagContainer = styled.div`
    height: 25px;
    display: inline-flex;
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
    font-size: 10px;
`