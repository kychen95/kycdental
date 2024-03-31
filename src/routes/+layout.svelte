<script>
	import MediaQuery from "svelte-media-queries";
	import Header from './Header.svelte';
	import MobileHeader from './MobileHeader.svelte';
	import './styles.css';
	import favicon from '$lib/images/favicon.png';
</script>

<svelte:head>
	<link rel="icon" type="image/svg" href={favicon}/>
</svelte:head>

<div class="app">
	<MediaQuery query="(min-width: 1000px)" let:matches>
		{#if matches}
			<Header />
			<main>
				<slot />
			</main>
		{:else}
			<MobileHeader />
			<main>
				<slot />
			</main>
		{/if}
	</MediaQuery>
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
		width: 100%;
		box-sizing: border-box;
	}
</style>
