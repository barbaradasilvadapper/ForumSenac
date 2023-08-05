import styled from "styled-components"

export const HeaderContainer = styled.div`
    grid-area: header;
    background-color: #262D34;
    height: 10vh;
    display: flex;
    justify-content: flex-end;
`   

export const IconsContainer = styled.div`
    width: 13%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
    margin-right: 5vh;
`

export const AvatarContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
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
`

export const Icon = styled.span`
    color: #808080;
`