import styled from "styled-components"

export const FilterBarContainer = styled.div`
    grid-area: "filter";
    display: flex;
    align-items: center;
    gap: 2vh;
    /* background-color: aqua; */
`
export const FixedFilter = styled.div`
    background-color: #262D34;
    width: fit-content;
    height: 100%;
    border: 1px solid #262D34;
    border-radius: 25px;
    font-size: smaller;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 2vh;
    padding-right: 2vh;
    gap: 1vh;

    &:hover {
        background-color: #333a41;
    }
    &:active {
        background-color: #1682FD;
    }
`

export const FilterIcons = styled.img`
    margin-bottom: 0.3vh;
`

export const SearchIcons = styled.img`
    width: 14px;
    margin-bottom: 0.3vh;
`

export const SearchBar = styled.div`
    background-color: #262D34;
    width: fit-content;
    height: 100%;
    border: 1px solid #262D34;
    border-radius: 25px;
    font-size: 9px;
    color: #808080;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 3vh;
    padding-right: 3vh;
    gap: 1vh;
    margin-left: 20vh;
`