import React, { useState } from "react";
import styled from 'styled-components';
import { Button } from '../styles/Button';
import { Titulo} from "../styles/Texts";
import { Container} from "../styles/Containers"

const Cadastro = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: ""
  });

  const [feedback, setFeedback] = useState({
    message: "",
    type: ""
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(prevState => ({...prevState, [name]:value}))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.password) {
      setFeedback({
        message: "Por favor, preencha todos os campos.",
        type: "warning"
      });
      return; 
    }
    try{
      const response = await fetch("http://localhost:8000/cadastrar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setFeedback({ message: "Cadastro realizado com sucesso", type: "success" });
      } else {
        const error = await response.json();
        setFeedback({ message: error.message || "Erro no cadastro", type: "error" });
      }
      setFormData({ name: "", password: "" });
    } catch (error) {
      console.error(error);
      setFeedback({ message: "Erro ao conectar com o servidor", type: "error" });
    }
  }

  return (
    <StyledContainer>
      <Titulo>Cadastrar</Titulo>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="name">Nome de Usuário:</Label>
        <Input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Digite seu nome de usuário"
          required
        />
        <Label htmlFor="password">Senha:</Label>
        <Input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Digite sua senha"
          required
        />
        <Button type="submit">Cadastrar</Button>
        {feedback.message && (
          <Feedback className={feedback.type}>
            {feedback.message}
          </Feedback>
        )}
      </Form>
    </StyledContainer>
  );
};

export default Cadastro;

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

const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
`;

const Feedback = styled.div`
  margin-top: 12px;
  padding: 8px 16px;
  border-radius: 5px;
  font-size: 14px;
  &.success {
    background-color: #d4edda;
    color: #155724;
  }
  &.error {
    background-color: #f8d7da;
    color: #721c24;
  }
`;
