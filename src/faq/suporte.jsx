import { pergunt } from './perguntas/perguntas';
import './suporte.css'

function Suporte(){
    return(
        <main className="faq">

        <h1>FAQ</h1>

        <table>
            {pergunt().map((item) => {
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