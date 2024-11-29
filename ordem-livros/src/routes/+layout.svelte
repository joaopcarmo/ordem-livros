<script lang="ts">
	import '../app.css';
  import Pagina from '../components/template/Pagina.svelte';
	// biome-ignore lint/style/useConst: <explanation>
	let { children } = $props();
</script>

<Pagina>
{@render children()}
</Pagina>