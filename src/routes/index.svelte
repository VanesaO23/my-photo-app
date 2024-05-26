<script>
	import { imageUrls } from '../stores/imageStore.js';

	function handleFileUpload(event) {
		const fileList = event.target.files;
		const urls = Array.from(fileList).map((file) => ({
			url: URL.createObjectURL(file),
			name: file.name // Guarda también el nombre del archivo
		}));
		imageUrls.set(urls);
	}
</script>

<input type="file" multiple on:change={handleFileUpload} />

{#each $imageUrls as { url, name } (url)}
	<img src={url} alt={name || ''} />
{/each}
