import { listas } from './estilosMusicais/estilosMusicais';
import '../playlists.css'
import { useParams } from 'react-router';
import playlists from '../playlists_imagens/playlists_imagens';

function Playlist() {
    const params = useParams();
    return (
        <div className="playlist">

            <div className="playlist_capa">
                <figure className="playlist_capa_campo">
                    <img src={`/${playlists().at(params.id-1).imagem}`} alt="capa"/>
                </figure>
            </div>

            <div className="playlist_musicas">
                <ul>
                    {listas().at(params.id - 1).lista.map((item) => {
                        return (
                            <audio controls>
                                <source src={item.musica} type="audio/mpeg" />
                            </audio>
                        )
                    })}
                </ul>

            </div>
        </div>
    )
}

export default Playlist;