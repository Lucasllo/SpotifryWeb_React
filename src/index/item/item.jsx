function Item(props){
    return(
        <a href="">
        <li className=" principal_anuncio">
            <figure className="img_free">
                <img src={props.imagem} />
                <figcaption>
                    <h1 className="principal_descricao">{props.titulo}</h1>
                    <p className="principal_pacote">{props.texto}</p>
                </figcaption>
            </figure>
        </li>
        </a>
    )
}

export default Item;