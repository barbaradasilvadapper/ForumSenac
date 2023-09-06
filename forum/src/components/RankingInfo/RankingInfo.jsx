import styled from 'styled-components'

export const TitleContainer = styled.div`
    grid-area: "title";
    display: flex;
    flex-direction: column;
    gap: 2vh;
    margin-top: 5vh;
    width: 80%;
    justify-content: center;
`

export const Username = styled.p`
    letter-spacing: 1px;
    font-size: medium;
    font-weight: 600;
    color: white;
`

export const Points = styled.p`
    font-size: large;
    color: #00D95F;
`


export const Avatar = styled.img`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: 1px solid white;
    background-position: center center;
    background-size: contain;
    background-size: cover;
    background-repeat: no-repeat;
    margin-right: 1vh;
    background-color: #262D34;
`