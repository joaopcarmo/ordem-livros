<script lang="ts">
  export let personagem: any = null;
</script>

{#if personagem}
  <a
    href="/personagens/{personagem.id}"
    class="flex flex-col rounded-md relative overflow-hidden border-zinc-800"
  >
    <img
      src={personagem.imagem}
      alt="Foto do personagem"
      class="h-96 object-cover"
    />
    <div
      class="absolute bottom-0 w-full flex justify-end px-6 py-4 bg-black/50"
    >
      <span class="text-2xl font-black">{personagem.nome}</span>
    </div>
  </a>
{/if}
