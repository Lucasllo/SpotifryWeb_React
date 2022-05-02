import { Link, useNavigate } from "react-router-dom";
import CaixaFormulario from "../cadastro/caixaFormulario/caixaFormulario";
import { log } from "../cadastro/caixaFormulario/dadosFormulario";
import "./login.css";
import axios from "axios";
import { useState } from "react";

function Login({setEstaLogado}) {

  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  const dados = [
    {
      campo: email,
      evento: setEmail
    },
    {
      campo: senha,
      evento: setSenha
    },
  ]

  function logar(e) {
    e.preventDefault();
    axios.get("http://localhost:3001/usuario")
      .then((resp) => {
        let login = resp.data.find((p) => p.email == email && p.senha == senha);
        if (login) {
          localStorage.setItem('usuarioLogado', JSON.stringify(login.id));
          setEstaLogado(JSON.parse(localStorage.getItem('usuarioLogado')));
          navigate(`/menulogado/${login.id}/musicas`, {state:{id:login.id}}, { replace: true })
        }
      }
      );
  }

  return (
    <main className="login">
      <section className="login_caixa">
        <h2>Login</h2>
        <form onSubmit={logar} className="login_formulario">
          {log().map(item => {
            return (
              <CaixaFormulario
                name={item.name}
                id={item.id}
                type={item.type}
                placeholder={item.placeholder}
                required={item.required}
                class={item.class}
                label={item.label}
                campo={dados[item.position].campo}
                evento={v => dados[item.position].evento(v)}
              />
            )
          })}
          <p>
            Esqueceu? Recupere a senha
            <a href="#">aqui</a>
          </p>
          <br />
          <div className="login_formulario_enviar">
            <input
              className="login__formulario_botao"
              type="submit"
              value="Continuar"
            />
          </div>
        </form>
        <br />
        <div className="login_formulario_info">
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