import React from 'react';
import styled from 'styled-components';
import { Container } from '../styles/Containers';
import { Titulo } from "../styles/Texts";
import imgGinomes from '../imgs/ginomes.jpg';

const Sobre = () => {
  return (
    <StyledContainer>
      <Content>
        <ImageContainer>
          <Image src={imgGinomes} alt="Imagem de Gnome" />
        </ImageContainer>
        <Text>
          <p>
            Bem-vindo ao nosso mundo de gnomos elementais! Aqui no nosso e-commerce, você encontrará os gnomos mais adoráveis e mágicos dos elementos Fogo, Água, Terra e Ar.
          </p>
          <p>
            Nossos gnomos capturam a essência de cada elemento em suas criações. Cada gnomo é único e traz consigo a energia e os poderes do seu elemento correspondente.
          </p>
          <p>
            Explore nossa coleção e deixe-se encantar pela magia dos gnomos elementais. Eles são perfeitos para diversas atividades laborais ou para presentear alguém especial.
          </p>
          <p>
            Seja bem-vindo ao mundo mágico dos gnomos elementais!
          </p>
        </Text>
      </Content>
    </StyledContainer>
  );
}

export default Sobre;

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

const Content = styled.div`
  width: 100%;
  max-width: 600px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
`;

const Image = styled.img`
  width: 150px;
  height: auto;
  border: 4px solid black;
`;

const Text = styled.div`
  background-color: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: justify;
  font-size: 0.85em;

  p {
    margin-bottom: 12px;
  }
`;
