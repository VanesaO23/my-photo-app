<script>
    // Importa aquí cualquier componente adicional que necesites
    import Header from '../components/Header.svelte';
    import Footer from '../components/Footer.svelte';

    // Datos simulados de imágenes, reemplaza o adapta según tus necesidades
    let images = [
        { id: 1, src: 'src/routes/gallery/pexels-ekrulila-4244170', alt: 'Descripción de imagen 1' },
    ];
</script>

<Header />

<main>
    <h1>Galería de Fotos</h1>
    <div class="gallery">
        {#each images as image}
            <div class="photo">
                <img src={image.src} alt={image.alt} />
            </div>
        {/each}
    </div>
</main>

<!-- Opcional: un footer si tienes un componente de pie de página general -->
<Footer />

<style>
    .gallery {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px; /* Espacio entre imágenes */
    }
    .photo {
        width: 200px; /* Ancho de cada imagen de la galería */
        height: 200px; /* Altura de cada imagen de la galería */
        overflow: hidden; /* Esconde cualquier parte de la imagen que exceda las dimensiones del contenedor */
    }
    .photo img {
        width: 100%; /* Asegura que la imagen cubra completamente el contenedor */
        height: 100%; /* Asegura que la imagen cubra completamente el contenedor */
        object-fit: cover; /* Asegura que la imagen cubra el contenedor sin distorsionarse */
    }
</style>

