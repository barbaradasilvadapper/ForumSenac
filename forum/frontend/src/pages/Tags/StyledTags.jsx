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