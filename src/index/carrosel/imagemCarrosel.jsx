function ItemCarrosel(props) {
  return (
    <div className={`carousel-item ${props.class}`} >
      <img src={props.imagem} className="d-block w-100" />
    </div>
  );
}

export default ItemCarrosel;
