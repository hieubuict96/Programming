import styled from "styled-components";

export const ButtonContainer = styled.button`
    height: auto;
    width: auto;
    background: transparent;
    color: rgb(21, 21, 204);
    border: 1px solid rgb(21, 21, 204);
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.5s linear 0s;
    &:hover {
        background: rgb(21, 21, 204);
        color: white;
    }
    .btn-able {
        cursor: pointer;
    }
    .btn-disable {
        cursor: default;
    }
`;
