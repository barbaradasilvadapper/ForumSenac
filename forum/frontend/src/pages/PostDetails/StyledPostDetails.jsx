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

export const HomeGrid = styled.div`
    display: grid;
    grid-template-areas: "title"
                         "content"
                         "comments";
    grid-template-rows: 16vh;
    margin-left: 7vh;
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

export const PageHead = styled.div`
  grid-area: title;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
    margin-right: 7vh;
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

export const HeadInfo = styled.div`
    border-radius: 20px;
    height: fit-content;
    margin-top: 6vh;
    /* padding: 4vh; */
    margin-left: 4vh;
`

export const User = styled.p`
  font-size: smaller;
`

export const Time = styled.p`
    font-size: smaller;
    color: #808080;
`

export const PostContainer = styled.div`
    grid-area: content;
    margin-right: 7vh;
    margin-left: 20vh;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

export const PostTitle = styled.p`
    font-style: bold;
    font-size: medium;
    margin-bottom: 3vh;
    letter-spacing: 0.4px;
`

export const PostContent = styled.p`
    font-size: smaller;
    color: #808080;
    letter-spacing: 0.4px;
`

export const PostTagContainer = styled.div`
    height: 30px;
    background-color: #1E252B;
    display: inline-flex;
    gap: 2vh;
    margin-top: 5vh;
    margin-bottom: 5vh;
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
    background-color: #262D34;
    border: 1px solid #262D34;
    border-radius: 5px;
    font-size: smaller;

    &:hover{
        background-color: #252b31;
        border: 1px solid #252b31;
    }
`

export const FieldTitle = styled.p`
    letter-spacing: 1px;
    font-size: small;
`

export const Input = styled.input`
    height: 6vh;
    width: 60%;
    margin-top: 1vh;
    margin-bottom: 3vh;
    background-color: #262D34;
    border: 1px solid #262D34;
    box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.192);
    border-radius: 10px;
    padding-left: 2vh;
    font-size: small;
`
export const Textarea = styled.textarea`
    height: 30vh;
    width: 60%;
    margin-bottom: 6vh;
    padding: 2vh;
    background-color: #262D34;
    border: 1px solid #262D34;
    box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.192);
    border-radius: 10px;
    resize: vertical;
    font-size: small;
`

export const SubmitButton = styled.button`
    font-size: smaller;
    width: fit-content;
    background-color: #FF2377;
    padding: 1vh 2vh 1vh 2vh;
    border: 0.1px solid #FF2377;
    border-radius: 25px;
    margin-bottom: 4vh;
`

export const CommentContainer = styled.div`
    grid-area: comments;
    margin-right: 7vh;
    overflow: auto;
    height: fit-content;
    display: flex;
    flex-direction: column;
    padding-right: 5vh;
    align-items: end;
`
