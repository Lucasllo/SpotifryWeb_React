import './index.css'

function Index(){
    return(
        <main className="principal">
        <ul className="principal_caixa">
            
            <div id="carouselExampleIndicators" className="carousel slide principal_carrosel" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img className="d-block w-100" src="img/play.jpg" alt="First slide"/>
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src="img/play_family.jpg" alt="Second slide"/>
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src="img/play_premium.jpg" alt="Third slide"/>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>

            
            <div className="principal_caixa1">
                <a href="">
                    <li className=" principal_anuncio">
                        <h1 className="principal_descricao">Você mais conectado</h1>
                        <p className="principal_pacote">Aproveite o momento com música e faça parte seja <strong>Premium</strong>, <strong>Family</strong> ou <strong>Free</strong>.</p>
                    </li> 
                </a>
                <a href="">
                    <li className=" principal_anuncio">
                        <h1 className="principal_descricao">Músicas do momento</h1>
                        <p className="principal_pacote">Sempre deixamos você atualizado das novidades do mundo musical, aproveite a plataforma do momento.</p>
                    </li>
                </a>

            </div> 

            <div className="principal_caixa2">
                <a href="">
                    <li className=" principal_anuncio">
                        <figure className="img_free">
                        <img src="img/play_1.jpg"/>
                        <figcaption>
                            <h1 className = "principal_descricao">Play Free </h1>
                            <p className = "principal_pacote">Uma nova maneira de ouvir o mundo.</p>
                        </figcaption>  
                    </figure>
                    </li>
                </a>
                <a href="">
                    <li className=" principal_anuncio">
                        <figure className="img_free">
                            <img src="img/play_premium.jpg"/>
                            <figcaption>
                                <h1 className = "principal_descricao">Spotifry Premium</h1>
                                <p className = "principal_pacote">Com Spotifry Premium você pode curtir suas músicas, playlists e podcasts sem anúncios, aproveite!</p>
                            </figcaption>
                        </figure>   
                    </li> 
                    
                </a>
                
            </div>
            <div className="principal_caixa3">
                <a href="#">
                    <li className=" principal_anuncio">
                        <figure className="img_free">
                            <img src="img/play_family.jpg"/>
                            <figcaption>
                                <h1 className="principal_descricao">Spotifry family</h1>
                                <p className="principal_pacote">Conecte toda a família com música de qualidade!</p>
                            </figcaption>
                        </figure>   
                    </li>   
                </a>
            </div>

        </ul>
    </main>
    )
}

export default Index;