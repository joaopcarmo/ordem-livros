import { error } from "@sveltejs/kit";
import personagens from "../../../constants/personagens.js";

export function load(dados) {
  const personagemId = dados.params.id;

  for (let personagem of personagens) {
    if (personagem.id == personagemId) {
      return { personagem };
    }
  }

  error(404, "Personagem não encontrado");
}
