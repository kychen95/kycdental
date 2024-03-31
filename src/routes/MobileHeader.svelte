<script>
    import { fly, scale } from 'svelte/transition';
    import { quadOut } from 'svelte/easing';
	import { Hamburger } from 'svelte-hamburgers';
	import {base} from '$app/paths';

	let open = false;
</script>

<header>
	<Hamburger bind:open />
	{#if open}
	<div class="overlay">
		<a class="mobile-menu-text" href="{base}/#HOME"transition:fly={{ y: -15, delay: 50 * 0 }} on:click={() => (open = !open)}>
			HOME
		</a>
		<a class="mobile-menu-text" href="{base}/#EXPERIENCE"transition:fly={{ y: -15, delay: 50 * 1 }} on:click={() => (open = !open)}>
			EXPERIENCE
		</a>
		<a class="mobile-menu-text" href="{base}/#EDUCATION"transition:fly={{ y: -15, delay: 50 * 2 }} on:click={() => (open = !open)}>
			EDUCATION
		</a>
		<a class="mobile-menu-text" href="{base}/portfolio"transition:fly={{ y: -15, delay: 50 * 3 }} on:click={() => (open = !open)}>
			PORTFOLIO
		</a>
		<a class="mobile-menu-text" href="{base}/about"transition:fly={{ y: -15, delay: 50 * 4 }} on:click={() => (open = !open)}>
			ABOUT ME
		</a>
	</div>

	<hr transition:scale={{ duration: 750, easing: quadOut, opacity: 1 }} />
	{/if}
</header>

<style>
	header {
		position: fixed;
		--background: rgba(255, 255, 255, 1);
		background: var(--background);
		z-index: 999;
		width: 100%;
	}

    div {
        text-align: center;
        color: var(--color-theme-1);
    }

	.overlay {
		width: 100%;
		height: 100vh;
	}

    a {
		display: block;
        width: max-content;
        margin: 1rem auto;
    }
	.mobile-menu-text {
		font-size: 4vw;
    	font-family:"Avenir-LT-W01_35-Light1475496";
		padding-top: 0.5em;
		padding-bottom: 0.5em;
		letter-spacing: 0.15em;
	}
</style>
