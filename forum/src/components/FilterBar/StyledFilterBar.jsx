import styled from "styled-components"

export const FilterContainer = styled.div`
    grid-area: "filter";
    width: 97%;
    display: grid;
    grid-template-areas: "fixed-filter search-filter";
    grid-template-columns: 60% 40%;
`

export const FilterBarContainer = styled.div`
    grid-area: "fixed-filter";
    display: flex;
    align-items: center;
    gap: 2vh;
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
    ${props => props.isActive &&`
        background-color: #1682FD;
    `}
`

export const FilterIcons = styled.img`
    margin-bottom: 0.3vh;
`

export const SearchContainer = styled.div`
    grid-area: "search-filter";
    display: flex;
    justify-content: right;
`

export const SearchIcons = styled.img`
    width: 14px;
    margin-bottom: 0.3vh;
`