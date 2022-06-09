import { useState, useEffect } from 'react';
import axios from 'axios';
import Checkbox from './checkBox/checkBox';
import './criaPlaylist.css'

export default function CriaPlaylist() {

    const user =JSON.parse(localStorage.getItem('usuarioLogado'));

    const [musicas, setMusicas] = useState([]);

    const [musicasSelecionadas, setMusicasSelecionadas] = useState([]);

    const [buscar, setBuscar] = useState("");

    const [lista, setLista] = useState([]);

    const [musicasPlay, setMusicasPlay] = useState([]);

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

        axios.get(`http://localhost:3001/playlists/?idUsuario=${user}`)
            .then((resp) => {
                setMusicasPlay(resp.data.playlists)
            });
    }, [])

    
    function salvar(e) {
        e.preventDefault();
        
        axios.post(`http://localhost:3001/playlists`, {
            playlists: musicasSelecionadas
        })
            .then(resposta => console.log(resposta.data))
            .catch(function (error) {
                console.log(error);
            });
        alert("cadastrado com sucesso");
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
                {lista.map((item) => {
                    return (
                        <Checkbox
                            musicasPlay={musicasPlay}
                            item={item}
                            index={item.id}
                            musicasSelecionadas={musicasSelecionadas}
                            setMusicasSelecionadas={setMusicasSelecionadas}
                        />
                    )
                })}
                <input className="criaPlaylist__salvar" type="submit" value="salvar" />
            </form>
        </div>
    )
}