import { error } from "@sveltejs/kit";
import series from "../../../constants/series.js";

export function load(dados) {
  const serieId = dados.params.id;

  // biome-ignore lint/style/useConst: <explanation>
  for (let serie of series) {
    // biome-ignore lint/suspicious/noDoubleEquals: <explanation>
    if (serie.id == serieId) {
      return { serie };
    }
  }

  error(404, "Série não encontrada");
}
