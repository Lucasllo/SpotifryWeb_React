import { Link } from "react-router-dom";

export default function MenuLogado(){
    return(
        <div>
            {/* <Routes>
                <Route path="editaPerfil" element={<EditaPerfil />} />
            </Routes> */}

            <Link to="editarPerfil">
                clique aqui            
            </Link>
        </div>
    )
}