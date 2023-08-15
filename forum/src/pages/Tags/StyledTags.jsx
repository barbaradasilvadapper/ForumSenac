import styled from "styled-components"

export const TagPageContainer = styled.div`
    background-color: #1E252B;
    min-height: 100%;
    min-width: 100%;
    grid-area: content;
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
    width: 97%;
    margin-top: 5vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    overflow: auto;
    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-thumb {
        width: 0px;
    }
`