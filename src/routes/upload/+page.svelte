<script lang="ts">
	let images: { url: string; name: string }[] = [];

	function handleFileChange(event: Event) {
		const target = event.target as HTMLInputElement;
		if (target.files) {
			const files: File[] = Array.from(target.files);
			updateImages(files);
		}
	}

	function handleDragOver(event: DragEvent) {
		event.preventDefault(); // Necessary to allow the drop
	}

	function handleDrop(event: DragEvent) {
		event.preventDefault();
		if (event.dataTransfer && event.dataTransfer.files) {
			const files: File[] = Array.from(event.dataTransfer.files);
			updateImages(files);
		}
	}

	function updateImages(files: File[]) {
		images = files.map((file) => {
			return {
				url: URL.createObjectURL(file),
				name: file.name
			};
		});
	}
</script>

<main class="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
	<h1 class="text-3xl font-bold mb-4">Subida de Archivos</h1>
	<p>Bienvenido a la página de subida de archivos.</p>
	<!-- Single Input for file selection -->
	<input type="file" multiple on:change={handleFileChange} class="my-4" />
	<!-- Drag and drop area -->
	<div
		on:dragover={handleDragOver}
		on:drop={handleDrop}
		class="dropzone w-full md:w-1/2 lg:w-1/3 border-2 border-dashed border-gray-300 p-5 text-center cursor-pointer"
		role="button"
		aria-label="Dropzone area for uploading images by dragging and dropping files here"
		tabindex="0"
	>
		Arrastra tus imágenes aquí
		<div class="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
			{#each images as image}
				<div class="overflow-hidden rounded-lg shadow-lg max-w-xs mx-auto">
					<img src={image.url} alt={image.name} class="w-full h-auto object-cover" />
				</div>
			{/each}
		</div>
	</div>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 40vh;
	}
</style>
