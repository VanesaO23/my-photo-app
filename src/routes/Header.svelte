<script>
	import { page } from '$app/stores';
</script>

<header>
	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Inicio</a>
			</li>
			<li aria-current={$page.url.pathname === '/upload' ? 'page' : undefined}>
				<a href="/upload">Subir Fotos</a>
			</li>
			<li aria-current={$page.url.pathname === '/gallery' ? 'page' : undefined}>
				<a href="/gallery">Galería</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: center;
		padding: 1rem;
		background-color: #f3f4f6;
		box-shadow: 0 2px 4px rgba(0,0,0,0.1);
	}

	nav ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
	}

	nav li {
		margin: 0 10px;
	}

	nav a {
		color: #333;
		text-decoration: none;
		font-weight: bold;
		font-size: 16px;
		padding: 0.5em 1em;
	}

	nav a:hover {
		color: #007BFF;
		background-color: #e3e4e6;
		border-radius: 4px;
	}

	li[aria-current='page'] a {
		color: #007BFF;
		border-bottom: 2px solid #007BFF;
	}
</style>
