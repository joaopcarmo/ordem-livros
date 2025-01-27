<script lang="ts">
  export let titulo: string;
  export let className = "";
</script>

<div class="menu-section mb-4">
  <h2 class={`text-zinc-500 font-bold text-sm mb-2 ${className}`}>{titulo}</h2>
  <nav class="flex flex-col space-y-0.5">
    <slot />
  </nav>
</div>
