<script lang="ts">
	import { images, addImage, removeImage, saveImageToGallery } from '../../stores/imageStore';
	import { onMount } from 'svelte';
	import { get } from 'svelte/store';

	let newImageUrl = '';
	let newImageFiles: File[] = [];
	let previewUrls: string[] = [];

	function handleAddImage() {
		if (newImageUrl.trim()) {
			addImage({ url: newImageUrl.trim() });
			newImageUrl = '';
		}

		if (newImageFiles.length > 0) {
			newImageFiles.forEach((file) => {
				const reader = new FileReader();
				reader.onload = () => {
					addImage({ url: reader.result as string });
				};
				reader.readAsDataURL(file);
			});
			newImageFiles = [];
			previewUrls = [];
		}
	}

	function handleFileChange(event: Event) {
		const input = event.target as HTMLInputElement;
		if (input.files && input.files.length > 0) {
			newImageFiles = Array.from(input.files);
			previewUrls = newImageFiles.map((file) => URL.createObjectURL(file));
		}
	}

	function handleRemoveImage(image: { url: string }) {
		removeImage(image);
	}

	function handleSaveImageToGallery(image: { url: string }) {
		saveImageToGallery(image);
	}

	function openImage(url: string) {
		window.open(url, '_blank');
	}

	function handleKeyDown(event: KeyboardEvent, url: string) {
		if (event.key === 'Enter' || event.key === ' ') {
			openImage(url);
		}
	}
</script>

<main>
	<h1>Subir Fotos</h1>

	<div class="input-container">
		<input
			id="image-url"
			type="text"
			class="custom-input"
			bind:value={newImageUrl}
			placeholder="Ingrese URL de la imagen"
		/>
		<input
			id="image-file"
			type="file"
			accept="image/*"
			multiple
			on:change={handleFileChange}
			class="custom-file-input"
		/>
		<button on:click={handleAddImage} class="custom-button">Añadir Imagen</button>
	</div>

	{#if previewUrls.length > 0}
		<div class="preview-container">
			{#each previewUrls as url}
				<button
					type="button"
					class="preview-image-button"
					on:click={() => openImage(url)}
					on:keydown={(event) => handleKeyDown(event, url)}
				>
					<img src={url} alt="Previsualización de la imagen" class="preview-image" />
				</button>
			{/each}
		</div>
	{/if}

	{#if $images.length > 0}
		<div class="gallery">
			{#each $images as image}
				<div class="image-container">
					<img src={image.url} alt="" class="image" />
					<div class="buttons">
						<button on:click={() => handleRemoveImage(image)}>Eliminar</button>
						<button on:click={() => handleSaveImageToGallery(image)}>Guardar en la galería</button>
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
		max-width: 1200px;
		margin: 0 auto;
	}

	.input-container {
		display: flex;
		flex-direction: column;
		gap: 10px;
		margin-bottom: 20px;
	}

	@media (min-width: 600px) {
		.input-container {
			flex-direction: row;
			align-items: center;
		}
	}

	.custom-input,
	.custom-file-input,
	.custom-button {
		padding: 10px;
		border-radius: 5px;
		border: 1px solid #ccc;
		font-size: 16px;
		width: 100%;
	}

	.custom-input:focus,
	.custom-file-input:focus,
	.custom-button:focus {
		outline: none;
		border-color: #007bff;
		box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
	}

	.custom-button {
		background-color: #007bff;
		color: white;
		border: none;
		cursor: pointer;
		width: auto;
	}

	.custom-button:hover {
		background-color: #0056b3;
	}

	.gallery {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 20px;
	}

	.image-container {
		position: relative;
		width: 100%;
		padding-top: 100%;
		overflow: hidden;
		border-radius: 10px;
		background-color: #f0f0f0;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		transition:
			transform 0.3s,
			box-shadow 0.3s;
	}

	.image-container:hover {
		transform: scale(1.02);
		box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
	}

	.image {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
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

	.custom-input::placeholder {
		color: #000000;
		opacity: 1;
	}

	.preview-container {
		display: flex;
		gap: 10px;
		margin-bottom: 20px;
		flex-wrap: wrap;
	}

	.preview-image-button {
		all: unset;
		width: 100px;
		height: 100px;
		display: block;
		border-radius: 10px;
		overflow: hidden;
		border: 1px solid #ccc;
		cursor: pointer;
	}

	.preview-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>
