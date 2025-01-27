<script>
  import { page } from "$app/stores";
  import ConteudoPersonagem from "../../../components/personagens/ConteudoPersonagem.svelte";
</script>

<ConteudoPersonagem personagem={$page.data.personagem} />
