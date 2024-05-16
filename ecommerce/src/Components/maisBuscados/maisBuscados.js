import { useEffect, useState } from "react";
import { ImagemGnomo } from "../styles/Imagens";
import { Subtitulo, Titulo } from "../styles/Texts";
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
            {
                gnomos.map((gnomo) => {
                    return (
                        <Card>
                            <Titulo> {gnomo.title} </Titulo>
                            <ImagemGnomo src={gnomo.imagem} alt={gnomo.title}/>
                            <Subtitulo color = "dark-gray"> {gnomo.year} </Subtitulo>
                        </Card>
                    )
                })
            }
        </Container>
    );


}   

export default MaisBuscados;