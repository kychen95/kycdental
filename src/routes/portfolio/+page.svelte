<script context="module">
	const images = import.meta.glob('/static/portfolio/*');
	const paths = Object.keys(images);
	
	let finalPaths = [];
	paths.forEach(path => {
		finalPaths.push(new URL(path.slice(7), import.meta.url));
	});
	const imgCols = splitToNChunks(finalPaths, 5);

	function splitToNChunks(array, n) {
		let result = [];
		for (let i = 0; i < array.length; i++) {
			if (typeof result[i%n] === 'undefined') {
				result.push([array[i]]);
			} else {
				result[i%n].push(array[i]);
			}
		}
		return result;
	}
</script>

<script lang="ts">
	import { browser } from '$app/environment';
	import MediaQuery from "svelte-media-queries";
	import logo from '$lib/images/logo.webp';
	import teethMobile from '$lib/images/teeth-mobile.webp';
	import teeth from '$lib/images/DSC07352.jpg';
	import insta from '$lib/images/insta-logo-color.webp';
	import { Lightbox } from 'svelte-lightbox';
</script>

<svelte:head>
	<title>Portfolio</title>
	<meta name="description" content="Kevin's Portfolio" />
</svelte:head>

<section>
	<MediaQuery query="(min-width: 1000px)" let:matches>
		{#if matches}
			<div class="portfolio-banner">
				<img class="teeth fadeIn" src={teeth} alt="teeth" />
				<div class="portfolio scaleFromCenter">
					<h1 class="portfolio-header slideFromRight">Portfolio</h1>
					<p class="portfolio-text slideFromLeft">
						Check out some of my projects I worked on below! Pictures of current projects will be uploaded as each step is completed. Feel free to contact me with any questions on anything you find interesting and follow me on Instagram to see live updates and what I am up to in dentistry!
					</p>
					<p class="portfolio-text slideFromLeft">
						Photography Setup:
						<br>
						Body - Sony a7 IV
						<br>
						Lens - Sony 90mm f2.8 Macro Lens
						<br>
						Flash - Godox MF12
						<br>
						Diffuser - Fixlite
					</p>
					<div class="socials">
						<a class="social-button portfolio-social fadeIn" href="https://www.instagram.com/kevinchendmd">
							<img src={insta} alt="kycdental" />
						</a>
					</div>
				</div>
			</div>
			<div class="portfolio-images">
				{#each imgCols as iCol}
					<div class="image-col">
						{#each iCol as image}
							<Lightbox>
								<img class="port-img fadeIn" src="{image}" alt="portfolio" />
							</Lightbox>
						{/each}
					</div>
				{/each}
			</div>
			<div class="footer-banner">
				<div class="footer">
					<p class="footer-text">
						© 2022 Designed by Kevin Y Chen
					</p>
				</div>
			</div>
		{:else}
			<div class="logo-mobile">
				<img src={logo} alt="kycdental" />
			</div>
			<img class="mobile-teeth fadeIn" src={teethMobile} alt="teeth" />
			<div class="mobile-portfolio-banner">
				<div class="mobile-portfolio">
					<h1 class="mobile-portfolio-header slideFromLeft">Portfolio</h1>
					<p class="mobile-portfolio-text slideFromLeft">
						Check out some of my projects I worked on below! Pictures of current projects will be uploaded as each step is completed. Feel free to contact me with any questions on anything you find interesting and follow me on Instagram to see live updates and what I am up to in dentistry!
					</p>
					<p class="mobile-portfolio-text slideFromLeft">
						Photography Setup:
						<br>
						Body - Sony a7 IV
						<br>
						Lens - Sony 90mm f2.8 Macro Lens
						<br>
						Flash - Godox MF12
						<br>
						Diffuser - Fixlite
					</p>
					<div class="mobile-socials">
						<a class="mobile-social-button fadeIn" href="https://www.instagram.com/kevinchendmd">
							<img src={insta} alt="kycdental" />
						</a>
					</div>
				</div>
			</div>
			<div class="mobile-portfolio-images">
				{#each finalPaths as image}
					<Lightbox>
						<img class="mobile-port-img fadeIn" src="{image}" alt="portfolio" />
					</Lightbox>
				{/each}
			</div>
			<div class="mobile-footer-banner">
				<div class="mobile-footer">
					<p class="mobile-footer-text">
						© 2022 Designed by Kevin Y Chen
					</p>
				</div>
			</div>
		{/if}
	</MediaQuery>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		width: 100%;
		background-color: var(--color-bg-2);}
	
	.portfolio-banner {
		display: flex;
		margin-left: auto;
		margin-right: auto;
		margin-top: 2.5em;
		margin-bottom: 2.5em;
		justify-content: center;
		max-height: 530px;
		overflow: hidden;
		height: 20vw;}
	.portfolio {
		display: flex;
		flex-direction: column;
		padding-left: 6vw;
		padding-right: 6vw;
		justify-content: center;
		align-items: center;
		width: 40vw;
		overflow: auto;
		background-color: white;}
	.portfolio-header {
		font-size: 1.75vw;
    	font-family:"Avenir-LT-W01_35-Light1475496";
		margin-bottom: 0.25em;
		color: var(--color-theme-1);}
	.portfolio-text {
		width: auto;
		text-align: left;
    	font-family:"Avenir-LT-W01_35-Light1475496";
		font-size: 0.8vw;
		margin-top: 0.3vw;
		margin-bottom: 0.3vw;
		color: var(--color-theme-1);}
	.portfolio-social {
		display: flex;
		height: 2.5vw;
		width: 2.5vw;}
	.teeth {
		display: flex;
		height: 100%;
		max-height: 530px;
		position: relative;}
	.portfolio-images {
		display: flex;
		flex-direction: row;
		margin-left: auto;
		margin-right: auto;
		width: 80%;}
	.image-col {
		margin-left: 0.25em;
		margin-right: 0.25em;}
	.port-img {
		margin-top: 0.25em;
		margin-bottom: 0.25em;}
	
	
	
	
	/* mobile */
	.logo-mobile {
		display: block;
		margin-left: auto;
		margin-right: auto;
		align-items: center;
		margin-top: 4.5em;
		background: var(--background);
		background-size: contain;}
	.mobile-portfolio-banner {
		width: 100%;
		display: flex;
		background-color: var(--color-bg-2);}
	.mobile-portfolio {
		width: 85%;
		display: inline-block;
		margin-left: auto;
		margin-right: auto;
		text-align: center;
		color: var(--color-theme-1);}
	.mobile-portfolio-header {
		font-size: 10vw;
    	font-family:"Avenir-LT-W01_85-Heavy1475544";
		text-align: left;}
	.mobile-portfolio-text {
		font-size: 5vw;
    	font-family:"Avenir-LT-W01_35-Light1475496";
		text-align: left;}
	.mobile-socials {
		padding-top: 1em;
		padding-bottom: 1em;
		display: inline-block;
		width: auto;}
	.mobile-social-button {
		margin-left: 0.5em;
		margin-right: 0.5em;}
	.mobile-portfolio-images {
		display: inline-block;
		padding: 2em;
		margin-left: auto;
		margin-right: auto;}
	.mobile-port-img {
		display: inline-block;
		margin-left: auto;
		margin-right: auto;
		width: 100%;}
	.mobile-footer-banner {
		display: flex;
		background-color: white;}
	.mobile-footer {
		display: block;
		margin-left: auto;
		margin-right: auto;}
	.mobile-footer-text {
		margin: 1em;}
		
	/* animations */
	.slideFromLeft {
		animation: 1s ease-in 0s 1 slideFromLeft;}
	.slideFromRight {
		animation: 1s ease-in 0s 1 slideFromRight;}
	.scaleFromCenter {
		animation: 1s linear 0s 1 scaleFromCenter;}
	.fadeIn {
		animation: 1s linear 0s 1 fadeIn;}
</style>
