import { listas } from './estilosMusicais/estilosMusicais';
import '../playlists.css'
import { useParams } from 'react-router';
import playlists from '../playlists_imagens/playlists_imagens';
import { useState } from 'react';
import Player from './player';

function Playlist() {
    const params = useParams();

    const playlistCapas = playlists().find((p) => p.id == params.id);
    const playlistSelecionada = listas().find((p) => p.id == params.id);

    return (
        <div className="playlist">

            <div className="playlist_capa">
                <figure className="playlist_capa_campo">
                    <img src={playlistCapas.imagem} alt="capa" />
                </figure>
            </div>

            <div className="playlist_musicas">
                <ul>
                    {playlistSelecionada.lista.map((item, index) => {
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