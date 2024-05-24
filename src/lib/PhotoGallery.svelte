<script>
    let images = [];
  
    function handleFileSelect() {
      const fileInput = document.createElement('input');
      fileInput.type = 'file';
      fileInput.accept = 'image/*';
      fileInput.multiple = true;
      fileInput.onchange = (e) => {
        const target = e.target;
        if (target.files) {
          const files = Array.from(target.files);
          images = files.map(file => ({
            url: URL.createObjectURL(file),
            name: file.name
          }));
        }
      };
      fileInput.click();
    }
  </script>
  
  <button on:click={handleFileSelect}>Subir Fotos</button>
<div class="gallery">
  {#each images as image}
    <div class="photo">
      <img src={image.url} alt={image.name}>
    </div>
  {/each}
</div>
