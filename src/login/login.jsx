import "./login.css";

function Login() {
  return (
    <main class="login">
      <section class="login_caixa">
        <h2>Login</h2>
        <form class="login_formulario">
          <div class="login_formulario_caixa">
            <input type="text" id="nome" name="nome" placeholder=" " />
            <label for="nome">E-mail:</label>
          </div>
          <div class="login_formulario_caixa">
            <input type="password" id="senha" name="senha" placeholder=" " />
            <label for="senha">Senha:</label>
          </div>
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
            <a href="cadastro.html">Cadastre-se</a>
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