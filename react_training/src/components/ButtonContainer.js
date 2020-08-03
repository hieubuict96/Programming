import styled from 'styled-components'

export const ButtonContainer = styled.button
`
    height: auto;
    width: auto;
    background: transparent;
    color: rgb(21, 21, 204);
    border: 1px solid rgb(21, 21, 204);
    border-radius: 5px;
    transition: all 0.5s linear 0s;
    cursor: pointer;
    &:hover {
        background: rgb(21, 21, 204);
        color: white;
    }
`