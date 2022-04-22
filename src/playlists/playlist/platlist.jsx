import '../playlists.css'
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import Player from './player';
import axios from 'axios';

function Playlist() {
    const [playlists, setPlaylists] = useState([]);
    const params = useParams();
    var musicasSelecionadas;

    useEffect(() => {
        axios.get("http://localhost:3001/playlist")
            .then((resp) => setPlaylists(resp.data));
    }, [])

    const playlistSelecionada = playlists.find((p) => p.id == params.id)
    playlistSelecionada == undefined ? musicasSelecionadas = [] : musicasSelecionadas = playlistSelecionada.musicas;

    return (
        <div className="playlist">

            <div className="playlist_capa">
                <figure className="playlist_capa_campo">
                    <img src={playlistSelecionada != undefined ? playlistSelecionada.imagem : ''} alt="capa" />
                </figure>
            </div>

            <div className="playlist_musicas">
                <ul>
                    {musicasSelecionadas.map((item, index) => {
                        return (
                            <Player
                                key={index}
                                musica={item.musica}
                                musicaNome={item.musicaNome}
                            />
                        )
                    })}
                </ul>

            </div>
        </div>
    )
}

export default Playlist;