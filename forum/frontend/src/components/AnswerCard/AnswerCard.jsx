import styled from "styled-components"

export const PostCardContainer = styled.div`
    background-color: #696969;
    border: 1px solid #696969;
    border-radius: 20px 0px 0px 20px;
    width: 60%;
    height: fit-content;
    margin-bottom: 3vh;
    padding: 4vh;
    margin-left: 15%;
    border-right: 6px solid #FF2377;`

export const IdContainer = styled.div`
    display: inline-flex;
    font-size: small;
    background-color: #696969;
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
    background-color: #696969;
`

export const Time = styled.p`
    font-size: smaller;
    color: #808080;
    background-color: #696969;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #696969;
`

export const PostTitle = styled.p`
    background-color: #696969;
    font-style: bold;
    font-size: small;
    letter-spacing: 0.4px;
    margin-top: 1vh;
`

export const PostContent = styled.p`
    background-color: #696969;
    font-style: light;
    font-size: 12px;
    letter-spacing: 0.4px;
    color: #d3d3d3;
    margin-top: 1.5vh;
    margin-bottom: 3vh;
`

export const PostTagContainer = styled.div`
    height: 30px;
    background-color: #696969;
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