import styled from "styled-components"

export const TabContainer = styled.div`
    height: 7vh;
    margin-top: 2vh;
    margin-bottom: 2vh;
    background-color: #262D34;
    font-size: 15px;
    display: flex;
    align-items: center;
    padding-left: 6vh;

    &:hover,
    &:focus,
    &:active {
        background-color: #40454A;
        color: ${props => props.activeTabColor};
    }
`