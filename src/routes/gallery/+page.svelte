<script lang="ts">
	import { galleryImages } from '../../stores/imageStore';
	import { onMount } from 'svelte';

	interface Image {
		url: string;
		id: number;
		placeholder?: boolean;
	}

	let items: Image[] = $galleryImages.map((image, index) => ({ ...image, id: index }));
	let draggedIndex: number | null = null;
	let placeholderIndex: number | null = null;

	function handleDragStart(event: DragEvent, index: number) {
		draggedIndex = index;
		if (!event.dataTransfer) {
			throw new Error('Drag event does not have dataTransfer');
		}
		event.dataTransfer.setData('text/plain', String(index));
		event.dataTransfer.effectAllowed = 'move';
	}

	function handleDragOver(event: DragEvent) {
		event.preventDefault();
		if (!event.dataTransfer) {
			throw new Error('Drag event does not have dataTransfer');
		}
		event.dataTransfer.dropEffect = 'move';
		const target = event.currentTarget as HTMLElement;
		const bounding = target.getBoundingClientRect();
		const offset = bounding.y + bounding.height / 2;
		const newPlaceholderIndex =
			event.clientY - offset > 0 ? Number(target.dataset.index) + 1 : Number(target.dataset.index);

		if (newPlaceholderIndex !== placeholderIndex) {
			placeholderIndex = newPlaceholderIndex;
			updateItemsWithPlaceholder();
		}
	}

	function handleDrop(event: DragEvent, index: number) {
		event.preventDefault();
		if (!event.dataTransfer) {
			throw new Error('Drag event does not have dataTransfer');
		}
		const draggedFromIndex = Number(event.dataTransfer.getData('text/plain'));
		if (draggedFromIndex !== null && draggedFromIndex !== index) {
			const updatedItems = [...items];
			const [draggedItem] = updatedItems.splice(draggedFromIndex, 1);
			updatedItems.splice(index, 0, draggedItem);
			items = updatedItems;

			galleryImages.set(items.map(({ url }) => ({ url })));
		}
		draggedIndex = null;
		placeholderIndex = null;
	}

	function handleDragEnd() {
		draggedIndex = null;
		placeholderIndex = null;
	}

	function updateItemsWithPlaceholder() {
		const updatedItems = [...items];
		if (placeholderIndex !== null && draggedIndex !== null) {
			const [draggedItem] = updatedItems.splice(draggedIndex, 1);
			updatedItems.splice(placeholderIndex, 0, { ...draggedItem, placeholder: true });
		}
		items = updatedItems;
	}

	function handleRemoveImage(image: Image) {
		items = items.filter((item) => item.id !== image.id);
		galleryImages.set(items.map(({ url }) => ({ url })));
	}

	onMount(() => {
		document.addEventListener('dragend', handleDragEnd);
	});
</script>

<main>
	<h1>Galería</h1>

	{#if items.length > 0}
		<div class="gallery">
			{#each items as item, index}
				<div
					class="image-container"
					draggable="true"
					on:dragstart={(event) => handleDragStart(event, index)}
					on:dragover={handleDragOver}
					on:drop={(event) => handleDrop(event, index)}
					class:dnd-dragging={draggedIndex === index}
					class:dnd-placeholder={item.placeholder}
					data-index={index}
					role="listitem"
				>
					<img src={item.url} alt="" class="image" />
					<div class="overlay">
						<button on:click={() => handleRemoveImage(item)}>Eliminar</button>
					</div>
				</div>
			{/each}
		</div>
	{:else}
		<p class="no-images-message">No hay imágenes en la galería</p>
	{/if}
</main>

<style>
	main {
		padding: 20px;
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
	.dnd-dragging {
		z-index: 10;
		opacity: 0.8;
		transform: scale(1.05);
	}

	.dnd-placeholder {
		background-color: rgba(0, 0, 0, 0.1);
		border: 2px dashed rgba(0, 0, 0, 0.2);
	}
	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		color: white;
		display: flex;
		justify-content: center;
		align-items: center;
		opacity: 0;
		transition: opacity 0.3s;
	}
	.image-container:hover .overlay {
		opacity: 1;
	}
	.overlay button {
		background-color: rgba(255, 255, 255, 0.7);
		border: none;
		padding: 10px 20px;
		border-radius: 5px;
		cursor: pointer;
	}
	.overlay button:hover {
		background-color: rgba(255, 255, 255, 1);
	}
	.no-images-message {
		color: #555;
		text-align: center;
		margin-top: 20px;
		font-size: 16px;
	}
</style>
