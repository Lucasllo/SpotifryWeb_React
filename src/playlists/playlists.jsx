import { Link } from 'react-router-dom';
import './playlists.css'
import playlists from './playlists_imagens/playlists_imagens';

function Playlists() {
    return (
        <div>
            <ul className="playlists">
            {playlists().map((item) => {
                return(
                <li>
                    <Link to={{ pathname: `/playlist/${item.id}`}}>
                        <img src={item.imagem} alt="imagem capa"/>
                    </Link>
                </li>
                )
            })}
            </ul>
        </div>
    )
}

export default Playlists;