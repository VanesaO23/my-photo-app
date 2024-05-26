<script lang="ts">
	function handleFileSelect() {
	  const fileInput = document.createElement('input');
	  fileInput.type = 'file';
	  fileInput.accept = 'image/*';  // Acepta solo imágenes
	  fileInput.multiple = true;    // Permite seleccionar múltiples archivos
	  fileInput.onchange = (e) => {
		// Asegurar que e.target es un HTMLInputElement antes de acceder a .files
		const target = e.target as HTMLInputElement;
		if (target && target.files) {
		  const files = Array.from(target.files);
		  console.log(files); // Aquí puedes manejar los archivos seleccionados
		} else {
		  console.error('No se pudieron obtener los archivos');
		}
	  };
	  fileInput.click();  // Abre el diálogo para seleccionar archivos
	}
  </script>
  
  <div class="counter">
	<button on:click={handleFileSelect} aria-label="Add photos">
	  <svg aria-hidden="true" viewBox="0 0 1 1">
		<path d="M0,0.5 L1,0.5 M0.5,0 L0.5,1" />
	  </svg>
	  Añadir Fotos
	</button>
  </div>
  
  <style>
	.counter {
	  display: flex;
	  justify-content: center;
	  margin: 2rem 0;
	}
  
	.counter button {
	  padding: 0.5em 1em;
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  border: 2px solid #ccc;
	  background-color: #fff;
	  font-size: 1rem;
	  cursor: pointer;
	}
  
	.counter button:hover {
	  background-color: var(--color-bg-1);
	}
  
	svg {
	  width: 1em;
	  height: 1em;
	  margin-right: 0.5em;
	}
  
	path {
	  stroke-width: 2px;
	  stroke: currentColor;
	}
  </style>
  