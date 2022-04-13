import '../playlists.css'
import { useRef, useState } from 'react';

function Player(props) {
    const [botao, setBotao] = useState("/img/play-solid.svg");
    
    const musica = useRef(new Audio(props.musica));
    
    const play = () => {
        props.setPlaying(true);
        musica.current.play();
        setBotao("/img/pause-solid.svg");
    };
    
    const pause = () => {
        props.setPlaying(false);
        musica.current.pause();
        setBotao("/img/play-solid.svg");
    };
    
    return (
        <li key={props.key} onClick={props.playing ? pause : play} >
            <div className="playlist_musicas_play">
                <img src={botao} alt="" />
            </div>
            <div>
                <span>{props.musicaNome}</span>
            </div>
        </li>
    )
}

export default Player;