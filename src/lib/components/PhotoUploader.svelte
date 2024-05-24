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
      event.preventDefault(); // Necesario para permitir el drop
    }
  
    function handleDrop(event: DragEvent) {
      event.preventDefault();
      if (event.dataTransfer && event.dataTransfer.files) {
        const files: File[] = Array.from(event.dataTransfer.files);
        updateImages(files);
      }
    }
  
    function updateImages(files: File[]) {
      images = files.map(file => {
        return {
          url: URL.createObjectURL(file),
          name: file.name
        };
      });
    }
  </script>
  
  <!-- Input para seleccionar archivos -->
  <input type="file" multiple on:change={handleFileChange}>
  
  <!-- Zona de arrastre -->
  <div
  on:dragover={handleDragOver}
  on:drop={handleDrop}
  class="dropzone"
  role="application"
  style="border: 2px dashed #ccc; padding: 20px; text-align: center;">
  Arrastra tus imágenes aquí
  {#each images as image}
    <div>
      <img src={image.url} alt={image.name}>
    </div>
  {/each}
</div>

  