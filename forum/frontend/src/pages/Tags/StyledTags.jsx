import styled from "styled-components"

export const TagPageContainer = styled.div`
    grid-area: content;
    background-color: #1E252B;
    min-height: 100%;
    min-width: 100%;
    display: flex;
    align-items: right;
    justify-content: right;
`

export const TagPageGrid = styled.div`
    display: grid;
    grid-template-areas: "title"
                         "filter"
                         "post";
    grid-template-columns: 85%;
    grid-template-rows: 25vh 4vh;
    margin-left: 7vh;
`

export const PostContainer = styled.div`
    grid-area: "post";
    overflow: auto;
    width: 100%;
    padding-right: 5vh;
    margin-top: 5vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
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

export const PostCardContainer = styled.div`
    background-color: #262D34;
    border: 1px solid #262D34;
    border-radius: 20px;
    width: 48%;
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