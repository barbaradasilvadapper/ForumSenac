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
    grid-template-areas: "title status"
                         "filter ."
                         "post .";
    grid-template-columns: 70% 30%;
    grid-template-rows: 25vh 4vh;
    margin-left: 7vh;
`

export const PostContainer = styled.div`
    grid-area: "post";
    margin-top: 5vh;
    overflow: auto;
    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-thumb {
        width: 0px;
    }
`

export const DisabledStatus = styled.div`
    grid-area: "status";
`