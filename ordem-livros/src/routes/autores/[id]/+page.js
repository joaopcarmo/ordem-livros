import { error } from "@sveltejs/kit";
import autores from "../../../constants/autores.js";

export function load(dados){
    const autorId = dados.params.id;

    // biome-ignore lint/style/useConst: <explanation>
    for(let autor of autores){
        // biome-ignore lint/suspicious/noDoubleEquals: <explanation>
        if(autor.id == autorId){
            return { autor }
        }
    }

    error(404, "Autor não encontrado")

}