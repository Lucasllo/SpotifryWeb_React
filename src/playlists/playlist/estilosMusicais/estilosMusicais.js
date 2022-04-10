const rock = [
  { musica: "/audio/ukulele.mp3",
    musicaNome: "Aquarela" },
  { musica: "/audio/littleidea.mp3",
  musicaNome: "Tempos" },
  { musica: "/audio/jazzyfrenchy.mp3",
  musicaNome: "Hey" },
  { musica: "/audio/hey.mp3",
  musicaNome: "Happy Rock" },
  { musica: "/audio/happyrock.mp3",
  musicaNome: "Little" }
];

const brasil = [
  { musica: "/audio/ukulele.mp3",
  musicaNome: "Aquarela" },
{ musica: "/audio/littleidea.mp3",
musicaNome: "Tempos" },
{ musica: "/audio/jazzyfrenchy.mp3",
musicaNome: "Hey" },
{ musica: "/audio/hey.mp3",
musicaNome: "Happy Rock" },
{ musica: "/audio/happyrock.mp3",
musicaNome: "Little" }
];

const funk = [
  { musica: "/audio/ukulele.mp3",
    musicaNome: "Aquarela" },
  { musica: "/audio/littleidea.mp3",
  musicaNome: "Tempos" },
  { musica: "/audio/jazzyfrenchy.mp3",
  musicaNome: "Hey" },
  { musica: "/audio/hey.mp3",
  musicaNome: "Happy Rock" },
  { musica: "/audio/happyrock.mp3",
  musicaNome: "Little" }
];

const lancamentos = [
  { musica: "/audio/ukulele.mp3",
  musicaNome: "Aquarela" },
{ musica: "/audio/littleidea.mp3",
musicaNome: "Tempos" },
{ musica: "/audio/jazzyfrenchy.mp3",
musicaNome: "Hey" },
{ musica: "/audio/hey.mp3",
musicaNome: "Happy Rock" },
{ musica: "/audio/happyrock.mp3",
musicaNome: "Little" }
];

const ambiente = [
  { musica: "/audio/ukulele.mp3",
    musicaNome: "Aquarela" },
  { musica: "/audio/littleidea.mp3",
  musicaNome: "Tempos" },
  { musica: "/audio/jazzyfrenchy.mp3",
  musicaNome: "Hey" },
  { musica: "/audio/hey.mp3",
  musicaNome: "Happy Rock" },
  { musica: "/audio/happyrock.mp3",
  musicaNome: "Little" }
];

const alternativa = [
  { musica: "/audio/ukulele.mp3",
    musicaNome: "Aquarela" },
  { musica: "/audio/littleidea.mp3",
  musicaNome: "Tempos" },
  { musica: "/audio/jazzyfrenchy.mp3",
  musicaNome: "Hey" },
  { musica: "/audio/hey.mp3",
  musicaNome: "Happy Rock" },
  { musica: "/audio/cute.mp3",
  musicaNome: "Cute" }
];

const anime = [
  { musica: "/audio/ukulele.mp3",
    musicaNome: "Aquarela" },
  { musica: "/audio/littleidea.mp3",
  musicaNome: "Tempos" },
  { musica: "/audio/jazzyfrenchy.mp3",
  musicaNome: "Hey" },
  { musica: "/audio/hey.mp3",
  musicaNome: "Happy Rock" },
  { musica: "/audio/creativeminds.mp3",
  musicaNome: "Creative" }
];

const soul = [
  { musica: "/audio/ukulele.mp3",
  musicaNome: "Aquarela" },
{ musica: "/audio/littleidea.mp3",
musicaNome: "Tempos" },
{ musica: "/audio/jazzyfrenchy.mp3",
musicaNome: "Hey" },
{ musica: "/audio/hey.mp3",
musicaNome: "Happy Rock" },
{ musica: "/audio/anewbeginning.mp3",
musicaNome: "Beginning" }
];

const lista = [
  { id: 1, lista: rockM() },
  { id: 2, lista: brasilM() },
  { id: 3, lista: funkM() },
  { id: 4, lista: lancamentosM() },
  { id: 5, lista: ambienteM() },
  { id: 6, lista: alternativaM() },
  { id: 7, lista: animeM() },
  { id: 8, lista: soulM() },
];

function soulM() {
  return soul;
}

function rockM() {
  return rock;
}

function brasilM() {
  return brasil;
}

function funkM() {
  return funk;
}

function lancamentosM() {
  return lancamentos;
}

function ambienteM() {
  return ambiente;
}

function alternativaM() {
  return alternativa;
}

function animeM() {
  return anime;
}

export function listas() {
    return lista;
}
