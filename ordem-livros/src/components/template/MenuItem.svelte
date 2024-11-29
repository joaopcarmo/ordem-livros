<script>
  // biome-ignore lint/style/useConst: <explanation>
    export let href = "/";
  // biome-ignore lint/style/useConst: <explanation>
    export let texto = "";
</script>

<li>
  <a {href} class="
  flex gap-2 items-center cursos-pointer px-4 py-2 text-zinc-300 hover:underline hover:text-white
  hover:bg-white/10"
  
  >
    <span>{texto}</span>
  </a>
</li>
