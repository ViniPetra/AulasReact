import styled from "styled-components";

export const Button = styled.button`
    width: 100px;
    height: 30px;
    padding: 8px;
    background-color: white;
    cursor: pointer;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    `;

    export const Botao = styled.button`
    background-color: white;
    height: 40px;
    width: 100px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(2px);
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
`;