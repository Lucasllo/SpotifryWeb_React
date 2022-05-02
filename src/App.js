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
import Playlist from "./playlists/playlist/platlist";
import MenuLogado from "./menu/menuLogado/menuLogado";
import EditaPerfil from "./menu/menuLogado/editaPerfil/editaPerfil";
import { useState } from "react";
import CriaPlaylist from "./menu/menuLogado/criaPlaylist/criaPlaylist";
import Musicas from "./menu/menuLogado/musicas/musicas";

function App() {

  const logado = JSON.parse(localStorage.getItem('usuarioLogado'));
  const [estaLogado, setEstaLogado] = useState(logado);

  return (
    <>
      {!estaLogado ? 
        <Menu /> : 
        <MenuLogado />
      }
      <Routes>
        <Route element={<Index />} exact path="/"></Route>
        <Route element={<Suporte />} path="/suporte"></Route>
        <Route element={ <Login setEstaLogado = {setEstaLogado}/>} path="/login"></Route>
        <Route element={<Cadastro />} path="/cadastro"></Route>
        <Route element={<Playlists />} path="/playlists"></Route>
        <Route element={<Playlist />} path="/playlist/:id"></Route>
        <Route 
          element={<MenuLogado setEstaLogado = {setEstaLogado}/>} 
          path="/menulogado/:id"
        ></Route>
        <Route element={<EditaPerfil />} path="/menulogado/:id/editarPerfil"></Route>
        <Route element={<CriaPlaylist />} path="/menulogado/:id/criarPlaylist"></Route>
        <Route element={<Musicas />} path="/menulogado/:id/musicas"></Route>
      </Routes>
      <Rodape />
    </>
  );
}

export default App;
