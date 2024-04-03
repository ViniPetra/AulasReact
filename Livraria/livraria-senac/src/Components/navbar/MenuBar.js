import { Menu } from "../styles/Containers";
import { ImagemLogo } from "../styles/Imagens";
import { Lista, Item } from "../styles/Lista";
import Logo from "../imgs/logo.png";


const lista = ["Home", "Sobre", "Contato", "Login", "Cadastro"];
function MenuBar() {
  return (
    <div>
      <Menu>
        <ImagemLogo src={Logo}/>
        <Lista>
          {lista.map((item, index) => {
            return <Item key={index}>{item}</Item>
          })}
        </Lista>
        <Lista>
        </Lista>
      </Menu>
    </div>

  );
}

export default MenuBar;