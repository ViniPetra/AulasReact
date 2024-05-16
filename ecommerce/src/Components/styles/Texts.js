import styled from "styled-components";

export const Titulo = styled.h1`
  font-size: ${props => props.size || "32px"};
  color: ${props => props.color || "dark-gray"};
  line-weight: ${props => props.weight || "1.5rem"};
  font-family: 'MedievalSharp', cursive;
  margin-bottom: 8px;
  `;

export const Subtitulo = styled.h2`
    font-size: ${props => props.size || "24px"};
    color: ${props => props.color || "white"};
    line-weight: ${props => props.weight || "1.5rem"};
    `;

export const Texto = styled.p`
    font-size: ${props => props.size || "32px"};
    color: ${props => props.color || "black"};
    line-weight: ${props => props.weight || "1.5rem"};
    font-weight: 400;
    font-family: 'MedievalSharp', cursive;
    margin-bottom: 16px;
    `;

export const Input = styled.input`
  width: 100%;
  max-width: 400px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 8px 12px;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  margin-bottom: 16px;
  box-sizing: border-box;
`;

export const Preco = styled.p`
  font-size: 18px;
  color: #e67e22;
  margin: 8px 0 16px 0;
`;

export const DescricaoPequena = styled.p`
  font-size: 10px;
  color: #666;
  margin: 8px 0;
`;



