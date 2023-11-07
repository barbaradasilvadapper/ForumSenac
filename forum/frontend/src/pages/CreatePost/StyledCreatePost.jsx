import styled from "styled-components"

export const CreatePostContainer = styled.div`
    grid-area: content;
    height: 100%;
    width: 100%;
`

export const BackButton = styled.button`
    background-color: transparent;
    border: 0;
    width: 2vh;
    height: 4vh;
    margin-top: 6vh;
`

export const BackIcon = styled.img`
    width: 100%;
    height: 100%;
`
export const Inline = styled.div`
    display: inline-flex;
    padding-left: 7vh;
    height: 20vh;
    gap: 7vh;
`
export const ScrollContainer = styled.div`
    margin-top: 5vh;
    overflow: auto;
    height: 64vh;
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

export const TitleInput = styled.input`
    height: 6vh;
    width: 100%;
    margin-top: 1vh;
    margin-bottom: 6vh;
    background-color: #262D34;
    border: 1px solid #262D34;
    box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.192);
    border-radius: 10px;
    padding-left: 2vh;
`
export const DetailedInput = styled.textarea`
    height: 30vh;
    width: 98%;
    margin-top: 1vh;
    margin-bottom: 6vh;
    padding: 2vh;
    background-color: #262D34;
    border: 1px solid #262D34;
    box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.192);
    border-radius: 10px;
    resize: vertical;
`

export const TagInput = styled.div`
    display: flex;
    justify-content: space-between;
    width: 75%;
`

export const ImageInput = styled.input`
    height: 6vh;
    width: 100%;
    margin-top: 1vh;
    margin-bottom: 6vh;
    background-color: #262d34eb;
    border: 1px solid #262D34;
    box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.192);
    border-radius: 10px;
    padding-left: 2vh;
    color: #ffffff81;
`

export const SubmitButton = styled.button`
    margin-top: 6%;
    margin-left: 70%;
    font-size: smaller;
    background-color: #FF2377;
    padding: 1vh 2vh 1vh 2vh;
    border: 0.1px solid #FF2377;
    border-radius: 25px;
`
