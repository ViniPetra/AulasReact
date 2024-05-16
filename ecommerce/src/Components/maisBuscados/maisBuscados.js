import { useEffect, useState } from "react";
import { ImagemGnomo } from "../styles/Imagens";
import { Subtitulo, Titulo, Preco, DescricaoPequena, Texto } from "../styles/Texts";
import { Container, Card } from "../styles/Containers";


const MaisBuscados = () => {
    const [gnomos, setGnomos] = useState([]);
    useEffect(() => {
        const maisBuscados = async () => {
            try{
                const response =  await fetch('http://localhost:8000/gnomos');
                const data = await response.json();
                console.log(data);
                setGnomos(data);

            } catch(error){
                console.log(error)
            }

        }
        maisBuscados();
    }, []);

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


}   

export default MaisBuscados;