<script lang="ts">
	import { images, addImage, removeImage, saveImageToGallery } from '../../stores/imageStore';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';

	let newImageUrl = '';
	let newImageFiles: File[] = [];

	function handleAddImage() {
		if (newImageUrl.trim()) {
			addImage({ url: newImageUrl.trim() });
			newImageUrl = ''; // Clear the input field
		}

		if (newImageFiles.length > 0) {
			newImageFiles.forEach((file) => {
				const reader = new FileReader();
				reader.onload = () => {
					addImage({ url: reader.result as string });
				};
				reader.readAsDataURL(file);
			});
			newImageFiles = []; // Clear the file input
		}
	}

	function handleFileChange(event: Event) {
		const input = event.target as HTMLInputElement;
		if (input.files && input.files.length > 0) {
			newImageFiles = Array.from(input.files);
		}
	}

	function handleRemoveImage(image: { url: string }) {
		removeImage(image);
	}

	function handleSaveImageToGallery(image: { url: string }) {
		saveImageToGallery(image);
	}
</script>

<main>
	<h1>Subir Fotos</h1>

	<div class="input-container">
		<input type="text" bind:value={newImageUrl} placeholder="Enter image URL" />
		<input type="file" accept="image/*" multiple on:change={handleFileChange} />
		<button on:click={handleAddImage}>Añadir Imagen</button>
	</div>

	{#if $images.length > 0}
		<div class="gallery">
			{#each $images as image}
				<div class="image-container">
					<img src={image.url} alt="" class="image" />
					<div class="buttons">
						<button on:click={() => handleRemoveImage(image)}>Remove</button>
						<button on:click={() => handleSaveImageToGallery(image)}>Save to Gallery</button>
					</div>
				</div>
			{/each}
		</div>
	{:else}
		<p>No hay imágenes disponibles</p>
	{/if}
</main>

<style>
	main {
		padding: 20px;
	}
	.input-container {
		display: flex;
		gap: 10px;
		margin-bottom: 20px;
	}
	.gallery {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 20px;
	}
	.image-container {
		position: relative;
		width: 100%;
		padding-top: 100%; /* 1:1 Aspect Ratio */
		overflow: hidden;
		border-radius: 10px;
	}
	.image {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover; /* Cover the container */
		border-radius: 10px;
	}
	.buttons {
		position: absolute;
		bottom: 10px;
		left: 10px;
		right: 10px;
		display: flex;
		justify-content: space-between;
		opacity: 0;
		transition: opacity 0.3s;
	}
	.image-container:hover .buttons {
		opacity: 1;
	}
	button {
		background-color: rgba(0, 0, 0, 0.7);
		color: white;
		border: none;
		padding: 5px 10px;
		border-radius: 5px;
		cursor: pointer;
	}
	button:hover {
		background-color: rgba(0, 0, 0, 0.9);
	}
</style>
