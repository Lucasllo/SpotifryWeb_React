import { Link } from "react-router-dom";
import CaixaFormulario from "../cadastro/caixaFormulario/caixaFormulario";
import { log } from "../cadastro/caixaFormulario/dadosFormulario";
import "./login.css";

function Login() {
  return (
    <main class="login">
      <section class="login_caixa">
        <h2>Login</h2>
        <form class="login_formulario">
        {log().map(item => {
              return(
                <CaixaFormulario 
                  name = {item.name}
                  id = {item.id}
                  type = {item.type}
                  placeholder = {item.placeholder}
                  required = {item.required}
                  class = {item.class}
                  label = {item.label}
                />
              )
            })}
          <p>
            Esqueceu? Recupere a senha
            <a href="#">aqui</a>
          </p>
          <br />
          <div class="login_formulario_enviar">
            <input
              class="login__formulario_botao"
              type="submit"
              value="Continuar"
            />
          </div>
        </form>
        <br />
        <div class="login_formulario_info">
          <p>
            Não tem cadastro?
            <Link to="/cadastro">Cadastre-se</Link>
          </p>
          <p>
            Ao continuar com o acesso, você concorda com a nossa{" "}
            <a href="#">política de Privacidade</a>
          </p>
        </div>
      </section>
    </main>
  );
}

export default Login;