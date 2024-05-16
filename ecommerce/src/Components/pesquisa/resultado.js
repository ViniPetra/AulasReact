import React from 'react';
import { Container, Card } from "../styles/Containers";
import { ImagemGnomo } from "../styles/Imagens";
import { Titulo, Subtitulo, Texto, Preco, DescricaoPequena } from "../styles/Texts";

const Resultado = ({ gnomos }) => {
  if (gnomos.length === 0) {
    return <p>Nenhum Gnomo Encontrado...</p>;
  }

  return (
    <Container>
      {gnomos.map((gnomo) => (
        <Card key={gnomo.nome}>
          <Titulo>{gnomo.nome}</Titulo>
          <ImagemGnomo src={gnomo.imagem} alt={`Imagem do gnomo ${gnomo.nome}`} />
          <Subtitulo>Elemento: {gnomo.elemento}</Subtitulo>
          <Preco>Preço: R${gnomo.preço.toLocaleString()}</Preco>
          <DescricaoPequena>{gnomo.descrição}</DescricaoPequena>
          <Texto>Especialidade: {gnomo.especialidade}</Texto>
        </Card>
      ))}
    </Container>
  );
};

export default Resultado;
