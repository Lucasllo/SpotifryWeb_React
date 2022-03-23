import Menu from "./menu/menu";
import Rodape from "./rodape/rodape";
import Index from "./index/index";
import Suporte from "./faq/suporte";
import Cadastro from "./cadastro/cadastro";
import Login from "./login/login";
import { Routes, Route } from "react-router-dom";

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
    </>
  );
}

export default App;
