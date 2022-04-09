const itens = [
    {imagem:"/img/play_1.jpg", 
    titulo:" Play Free",
    texto:"Uma nova maneira de ouvir o mundo."},
    {imagem:"/img/play_premium.jpg", 
    titulo:" Spotifry Premium",
    texto: "Com Spotifry Premium você pode curtir suas músicas, playlists e podcasts sem anúncios, aproveite!"}
]

const itensAnuncio = [
    {titulo:"Você mais conectado",
    texto: "Aproveite o momento com música e faça parte seja Premium, Family ou Free."},
    {titulo:" Spotifry Premium",
    texto: "Com Spotifry Premium você pode curtir suas músicas, playlists e podcasts sem anúncios, aproveite!"}
]

export function iteAnun(){
    return itensAnuncio;
}

export function ite(){
    return itens;
}