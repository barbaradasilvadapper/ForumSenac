import styled,{ createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: 0;
        background: #1E252B;
    }
`

export const Grid = styled.div`
    display: grid;
    grid-template-areas: "header header"
                         "menu .";
    grid-template-columns: 20% 80%;
    grid-template-rows: 10vh;
`