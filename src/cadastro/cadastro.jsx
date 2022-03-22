import "./cadastro.css";

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
            <div class="cadastro_formulario_caixa">
              <input
                name="nome"
                id="nome"
                type="text"
                placeholder=" "
                required
              />
              <label for="nome">Nome</label>
            </div>
            <div class="cadastro_formulario_caixa">
              <input
                name="email"
                id="email"
                type="email"
                placeholder=" "
                required
              />
              <label for="email">Email</label>
            </div>
            <div class="cadastro_formulario_caixa">
              <input
                name="senha"
                id="senha"
                type="text"
                placeholder=" "
                required
              />
              <label for="senha">Senha</label>
            </div>
          </fieldset>
          <fieldset>
            <legend class="cadastro_formulario_legenda">
              Informações pessoais
            </legend>
            <div class="cadastro_formulario_caixa">
              <input
                name="nascimento"
                id="nascimento"
                type="date"
                placeholder="  de nascimento"
                required
              />
              <label for="nascimento">Data de nascimento</label>
            </div>
            <div class="cadastro_formulario_caixa">
              <input name="cpf" id="cpf" type="text" placeholder=" " />
              <label for="cpf">CPF</label>
            </div>
          </fieldset>
          <fieldset>
            <legend class="cadastro_formulario_legenda">Endereço</legend>
            <div class="cadastro_formulario_caixa">
              <input name="cep" id="cep" type="text" placeholder=" " required />
              <label for="cep">CEP</label>
            </div>
            <div class="cadastro_formulario_caixa">
              <input
                name="logradouro"
                id="logradouro"
                type="text"
                placeholder=" "
                required
              />
              <label for="logradouro">Logradouro</label>
            </div>
            <div class="cadastro_formulario_caixa">
              <input
                name="cidade"
                id="cidade"
                type="text"
                placeholder=" "
                required
              />
              <label for="cidade">Cidade</label>
            </div>
            <div class="cadastro_formulario_caixa">
              <input
                name="estado"
                id="estado"
                type="text"
                placeholder=" "
                required
              />
              <label for="estado">Estado</label>
            </div>
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
