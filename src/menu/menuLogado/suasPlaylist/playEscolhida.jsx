import { useLocation } from 'react-router-dom';
import Player from '../../../playlists/playlist/player';

export default function PlayEscolhida() {    
    const location = useLocation();

    return (
        <div className="playlist">

            <div className="playlist_capa">
                <figure className="playlist_capa_campo">
                    <img src={location.state.imagem} alt="capa" />
                </figure>
            </div>

            <div className="playlist_musicas">
                <ul>
                    {location.state.musicas.map((item, index) => {
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
};