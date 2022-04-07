import { listas } from './estilosMusicais/estilosMusicais';
import '../playlists.css'
import { useParams } from 'react-router';

function Playlist() {
    const params = useParams();
    return (
        <div>
            <ul className="">
                {listas().at(params.id-1).lista.map((item) => {
                    return (
                        <audio controls>
                            <source src={item.musica} type="audio/mpeg" />
                        </audio>
                    )
                })}
            </ul>
        </div>
    )
}

export default Playlist;