<script>
	import { onMount, onDestroy } from 'svelte';
	import { imageUrls } from '../../stores/imageStore.js'; // Ajusta la ruta según donde esté ubicado tu store

	onMount(() => {
		return () => {
			$imageUrls.forEach((url) => URL.revokeObjectURL(url));
		};
	});
</script>

<main>
	<h1>Bienvenido a la Galería</h1>
	<p>Esta es la página principal de la galería.</p>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
	}
</style>
