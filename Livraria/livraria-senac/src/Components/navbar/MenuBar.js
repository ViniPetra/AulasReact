import { Menu } from "../styles/Containers";
import { ImagemLogo } from "../styles/Imagens";
import { Lista, Item } from "../styles/Lista";
import Logo from "../imgs/logo.png";
import { Link } from "react-router-dom";
import { Botao, Button } from "../styles/Button";


const lista = ["Home", "Sobre", "Contato", "Login", "Cadastro"];

function MenuBar() {
  const renderButton = (item, index) => {
    const toPath = item === "Home" ? "/" : `/${item.toLowerCase()}`;
    return (
      <Link key={index} to={toPath}>
        <Botao>{item}</Botao>
      </Link>
    );
  };

  return (
    <Menu>
      <ImagemLogo src={Logo} alt="Logo" />
      <Lista>
        {lista.map(renderButton)}
      </Lista>
    </Menu>
  );
}


export default MenuBar;