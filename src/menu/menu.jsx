import {Link} from "react-router-dom";
import './menu.css';

function Menu(){
    return(
        <header className="cabecalho">
        <div className=" cabecalho_caixa">
            <div className="cabecalho_logo">
               <Link to="/">
                    <img src="/img/logo.png"/>
                    <span>Spotifry</span>
                </Link>
            </div>
            <nav className="cabecalho_menu">
                <ul>
                    <li className="cabecalho_menu-item">
                        <Link to="/suporte">
                            Suporte
                        </Link>
                    </li>
                    <li className="cabecalho_menu-item">
                        <Link to="/cadastro">
                            Cadastre-se
                        </Link>
                    </li>
                    <li className="cabecalho_menu-item">
                        <Link to="/login">
                            Login
                        </Link>
                    </li>
                    <li className="cabecalho_menu-item">
                        <Link to="/playlists">
                            Playlist
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
    )
}

export default Menu;