import { useState, useEffect } from 'react';
import axios from 'axios';
import Checkbox from './checkBox/checkBox';
import './criaPlaylist.css'
import { useLocation } from 'react-router';

export default function CriaPlaylist() {

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
        <div className="criaPlaylist">
            <div className="criaPlaylist__buscar">
                <input
                    type="text"
                    value={buscar}
                    onChange={evento => setBuscar(evento.target.value)}
                    placeholder="Buscar"
                />
            </div>
            <form onSubmit={salvar}>
                {lista.map((item, index) => {
                    return (
                        <Checkbox
                            item={item}
                            index={index}
                            musicasSelecionadas={musicasSelecionadas}
                            setMusicasSelecionadas={setMusicasSelecionadas}
                        />
                    )
                })}
                <input type="submit" value="salvar" />
            </form>
        </div>
    )
}