import "./App.css";
import { Paragrafo, Subtitulo, Titulo } from "./Components/styles/Texts";
import MaisBuscados from "./Components/maisBuscados/maisBuscados";
import MenuBar from "./Components/navbar/MenuBar";
import Pesquisa from "./Components/pesquisa/Pesquisa";
import { Route, Routes } from "react-router-dom";
import Cadastro from "./Components/cadastro/cadastro";
import Login from "./Components/login/login";

function App() {
  return (
    <div className="App">
      <MenuBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <header className="App-header">
                <Pesquisa />
              </header>
              <MaisBuscados />
            </>
          }
        />
        <Route
        path="/sobre"
        element={<>
        </>
        }
      />
        <Route
          path="/cadastro"
          element={<>
          <Cadastro />
          </>
          }
        />
        <Route
          path="/login"
          element={<>
          <Login />
          </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
