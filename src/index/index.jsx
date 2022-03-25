import './index.css'
import ItemCarrosel from "./carrosel/imagemCarrosel";
import imagCarrosel from "./carrosel/imagensCarrosel";
import Item from "./item/item";
import ItemAnuncio from "./item/itemAnuncio";
import { ite, iteAnun } from "./item/itemDados";


function Index() {
  return (
    <main className="principal">
      <ul className="principal_caixa">

        <div id="demo" className="carousel slide principal_carrosel" data-ride="carousel">

          <div className="carousel-inner">
            {imagCarrosel().map((item) => {
              return <ItemCarrosel class={item.class} imagem={item.imagem} />;
            })}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#demo"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>

        </div>

        <div className="principal_caixa1">
          {iteAnun().map((item) => {
            return <ItemAnuncio titulo={item.titulo} texto={item.texto} />;
          })}
        </div>

        <div className="principal_caixa2">
          {ite().map((item) => {
            return (
              <Item
                imagem={item.imagem}
                titulo={item.titulo}
                texto={item.texto}
              />
            );
          })}
        </div>

        <div className="principal_caixa3">
          <Item
            imagem="img/play_family.jpg"
            titulo="Spotifry family"
            texto="Conecte toda a família com música de qualidade!"
          />
        </div>

      </ul>
    </main>
  )
}

export default Index;