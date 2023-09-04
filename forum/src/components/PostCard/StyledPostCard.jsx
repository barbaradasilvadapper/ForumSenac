import styled from "styled-components"

export const PostCardContainer = styled.div`
    background-color: #262D34;
    border: 1px solid #262D34;
    border-radius: 20px;
    width: 90%;
    height: fit-content;
    margin-bottom: 3vh;
    padding: 4vh;
`

export const IdContainer = styled.div`
    display: inline-flex;
    font-size: small;
    background-color: #262D34;
    gap: 1vh;
`

export const MoreInfo = styled.img`

`

export const Avatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 0px solid white;
    background-position: center center;
    background-size: contain;
    background-size: cover;
    background-repeat: no-repeat;
    margin-right: 1vh;
    background-color: #262D34;
`

export const Time = styled.p`
    font-size: smaller;
    color: #808080;
    background-color: #262D34;
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
    font-size: 12px;
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