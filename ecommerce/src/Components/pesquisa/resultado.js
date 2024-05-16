import { Container, Card } from "../styles/Containers"
import { ImagemGnomo } from "../styles/Imagens";
import { Subtitulo, Titulo } from "../styles/Texts";

const Resultado = ({livros}) => {
    if(livros.length === 0) {
        return <p>Nenhum Gnomo Encontrado...</p>
    }

    return(
        <Container>
            {
                livros.map((livro) => {
                    return (
                        <Card>
                            <Titulo> {livro.title} </Titulo>
                            <ImagemGnomo src={livro.imagem} alt={livro.title}/>
                            <Subtitulo> {livro.year} </Subtitulo>
                        </Card>
                    )
                })
            }
        </Container>
    );
}


export default Resultado;