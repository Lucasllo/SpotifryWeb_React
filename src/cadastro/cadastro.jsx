import { useState } from "react";
import "./cadastro.css";
import CaixaFormulario from "./caixaFormulario/caixaFormulario";
import { enderec, infoBasic, infoPess } from "./caixaFormulario/dadosFormulario";
import usuario from "./usuario";
import axios from "axios";

function Cadastro() {

  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [confirmaEmail, setConfirmaEmail] = useState();
  const [senha, setSenha] = useState();
  const [dataNascimento, setNascimento] = useState();
  const [cpf, setCpf] = useState();
  const [cep, setCep] = useState();
  const [logradouro, setLogradouro] = useState();
  const [cidade, setCidade] = useState();
  const [estado, setEstado] = useState();
  const playlist = [];

  const dados = [
    {
      campo: nome,
      evento: setNome
    },
    {
      campo: email,
      evento: setEmail
    },
    {
      campo: confirmaEmail,
      evento: setConfirmaEmail
    },
    {
      campo: senha,
      evento: setSenha
    },
    {
      campo: dataNascimento,
      evento: setNascimento
    },
    {
      campo: cpf,
      evento: setCpf
    },
    {
      campo: cep,
      evento: setCep
    },
    {
      campo: logradouro,
      evento: setLogradouro
    },
    {
      campo: cidade,
      evento: setCidade
    },
    {
      campo: estado,
      evento: setEstado
    }
  ]

  function limparFormulario() {
    setNome("");
    setEmail("");
    setConfirmaEmail("");
    setSenha("");
    setNascimento("");
    setCpf("");
    setCep("");
    setLogradouro("");
    setCidade("");
    setEstado("");
  }

  function salvar(e) {
    e.preventDefault();
    axios.post('http://localhost:3001/usuarios', {
      nome, email, senha, dataNascimento, cpf, cep, logradouro, cidade, estado 
    })
      .then(resposta => console.log(resposta.data))
      .catch(function (error) {
        console.log(error);
      });
    limparFormulario();
    alert("Cadastrado Com Sucesso!")
  }

  function valida() {
    if (email != confirmaEmail) {
      alert("Emails não conferem")
    }
  }

  return (
    <main className="cadastro">
      <section className="cadastro_caixa">
        <h2>Cadastro</h2>
        <form onSubmit={salvar} className="formulario ">
          <fieldset>
            <legend className="cadastro_formulario_legenda">
              Informações básicas
            </legend>
            {infoBasic().map(item => {
              return (
                <CaixaFormulario
                  key={item.position}
                  name={item.name}
                  id={item.id}
                  type={item.type}
                  placeholder={item.placeholder}
                  required={item.required}
                  class={item.class}
                  label={item.label}
                  campo={dados[item.position].campo}
                  evento={v => dados[item.position].evento(v)}
                  valida={valida}
                />
              )
            })}
          </fieldset>
          <fieldset>
            <legend className="cadastro_formulario_legenda">
              Informações pessoais
            </legend>
            {infoPess().map(item => {
              return (
                <CaixaFormulario
                  key={item.position}
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
          </fieldset>
          <fieldset>
            <legend className="cadastro_formulario_legenda">Endereço</legend>
            {enderec().map(item => {
              return (
                <CaixaFormulario
                  key={item.position}
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
          </fieldset>
          <div className="cadastro_formulario_enviar">
            <input
              className="cadastro_formulario_botao"
              type="submit"
              value="Cadastrar"
            />
          </div>
        </form>
      </section>
    </main>
  );
}

export default Cadastro;
