<script lang="ts">
  export let texto: string;
  export let href: string;
  export let className = ""; // Add this line to accept custom classes
</script>

<a
  {href}
  class={`flex gap-2 items-center cursor-pointer px-4 py-2
      text-zinc-300 hover:underline hover:text-white
      hover:bg-white/10 ${className}`}
>
  <span class="flex-shrink-0">
    <slot />
  </span>
  <span>{texto}</span>
</a>
