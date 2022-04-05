import "./reset.css";
import "./base.css";
import Menu from "./menu/menu";
import Rodape from "./rodape/rodape";
import Index from "./index/index";
import Suporte from "./faq/suporte";
import Cadastro from "./cadastro/cadastro";
import Login from "./login/login";
import { Routes, Route } from "react-router-dom";
import Playlists from "./playlists/playlists";

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route element={<Index />} exact path="/"></Route>
        <Route element={<Suporte />} path="/suporte"></Route>
        <Route element={<Login />} path="/login"></Route>
        <Route element={<Cadastro />} path="/cadastro"></Route>
      </Routes>
      <Rodape />
      <Playlists />
    </>
  );
}

export default App;
