import styled from "styled-components";

export const Button = styled.button`
  width: 120px;
  height: 40px;
  padding: 8px 16px;
  background-color: rgb(244, 206, 179);
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgb(162, 76, 56);
  }
`;

export const Botao = styled.button`
    background-color: rgb(244, 206, 179);
    height: 40px;
    width: 100px;
    font-size: 16px;
    border: 1px solid black;
    border-radius: 5px;
    padding: 8px 16px;
    margin: 8px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(2px);
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
    }
`;