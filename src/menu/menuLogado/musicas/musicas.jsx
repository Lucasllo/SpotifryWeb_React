import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Player from "../../../playlists/playlist/player";
import './musicas.css'

export default function Musicas() {
    const location = useLocation();

    const [musicas, setMusicas] = useState([]);

    const [musicasSelecionadas, setMusicasSelecionadas] = useState([]);

    const [buscar, setBuscar] = useState("");

    const [lista, setLista] = useState([]);

    function testaBusca(nomeMusica) {
        const regex = new RegExp(buscar, 'i');
        return regex.test(nomeMusica);
    }

    useEffect(() => {
        const novaLista = musicas.filter(item => testaBusca(item.musicaNome))
        setLista(novaLista);
    }, [buscar])

    useEffect(() => {
        axios.get("http://localhost:3001/musicas")
            .then((resp) => {
                setMusicas(resp.data)
                setLista(resp.data)
            });
    }, [])

    function salvar(e) {
        e.preventDefault();
        axios.patch(`http://localhost:3001/usuario/${location.state.id}`, {
            playlists: musicasSelecionadas
        })
            .then(resposta => console.log(resposta.data))
            .catch(function (error) {
                console.log(error);
            });
        console.log("cadastrado com sucesso");
    }

    return (
        <div className="musicas">
            <div className="musicas__buscar">
                <input
                    type="text"
                    value={buscar}
                    onChange={evento => setBuscar(evento.target.value)}
                    placeholder="Buscar"
                />
            </div>

            <div className="musicas__itens">
                <div className="musicas__item">
                    <figure className="musicas__itens__campo">
                        <img src="/img/play_.jpg" alt="capa" />
                    </figure>
                </div>
                <div className="playlist_musicas musicas__item">
                    <ul>
                        {lista.map((item) => {
                            return (
                                <Player
                                    musica={item.musica}
                                    musicaNome={item.musicaNome}
                                />
                            )
                        })}
                    </ul>
                </div>

            </div>

        </div>
    )
}