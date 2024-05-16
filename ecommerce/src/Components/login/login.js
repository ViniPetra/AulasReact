import React from 'react';
import styled from 'styled-components';
import { Container} from "../styles/Containers"
import { Titulo} from "../styles/Texts"
import { Button } from "../styles/Button"

const Login = () => {
  return (
    <StyledContainer>
      <Titulo>Entrar</Titulo>
      <Form>
        <Input type="text" placeholder="Nome de usuário" />
        <Input type="password" placeholder="Senha" />
        <Button>Entrar</Button>
      </Form>
    </StyledContainer>
  );
}

export default Login;

const StyledContainer = styled(Container)`
  background-color: #fde6d2;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: black;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

const Input = styled.input`
  width: 300px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 8px 12px;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
`;

