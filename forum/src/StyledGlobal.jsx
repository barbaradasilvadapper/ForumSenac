import styled,{ createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: 0;
        background: #1E252B;
        font-family: 'Poppins', sans-serif;
        color: white;
    }
`

export const Grid = styled.div`
    display: grid;
    grid-template-areas: "header header"
                         "menu .";
    grid-template-columns: 23% 77%;
    grid-template-rows: 10.5vh 89.5vh;
`