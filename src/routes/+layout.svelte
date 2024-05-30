<script>
	import Header from './Header.svelte';
	import './styles.css';

	//const sampleImages = [
	//	{
	//		url: 'https://images.pexels.com/photos/19168399/pexels-photo-19168399/free-photo-of-mar-blanco-y-negro-moda-playa.jpeg?auto=compress&cs=tinysrgb&w=400'
	//	},
	//	{
	//		url: 'https://images.pexels.com/photos/2076966/pexels-photo-2076966.jpeg?auto=compress&cs=tinysrgb&w=400'
	//	},
	//	{
	//		url: 'https://images.pexels.com/photos/6932086/pexels-photo-6932086.jpeg?auto=compress&cs=tinysrgb&w=400'
	//	},
	//	{
	//		url: 'https://images.pexels.com/photos/19290532/pexels-photo-19290532/free-photo-of-moda-gafas-de-sol-gente-mujer.jpeg?auto=compress&cs=tinysrgb&w=400'
	//	},
	//	{
	//		url: 'https://images.pexels.com/photos/19168405/pexels-photo-19168405/free-photo-of-mar-blanco-y-negro-puesta-de-sol-moda.jpeg?auto=compress&cs=tinysrgb&w=400'
	//	},
	//	{
	//		url: 'https://images.pexels.com/photos/17758900/pexels-photo-17758900/free-photo-of-moda-gente-mujer-oscuro.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
	//	},
	//	{
	//		url: 'https://images.pexels.com/photos/17839253/pexels-photo-17839253/free-photo-of-moda-gente-mujer-relajacion.jpeg?auto=compress&cs=tinysrgb&w=400'
	//	},
	//	{
	//		url: 'https://images.pexels.com/photos/17758817/pexels-photo-17758817/free-photo-of-moda-playa-gente-mujer.jpeg?auto=compress&cs=tinysrgb&w=400'
	//	},
	//	{
	//		url: 'https://images.pexels.com/photos/19290540/pexels-photo-19290540/free-photo-of-moda-gente-mujer-relajacion.jpeg?auto=compress&cs=tinysrgb&w=400'
	//	},
	//	{
	//		url: 'https://images.pexels.com/photos/18557754/pexels-photo-18557754/free-photo-of-moda-hombre-amor-gente.jpeg?auto=compress&cs=tinysrgb&w=400'
	//	},
	//	{
	//		url: 'https://images.pexels.com/photos/17747044/pexels-photo-17747044/free-photo-of-paisaje-moda-hombre-gafas-de-sol.jpeg?auto=compress&cs=tinysrgb&w=400'
	//	},
	//	{
	//		url: 'https://images.pexels.com/photos/17758670/pexels-photo-17758670/free-photo-of-moda-hombre-gente-mujer.jpeg?auto=compress&cs=tinysrgb&w=400'
	//	},
	//	{
	//		url: 'https://images.pexels.com/photos/17758720/pexels-photo-17758720/free-photo-of-moda-amor-gente-mujer.jpeg?auto=compress&cs=tinysrgb&w=400'
	//	},
	//	{
	//		url: 'https://images.pexels.com/photos/17765099/pexels-photo-17765099/free-photo-of-moda-hombre-gente-mujer.jpeg?auto=compress&cs=tinysrgb&w=400'
	//	},
	//	{
	//		url: 'https://images.pexels.com/photos/17771152/pexels-photo-17771152/free-photo-of-blanco-y-negro-moda-hombre-gafas-de-sol.jpeg?auto=compress&cs=tinysrgb&w=400'
	//	},
	//	{
	//		url: 'https://images.pexels.com/photos/17838930/pexels-photo-17838930/free-photo-of-ligero-moda-hombre-gente.jpeg?auto=compress&cs=tinysrgb&w=400'
	//	},
	//	{
	//		url: 'https://images.pexels.com/photos/17838918/pexels-photo-17838918/free-photo-of-moda-hombre-gente-mujer.jpeg?auto=compress&cs=tinysrgb&w=400'
	//	},
	//	{
	//		url: 'https://images.pexels.com/photos/18557760/pexels-photo-18557760/free-photo-of-paisaje-moda-hombre-persona.jpeg?auto=compress&cs=tinysrgb&w=400'
	//	}
	//];
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p>Click <a href="https://www.pexels.com/es-es/">aquí </a> para explorar nuevas fotos</p>
		<p>
			Contactanos - <a href="https://www.App@fotoVann.com">App@fotoVann.com</a>
		</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
