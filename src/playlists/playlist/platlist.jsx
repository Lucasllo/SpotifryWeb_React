import { listas } from './estilosMusicais/estilosMusicais';
import '../playlists.css'
import { useParams } from 'react-router';
import playlists from '../playlists_imagens/playlists_imagens';
import { useRef } from 'react';

function Playlist() {
    const params = useParams();

    const playlistCapas = playlists().find((p) => p.id == params.id);
    const playlistSelecionada = listas().find((p) => p.id == params.id);

    const tocarMusica0 = useRef(null);
    const tocarMusica1 = useRef(null);
    const tocarMusica2 = useRef(null);
    const tocarMusica3 = useRef(null);
    const tocarMusica4 = useRef(null);
    const mudaPlay0 = useRef(null);
    const mudaPlay1 = useRef(null);
    const mudaPlay2 = useRef(null);
    const mudaPlay3 = useRef(null);
    const mudaPlay4 = useRef(null);

    const musicas = [{
        ref: tocarMusica0,
        ref2: mudaPlay0,
        acao: () => {
            return (
                tocarMusica0.current.paused
                    ?
                    (tocarMusica0.current.play(),
                        tocarMusica1.current.pause(),
                        tocarMusica2.current.pause(),
                        tocarMusica3.current.pause(),
                        tocarMusica4.current.pause()) :
                    tocarMusica0.current.pause(),

                mudaPlay0.current.getAttribute('src') == "/img/play-solid.svg"
                    ?
                    (mudaPlay0.current.src = "/img/pause-solid.svg",
                        mudaPlay1.current.src = "/img/play-solid.svg",
                        mudaPlay2.current.src = "/img/play-solid.svg",
                        mudaPlay3.current.src = "/img/play-solid.svg",
                        mudaPlay4.current.src = "/img/play-solid.svg") :
                    mudaPlay0.current.src = "/img/play-solid.svg"
            );
        }
    },
    {
        ref: tocarMusica1,
        ref2: mudaPlay1,
        acao: () => {
            return (tocarMusica1.current.paused ? (tocarMusica1.current.play(), tocarMusica0.current.pause(), tocarMusica2.current.pause(), tocarMusica3.current.pause(), tocarMusica4.current.pause()) : tocarMusica1.current.pause(),

                mudaPlay1.current.getAttribute('src') == "/img/play-solid.svg"
                    ?
                    (mudaPlay1.current.src = "/img/pause-solid.svg", mudaPlay0.current.src = "/img/play-solid.svg", mudaPlay2.current.src = "/img/play-solid.svg", mudaPlay3.current.src = "/img/play-solid.svg", mudaPlay4.current.src = "/img/play-solid.svg") :
                    mudaPlay1.current.src = "/img/play-solid.svg"
            );
        }
    },
    {
        ref: tocarMusica2,
        ref2: mudaPlay2,
        acao: () => {
            return (tocarMusica2.current.paused ? (tocarMusica2.current.play(), tocarMusica1.current.pause(), tocarMusica0.current.pause(), tocarMusica3.current.pause(), tocarMusica4.current.pause()) : tocarMusica2.current.pause(),

                mudaPlay2.current.getAttribute('src') == "/img/play-solid.svg"
                    ?
                    (mudaPlay2.current.src = "/img/pause-solid.svg", mudaPlay1.current.src = "/img/play-solid.svg", mudaPlay0.current.src = "/img/play-solid.svg", mudaPlay3.current.src = "/img/play-solid.svg", mudaPlay4.current.src = "/img/play-solid.svg") :
                    mudaPlay2.current.src = "/img/play-solid.svg"
            );
        }
    },
    {
        ref: tocarMusica3,
        ref2: mudaPlay3,
        acao: () => {
            return (tocarMusica3.current.paused ? (tocarMusica3.current.play(), tocarMusica1.current.pause(), tocarMusica2.current.pause(), tocarMusica4.current.pause(), tocarMusica0.current.pause()) : tocarMusica3.current.pause(),

                mudaPlay3.current.getAttribute('src') == "/img/play-solid.svg"
                    ?
                    (mudaPlay3.current.src = "/img/pause-solid.svg", mudaPlay1.current.src = "/img/play-solid.svg", mudaPlay2.current.src = "/img/play-solid.svg", mudaPlay0.current.src = "/img/play-solid.svg", mudaPlay4.current.src = "/img/play-solid.svg") :
                    mudaPlay3.current.src = "/img/play-solid.svg"
            );
        }
    },
    {
        ref: tocarMusica4,
        ref2: mudaPlay4,
        acao: () => {
            return (tocarMusica4.current.paused ? (tocarMusica4.current.play(), tocarMusica1.current.pause(), tocarMusica2.current.pause(), tocarMusica3.current.pause(), tocarMusica0.current.pause()) : tocarMusica4.current.pause(),

                mudaPlay4.current.getAttribute('src') == "/img/play-solid.svg"
                    ?
                    (mudaPlay4.current.src = "/img/pause-solid.svg", mudaPlay1.current.src = "/img/play-solid.svg", mudaPlay2.current.src = "/img/play-solid.svg", mudaPlay3.current.src = "/img/play-solid.svg", mudaPlay0.current.src = "/img/play-solid.svg") :
                    mudaPlay4.current.src = "/img/play-solid.svg"
            );
        }
    }
    ]

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
                            <li onClick={musicas[index].acao} >
                                <div className="playlist_musicas_play">
                                    <img ref={musicas[index].ref2} src="/img/play-solid.svg" alt="" />
                                </div>
                                <div>
                                    <span>{item.musicaNome}</span>
                                </div>
                                <audio ref={musicas[index].ref} >
                                    <source src={item.musica} type="audio/mpeg" />
                                </audio>
                            </li>
                        )
                    })}
                </ul>

            </div>
        </div>
    )
}

export default Playlist;