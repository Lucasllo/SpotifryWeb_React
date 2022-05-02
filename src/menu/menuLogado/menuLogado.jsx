import { Link } from "react-router-dom";

export default function MenuLogado({ setEstaLogado }) {
    const logado = JSON.parse(localStorage.getItem('usuarioLogado'));

    function logout() {
        localStorage.removeItem('usuarioLogado');
        setEstaLogado(logado);
    }

    return (
        <div>
            <header className="cabecalho">
                <div className=" cabecalho_caixa">
                    <div className="cabecalho_logo">
                        <Link
                            to={{
                                pathname: `/menulogado/${logado}/musicas`
                            }}
                            state={{ id: logado }}
                        >
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
                                        pathname: `/menulogado/${logado}/editarPerfil`
                                    }}
                                    state={{ id: logado }}
                                >
                                    Editar Perfil
                                </Link>
                            </li>
                            <li className="cabecalho_menu-item">
                                <Link
                                    to={{
                                        pathname: `/menulogado/${logado}/criarPlaylist`
                                    }}
                                    state={{ id: logado }}
                                >
                                    Sua PlayList
                                </Link>
                            </li>
                            <li className="cabecalho_menu-item">
                                <Link to="/login" onClick={logout}>
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