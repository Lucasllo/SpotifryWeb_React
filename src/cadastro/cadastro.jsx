import "./cadastro.css";
import CaixaFormulario from "./caixaFormulario/caixaFormulario";
import { enderec, infoBasic, infoPess } from "./caixaFormulario/dadosFormulario";

function Cadastro() {
  return (
    <main class="cadastro">
      <section class="cadastro_caixa">
        <h2>Cadastro</h2>
        <form action="" class="formulario ">
          <fieldset>
            <legend class="cadastro_formulario_legenda">
              Informações básicas
            </legend>
            {infoBasic().map(item => {
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
          </fieldset>
          <fieldset>
            <legend class="cadastro_formulario_legenda">
              Informações pessoais
            </legend>
            {infoPess().map(item => {
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
          </fieldset>
          <fieldset>
            <legend class="cadastro_formulario_legenda">Endereço</legend>
            {enderec().map(item => {
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
          </fieldset>
          <div class="cadastro_formulario_enviar">
            <input
              class="cadastro_formulario_botao"
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
