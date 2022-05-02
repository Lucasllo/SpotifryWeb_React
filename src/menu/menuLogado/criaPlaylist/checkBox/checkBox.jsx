import { useEffect, useState } from 'react';
import Player from '../../../../playlists/playlist/player';
import './checkBox.css'

export default function Checkbox({ item, index, setMusicasSelecionadas, musicasSelecionadas }) {

    const [check, setCheck] = useState(false);

    const checked = () => {
        setCheck(true);
        if(!musicasSelecionadas.find(p=> p.id === index)){
            setMusicasSelecionadas([...musicasSelecionadas, { id: index, musicaNome: item.musicaNome, musica: item.musica }]);
        }
    };

    const notChecked = () => {
        setCheck(false);
        const musicSelecionada = musicasSelecionadas.indexOf(musicasSelecionadas.find(p => p.id === index));
        setMusicasSelecionadas([
            ...musicasSelecionadas.slice(0, musicSelecionada),
            ...musicasSelecionadas.slice(musicSelecionada + 1)
        ]);
    };

    return (
        <div className="checkBox">
            <input onChange={check ? notChecked : checked} type="checkbox" id={index} name={index} value={item.musicaNome} />
            <div className="checkBox_player" >
                <Player
                    musica={item.musica}
                    musicaNome={item.musicaNome}
                />
            </div>
        </div>
    );
};