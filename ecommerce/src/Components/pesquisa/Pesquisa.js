import { useState } from "react";
import { Container, Wrapper } from "../styles/Containers"
import { Titulo, Texto, Input } from "../styles/Texts"
import { Button } from "../styles/Button"
import Resultado from "./resultado";

const Pesquisa = () => {
    const [termoBusca, setTermoBusca] = useState('');
    const [gnomos, setGnomos] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const resposta = await fetch(`http://localhost:8000/buscarGnomosPorElemento/${termoBusca}`);
            const dados = await resposta.json();
            setGnomos(dados);
        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <Container direction='column'>
            <Wrapper>
                <Titulo>Escolha um elemento</Titulo>
                <Texto color='black'>Tente Fogo, Água, Terra ou Ar</Texto>
                <Input
                    placeholder="  Digite o elemento desejado"
                    value={termoBusca}
                    onChange={(e) => setTermoBusca(e.target.value)}
                />
                <Button onClick={handleSubmit}>Pesquisar</Button>
            </Wrapper>
            <Resultado livros={gnomos}/>
                
        </Container>
    )
}

export default Pesquisa;