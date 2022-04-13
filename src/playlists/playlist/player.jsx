import '../playlists.css'
import { useRef, useState } from 'react';

function Player(props) {
    const [playing, setPlaying] = useState(false);

    const [botao, setBotao] = useState("/img/play-solid.svg");
    
    const musica = useRef(new Audio(props.musica));
    
    const play = () => {
        setPlaying(true);
        musica.current.play();
        setBotao("/img/pause-solid.svg");
    };
    
    const pause = () => {
        setPlaying(false);
        musica.current.pause();
        setBotao("/img/play-solid.svg");
    };
    
    return (
        <li key={props.key} onClick={playing ? pause : play} >
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