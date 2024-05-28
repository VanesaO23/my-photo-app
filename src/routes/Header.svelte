<script>
	import { page } from '$app/stores';
</script>

<header>
	<div class="logo">App de fotos</div>
	<nav>
		<ul>
			<li class={$page.url.pathname === '/' ? 'active' : ''}><a href="/">Inicio</a></li>
			<li class={$page.url.pathname === '/upload' ? 'active' : ''}><a href="/upload">Añadir</a></li>
			<li class={$page.url.pathname === '/gallery' ? 'active' : ''}>
				<a href="/gallery">Galeria</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 2rem;
		background-color: #f3f4f6;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}
	.logo {
		font-size: 1.5rem;
		font-weight: bold;
	}
	nav ul {
		list-style: none;
		display: flex;
		gap: 1rem;
	}
	nav li {
		margin: 0;
	}
	nav a {
		text-decoration: none;
		color: #333;
		padding: 0.5rem 1rem;
		border-radius: 4px;
	}
	nav a:hover {
		background-color: #e3e4e6;
	}
	.active a {
		font-weight: bold;
		background-color: #e3e4e6;
	}
</style>
