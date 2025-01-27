<script>
  import ItemPersonagem from "../../components/personagens/ItemPersonagem.svelte";
  import Titulo from "../../components/shared/Titulo.svelte";
  import personagens from "../../constants/personagens.js";
</script>

<div class="flex flex-col gap-10">
  <Titulo
    principal="Personagens"
    secundario="Conheça os personagens das histórias que você ama!"
  />

  <div class="grid grid-cols-2 gap-5">
    {#each personagens as personagem}
      <ItemPersonagem {personagem} />
    {/each}
  </div>
</div>
