import './suporte.css'

function Suporte(){
    var perguntas = [
    {pergunta:"O que é Spotifry?", 
    resposta:" A Spotifry é um aplicativo de streaming musical que oferece acesso a mais de 90 milhões de faixas do mundo todo, além de outros conteúdos, como podcasts. Você inclusive recebe recomendações personalizadas e Spotifry Originals exclusivos."},
    {pergunta:"Quanto custa a Spotifry?", 
    resposta:" Spotifry Free oferece uma experiência musical de aplicativo de música completamente grátis. Se você escolher uma das nossas ofertas pagas de streaming musical, você pode aproveitar nossos recursos avançados a partir de R$ 0,90/mês. Termos e condições se aplicam"},
    {pergunta:"Como cancelo minha assinatura?", 
    resposta:" Eu já tenho uma conta Spotifry Premium. Preciso criar uma segunda conta para o Spotifry Family?"},
    {pergunta:" Qual é a diferença entre uma Conta independente e um perfil do seu plano Deezer Family?", 
    resposta:"Contas independentes são convidadas pelo Admin e depois de juntarem-se elas têm suas próprias credenciais privadas de login. Perfis são criados pela conta Admin e usam as mesmas credenciais de login. Você pode adicionar um total de 5 contas independentes e perfis em um plano Deezer Family."},
    {pergunta:"Eu já tenho uma conta Spotifry Premium. Preciso criar uma segunda conta para o Spotifry Family?", 
    resposta:" Não. Você pode fazer o upgrade para o Spotifry Family na seção Gerenciar minha assinatura das configurações de sua conta. Todo o seu conteúdo favorito e baixado também será salvo quando você fizer o upgrade do seu plano."},
    {pergunta:"Nós já temos duas ou mais contas Spotifry na nossa casa. Posso mesclar todos os nossos favoritos em uma única conta?", 
    resposta:"Sim. Você vai precisar configurar sua conta Spotifry Family de uma de suas assinaturas existentes, o que permitirá que você adicione 5 membros adicionais. Seus favoritos e os membros convidados por você serão automaticamente transferidos."}
]

    return(
        <main className="faq">

        <h1>FAQ</h1>

        <table>
            {perguntas.map((item) => {
                return(
                    <tr>
                        <th>
                            {item.pergunta}
                        </th>
                        <td>
                            {item.resposta}
                        </td>
                    </tr>
                )
            })}
        </table>

        <div className="pesquisa">
            <h3>Outra Duvida?</h3>
            <p>
                Como podemos ajudar?
                <div className="pesquisa_caixa">
                    <div>
                        <img src="img/magnifying.svg"/>
                    </div>
                    <input type="text" placeholder="Buscar"/>
                </div>
            </p>
        </div>


        </main>
    )
}

export default Suporte;