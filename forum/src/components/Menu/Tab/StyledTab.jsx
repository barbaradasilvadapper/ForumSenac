import styled from "styled-components"

export const TabContainer = styled.div`
    height: 6vh;
    margin-top: 1vh;
    margin-bottom: 1vh;
    background-color: #262D34;
    font-size: 15px;
    display: flex;
    align-items: center;
    padding-left: 6vh;
    color: white;
    font-size: small;
    gap: 2vh;

    &:hover,
    &:focus,
    &:active {
        background-color: #40454A;
        color: ${props => props.activeTabColor};
    }
`