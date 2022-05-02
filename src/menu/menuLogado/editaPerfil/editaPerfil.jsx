import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CaixaFormulario from "../../../cadastro/caixaFormulario/caixaFormulario";
import { enderec, infoBasic } from "./dadosFormularioEdita";

export default function EditaPerfil() {
    const location = useLocation();

    const [nome, setNome] = useState();
    const [senha, setSenha] = useState();
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
            campo: senha,
            evento: setSenha
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

    useEffect(() => {
        axios.get(`http://localhost:3001/usuario/${location.state.id}`)
            .then((resp) => {
                setNome(resp.data.nome);
                setCep(resp.data.cep);
                setLogradouro(resp.data.logradouro);
                setCidade(resp.data.cidade);
                setEstado(resp.data.estado);
            }
            );
    }, [])

    function limparFormulario() {
        setNome("");
        setSenha("");
        setCep("");
        setLogradouro("");
        setCidade("");
        setEstado("");
    }

    function salvar(e) {
        e.preventDefault();
        axios.patch(`http://localhost:3001/usuario/${location.state.id}`, {
            nome, senha, cep, logradouro, cidade, estado
        })
            .then(resposta => console.log(resposta.data))
            .catch(function (error) {
                console.log(error);
            });
        limparFormulario();
        alert("Cadastrado Com Sucesso!")
    }

    return (
        <main className="cadastro">
            <section className="cadastro_caixa">
                <h2>Editar Perfil</h2>
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