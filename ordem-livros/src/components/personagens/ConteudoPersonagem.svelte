<script lang="ts">
  import { marked } from "marked";

  export let personagem: any = null;
</script>

{#if personagem}
  <div class="flex flex-col gap-5">
    <img
      src={personagem.imagem}
      alt="Foto do personagem"
      class="h-96 object-cover rounded-md"
    />
    <article class="prose lg:prose-xl prose-invert">
      {@html marked.parse(personagem.biografia)}
    </article>
  </div>
{/if}
