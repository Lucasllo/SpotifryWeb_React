import { useState } from "react";
import "./cadastro.css";
import CaixaFormulario from "./caixaFormulario/caixaFormulario";
import { enderec, infoBasic, infoPess } from "./caixaFormulario/dadosFormulario";

function Cadastro() {

  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [dataNascimento, setNascimento] = useState();
  const [cpf, setCpf] = useState();
  const [cep, setCep] = useState();
  const [logradouro, setLogradouro] = useState();
  const [cidade, setCidade] = useState();
  const [estado, setEstado] = useState();

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


  return (
    <main className="cadastro">
      <section className="cadastro_caixa">
        <h2>Cadastro</h2>
        <form  action="" className="formulario ">
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
          <div className ="cadastro_formulario_enviar">
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
