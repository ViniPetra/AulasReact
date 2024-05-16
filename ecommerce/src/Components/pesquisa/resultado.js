import { Container, Card } from "../styles/Containers"
import { ImagemGnomo } from "../styles/Imagens";
import { Subtitulo, Titulo } from "../styles/Texts";

const Resultado = ({livros: gnomos}) => {
    if(gnomos.length === 0) {
        return <p>Nenhum Gnomo Encontrado...</p>
    }

    return(
        <Container>
            {
                gnomos.map((gnomo) => {
                    return (
                        <Card>
                            <Titulo> {gnomo.title} </Titulo>
                            <ImagemGnomo src={gnomo.imagem} alt={gnomo.title}/>
                            <Subtitulo> {gnomo.year} </Subtitulo>
                        </Card>
                    )
                })
            }
        </Container>
    );
}


export default Resultado;