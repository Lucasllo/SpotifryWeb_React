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
  musicaNome: "Little" },
];

const brasil = [
  { musica: "/audio/littleidea.mp3" },
  { musica: "/audio/littleidea.mp3" },
  { musica: "/audio/littleidea.mp3" },
  { musica: "/audio/littleidea.mp3" },
  { musica: "/audio/littleidea.mp3" },
];

const funk = [
  { musica: "/audio/jazzyfrenchy.mp3" },
  { musica: "/audio/jazzyfrenchy.mp3" },
  { musica: "/audio/jazzyfrenchy.mp3" },
  { musica: "/audio/jazzyfrenchy.mp3" },
  { musica: "/audio/jazzyfrenchy.mp3" },
];

const lancamentos = [
  { musica: "/audio/hey.mp3" },
  { musica: "/audio/hey.mp3" },
  { musica: "/audio/hey.mp3" },
  { musica: "/audio/hey.mp3" },
  { musica: "/audio/hey.mp3" },
];

const ambiente = [
  { musica: "/audio/happyrock.mp3" },
  { musica: "/audio/happyrock.mp3" },
  { musica: "/audio/happyrock.mp3" },
  { musica: "/audio/happyrock.mp3" },
  { musica: "/audio/happyrock.mp3" },
];

const alternativa = [
  { musica: "/audio/cute.mp3" },
  { musica: "/audio/cute.mp3" },
  { musica: "/audio/cute.mp3" },
  { musica: "/audio/cute.mp3" },
  { musica: "/audio/cute.mp3" },
];

const anime = [
  { musica: "/audio/creativeminds.mp3" },
  { musica: "/audio/creativeminds.mp3" },
  { musica: "/audio/creativeminds.mp3" },
  { musica: "/audio/creativeminds.mp3" },
  { musica: "/audio/creativeminds.mp3" },
];

const soul = [
  { musica: "/audio/anewbeginning.mp3" },
  { musica: "/audio/anewbeginning.mp3" },
  { musica: "/audio/anewbeginning.mp3" },
  { musica: "/audio/anewbeginning.mp3" },
  { musica: "/audio/anewbeginning.mp3" },
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
