import { Link } from 'react-router-dom';
import './playlists.css'
import axios from 'axios';
import { useEffect, useState } from 'react';

function Playlists() {
    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/playlist")
            .then((resp) => setPlaylists(resp.data));
    }, [])

    return (
        <div>
            <ul className="playlists">
                {playlists.map((item) => {
                    return (
                        <li>
                            <Link to={{ pathname: `/playlist/${item.id}` }}>
                                <img src={item.imagem} alt="imagem capa" />
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Playlists;