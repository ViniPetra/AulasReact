import styled from 'styled-components';
import React, { useState } from "react";
import { Container } from "../styles/Containers";
import { Titulo } from "../styles/Texts";
import { Button } from "../styles/Button";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: ""
  });

  const [feedback, setFeedback] = useState({
    message: "",
    type: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
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
    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFeedback({ message: "Login realizado com sucesso", type: "success" });
      } else if (response.status === 401) {
        const error = await response.json();
        console.error(`Erro ${response.status}: ${error.message}`);
        setFeedback({ message: error.message || "Erro no login", type: "error" });
      } else {
        const error = await response.json();
        console.error(`Erro ${response.status}: ${error.message}`);
        setFeedback({ message: error.message || "Erro no login", type: "error" });
      }
    } catch (error) {
      console.error(`Erro ao conectar com o servidor: ${error.message}`);
      setFeedback({ message: "Erro ao conectar com o servidor", type: "error" });
    } finally {
      setFormData({ name: "", password: "" });
    }
  }

  return (
    <StyledContainer>
      <Titulo>Entrar</Titulo>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Nome de usuário"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          type="password"
          name="password"
          placeholder="Senha"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <Button type="submit">Entrar</Button>
        {feedback.message && (
          <Feedback className={feedback.type}>
            {feedback.message}
          </Feedback>
        )}
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
  &.warning {
    background-color: #fff3cd;
    color: #856404;
  }
`;
