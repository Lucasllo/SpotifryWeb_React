function ItemAnuncio(props){
    return(
        <a href="">
            <li className=" principal_anuncio">
              <h1 className="principal_descricao">{props.titulo}</h1>
              <p className="principal_pacote">
                {props.texto}
              </p>
            </li>
          </a>
    )
}

export default ItemAnuncio;