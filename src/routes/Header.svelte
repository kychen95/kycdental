<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/logo.webp';

	let open = false;
</script>

<header>
	<div class="logo">
		<img src={logo} alt="kycdental" />
	</div>
	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/'}>
				<a href="/">HOME</a>
			</li>
			<li aria-current={$page.url.pathname === '/'}>
				<a href="/#EXPERIENCE">EXPERIENCE</a>
			</li>
			<li aria-current={$page.url.pathname === '/'}>
				<a href="/#EDUCATION">EDUCATION</a>
			</li>
			<li aria-current={$page.url.pathname === '/'}>
				<a href="/#SKILLS">SKILLS</a>
			</li>
			<li aria-current={$page.url.pathname === '/portfolio'}>
				<a href="/portfolio">PORTFOLIO</a>
			</li>
			<li aria-current={$page.url.pathname === '/about'}>
				<a href="/about">ABOUT ME</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		--background: rgba(255, 255, 255, 1);
		background: var(--background);
	}

	nav {
		display: flex;
		justify-content: right;
		padding-right: 5em;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 6.5em;
		display: flex;
		justify-content: right;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	a {
		display: flex;
		height: 100%;
		align-items: right;
		padding: 0 1rem;
		color: var(--color-text);
		font-weight: 400;
		font-size: 0.9rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
		font-family: 'Avenirs', sans-serif;
		align-items: center;
	}

	a:hover {
		color: var(--color-theme-1);
	}

	.logo {
		display: flex;
		align-items: center;
		padding-left: 25%;
		background: var(--background);
		background-size: contain;
	}
</style>
