import { listas } from './estilosMusicais/estilosMusicais';
import '../playlists.css'
import { useParams } from 'react-router';
import playlists from '../playlists_imagens/playlists_imagens';
import { useRef } from 'react';

function Playlist() {
    const params = useParams();

    const playlistCapas = playlists().find((p) => p.id == params.id);
    const playlistSelecionada = listas().find((p) => p.id == params.id);

    const tocarMusica = useRef(null);
    const onButtonClick = () => {
        tocarMusica.current.play();
    };

    return (
        <div className="playlist">

            <div className="playlist_capa">
                <figure className="playlist_capa_campo">
                    <img src={playlistCapas.imagem} alt="capa" />
                </figure>
            </div>

            <div className="playlist_musicas">
                <ul>
                    {playlistSelecionada.lista.map((item) => {
                        return (
                            <div>
                                <li onClick={onButtonClick} >
                                    <span>tocar</span>
                                </li>
                                <audio ref={tocarMusica} >
                                    <source src={item.musica} type="audio/mpeg" />
                                </audio>
                            </div>
                        )
                    })}
                </ul>

            </div>
        </div>
    )
}

export default Playlist;