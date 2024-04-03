import './App.css';
import { Paragrafo, Subtitulo, Titulo } from './Components/styles/Texts';
import MaisBuscados from './Components/maisBuscados/maisBuscados';
import  MenuBar  from './Components/navbar/MenuBar';
import Pesquisa from './Components/pesquisa/Pesquisa';

function App() {
  return (
    <div className="App">
      <MenuBar/>
      <header className="App-header">
      <Pesquisa/>
      </header>
      <MaisBuscados/>
    </div>
  );
}

export default App;