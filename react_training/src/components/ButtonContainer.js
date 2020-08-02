import styled from 'styled-components'

export const ButtonContainer = styled.button
`
    height: auto;
    width: auto;
    background: transparent;
    color: blue;
    border: 1px solid blue;
    border-radius: 5px;
    transition: all 0.5s linear 0s;
    cursor: pointer;
    &:hover {
        background: blue;
        color: white;
    }
`