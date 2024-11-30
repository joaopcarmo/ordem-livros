<script lang="ts">
  import { marked } from "marked";

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  // biome-ignore lint/style/useConst: <explanation>
  export let autor: any = null;
</script>

{#if autor}
  <div class="flex flex-col gap-5">
    <img
      src={autor.imagem}
      alt="Foto do autor"
      class="h-96 object-cover rounded-md"
    />
    <article class="prose lg:prose-xl prose-invert">
      {@html marked.parse(autor.biografia)}
    </article>
  </div>
{/if}
