import { Link, useParams } from "react-router-dom";

export default function MenuLogado({perfilLogado, setLogado}) {
    const params = useParams();

    return (
        <div>
            <header className="cabecalho">
                <div className=" cabecalho_caixa">
                    <div className="cabecalho_logo">
                        <Link to="/">
                            <img src="/img/logo.png" />
                            <span>Spotifry</span>
                        </Link>
                    </div>
                    <nav className="cabecalho_menu--logado">
                        <ul>
                            <li className="cabecalho_menu-item">
                                <Link to="/playlists">
                                    Playlists
                                </Link>
                            </li>
                            <li className="cabecalho_menu-item">
                                <Link 
                                    to={{ 
                                        pathname: `/menulogado/${perfilLogado}/editarPerfil`
                                    }}
                                    state={{ id: perfilLogado }} 
                                >
                                    Editar Perfil
                                </Link>
                            </li>
                            <li className="cabecalho_menu-item">
                                <Link to="/cadastro">
                                    Sua PlayList
                                </Link>
                            </li>
                            <li className="cabecalho_menu-item">
                                <Link to="/login" onClick={()=>{setLogado(false)}}>
                                    Logout
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

        </div>
    )
}