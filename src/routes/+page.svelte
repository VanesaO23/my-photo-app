<script>
	import welcome from '$lib/images/pexels-olly-2.jpg';
	import welcome_fallback from '$lib/images/pexels-pixabay-276514.jpg';
</script>

<svelte:head>
	<title>Inicio</title>
	<meta name="description" content="Upload photos app" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/jpg" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>

		<br /> Bienvenido a tu espacio creativo.
	</h1>

	<h2>
		Sube y organiza tus fotos de una forma <strong>divertida</strong>
	</h2>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 50%; /* Ajusta el ancho como necesites */
		height: auto; /* Esto mantendrá la proporción de la imagen */
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		display: block;
		z-index: -1; /* Coloca la imagen detrás de otros elementos */
	}
</style>
