import './rodape.css'

function Rodape(){
    return(
        <footer className="rodape">
        <div className="container rodape_caixa">
            <div className="rodape_info">
                <ul>
                    <li className="rodape_info_item spotifry">
                        <ul>
                            <li>
                                Spotifry
                            </li>
                            <li>
                                <a href="">
                                    Recursos
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Dispositivos
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Ajuda
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="rodape_info_item explorar">
                        <ul>
                            <li>
                                Explorar
                            </li>
                            <li>
                                <a href="">
                                    Mais ouvidas
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Playlists
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Podcasts
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="rodape_info_item quemSomos">
                        <ul>
                            <li>
                                Quem Somos
                            </li>
                            <li>
                                <a href="">
                                    Nossa historia
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Parceiros
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    Premios
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div className="rodape_redes">
                <ul>
                    <li className="rodape_redes_instagram">
                        <a href="">
                            <img src="/img/instagram.svg" alt="logo Instagram"/>
                        </a>
                    </li>
                    <li className="rodape_redes_twitter">
                        <a href="">
                            <img src="/img/twitter.svg" alt="logo Twitter"/>
                        </a>
                    </li>
                    <li className="rodape_redes_facebook">
                        <a href="">
                            <img src="/img/facebook.svg" alt="logo Facebook"/>
                        </a>
                    </li>
                    <li className="rodape_redes_youtube">
                        <a href="">
                            <img src="/img/youtube.svg" alt="logo Youtube"/>
                        </a>
                    </li>
                </ul>
            </div>

        </div>

    </footer>
    )
}

export default Rodape;