import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function SuasPlaylist() {
    const user = JSON.parse(localStorage.getItem('usuarioLogado'));

    const [playlists, setPlaylists] = useState([]);
 

    useEffect(() => {
<<<<<<< HEAD
        axios.get(`http://localhost:3001/playlists/?idUsuario=${user}`)
=======
        axios.get(`http://localhost:3001/usuarios/${user}`) //playlists/?idUsuario=${user}
>>>>>>> 4199c68d12010bdb6fef22cbe55b4dc6df0ceb31
            .then((resp) => {
                setPlaylists(resp.data)
            });
    }, [])

    return (
        <div className="criaPlaylist">
            <div>
                <Link
                    to={{
                        pathname: `/menulogado/${user}/criarPlaylist`
                    }}
                    state={{ id: user }}
                >
                    Crie sua nova Playlist
                </Link>
            </div>
            {playlists.map((item, index) => {
                return (
                    <li>
                        <Link to={{ pathname: `/menuLogado/${user}/playEscolhida` }}
                            state={{musicas: item.musicas, imagem: item.imagem, id: item.id }}
                        >
                            <h2>Playlist {index+1}</h2>
                        </Link>
                        <Link to={{ pathname: `/menuLogado/${user}/playEscolhida` }}
                            state={{musicas: item.musicas, imagem: item.imagem, id: item.id }}
                        >
                            Editar
                        </Link>
                    </li>
                    
                )
            })}
        </div>
    )
}