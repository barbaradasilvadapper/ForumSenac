import styled from "styled-components"

export const HomeContainer = styled.div`
    background-color: #1E252B;
    min-height: 100%;
    min-width: 100%;
    display: flex;
    align-items: right;
    justify-content: right;
    grid-area: content;
`

export const PageHead = styled.div`
  grid-area: title;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`

export const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-top: 5vh;
    margin-left: 6vh;
    border: 0px solid white;
    background-position: center center;
    background-size: contain;
    background-size: cover;
    background-repeat: no-repeat;
`

export const Time = styled.p`
    font-size: smaller;
    color: #808080;
`

export const PostTitle = styled.p`
    font-style: bold;
    font-size: medium;
    letter-spacing: 0.4px;
`

export const HomeGrid = styled.div`
    display: grid;
    grid-template-areas: "title"
                         "content";
    grid-template-columns: 70% 30%;
    grid-template-rows: 25vh 4vh;
    margin-left: 7vh;
`

export const PostContainer = styled.div`
    grid-area: "post";
    margin-top: 5vh;
    overflow: auto;
    &::-webkit-scrollbar-track {
    border-radius: 0;
    background-color: #D0D4CE;
  }

  /* Estilos para a barra de rolagem */
  &::-webkit-scrollbar {
    width: 6px;
    background-color: #D0D4CE;
  }

  /* Estilos para o thumb do scroll */
  &::-webkit-scrollbar-thumb {
    border-radius: 0;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #71806B;
  }
`

export const DisabledStatus = styled.div`
    grid-area: status;
`

export const PostCardContainer = styled.div`
    background-color: #1E252B;
    border: 1px solid #1E252B;
    border-radius: 20px;
    width: 100vh;
    height: fit-content;
    margin-top: 3vh;
    padding: 4vh;
    margin-left: 4vh;
`