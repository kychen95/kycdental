<script>
	import MediaQuery from "svelte-media-queries";
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/splide/dist/css/themes/splide-default.min.css';
	import logo from '$lib/images/logo.webp';
	import pic1 from '$lib/images/pic1.webp';
	import about1 from '$lib/images/about1.jpeg';
	import about2 from '$lib/images/about2.jpeg';
	import about3 from '$lib/images/about3.jpeg';
	import insta from '$lib/images/insta-logo-small.webp';
	import linkedin from '$lib/images/linkedin-logo-small.webp';
</script>

<svelte:head>
	<title>About Me</title>
	<meta name="description" content="About Kevin" />
</svelte:head>

<section>
	<MediaQuery query="(min-width: 1000px)" let:matches>
		{#if matches}
			<div class="memberships-banner">
				<img class="wideshot scaleFromCenter" src={pic1} alt="wideshot" />
				<div class="memberships">
					<h1 class="membership-header slideFromLeft">Current Memberships</h1>
					<p class="membership-text slideFromRight">
						American College of Prosthodontics (ACP)
					</p>
					<p class="membership-text slideFromLeft">
						American Academy of Maxillofacial Prosthetics (AAMP)
					</p>
					<div class="socials">
						<a class="social-button fadeIn" href="https://www.instagram.com/kevinchendmd">
							<img src={insta} alt="kycdental" />
						</a>
						<a class="social-button fadeIn" href="http://www.linkedin.com/in/kevinchendmd">
							<img src={linkedin} alt="kycdental" />
						</a>
					</div>
				</div>
			</div>
			<div class="welcome-banner">
				<div class="welcome">
					<div class="welcome-text-box">
						<h1 class="welcome-header slideFromLeft">Welcome!</h1>
						<p class="welcome-text slideFromRight">
							My name is Dr. Kevin Chen and I am currently a first year Prosthodontic Resident at the San Francisco Veterans Affairs Medical Center in conjunction with the University of California San Francisco (UCSF). I obtained a BA Chemistry and Asian Studies degree from UNC Chapel Hill in 2017 and obtained my Doctorate of Dental Medicine at Kornberg School of Dentistry at Temple University (KSoD) in 2022. Before going into residency, I practiced as a full-time clinical faculty at KSoD as well as worked in a community clinic and private practice.
						</p>
						<p class="welcome-text slideFromLeft">
							During my time at Temple Dental, I developed a strong interest in Prosthodontics and Digital Dentistry. Additionally, with my experience in technology, art, photography, and design, I hope to bridge these skills of mine to show the quality of work I can deliver to patients through this portfolio. I always strive to learn with a strong foundation while pushing the boundaries of dentistry through innovation and creativity. I hope you can follow me on this wonderful journey!
						</p>
						<p class="welcome-text slideFromRight">
							I like to hike, boulder, and play tennis on my free time. Traveling and eating new foods are activities that I enjoy outside of practicing dentistry. 
						</p>
					</div>
				</div>
			</div>
			<div class="pics-banner">
				<div class="pics fadeIn">
					<Splide options={ { 
						type: 'loop',
						rewind: true,
						fixedHeight: '480px',
						autoWidth: true,
						gap: '1rem',
						// padding: '2rem',
						} } aria-label="About Me Pictures">
						<SplideSlide>
							<img class="splide-pic" src={about1} alt="about1" />
						</SplideSlide>
						<SplideSlide>
							<img class="splide-pic" src={about2} alt="about2" />
						</SplideSlide>
						<SplideSlide>
							<img class="splide-pic" src={about3} alt="about3" />
						</SplideSlide>
					</Splide>
				</div>
			</div>
			<div class="footer-banner">
				<div class="footer">
					<p class="footer-text">
						© 2022 Designed by Kevin Y Chen
					</p>
				</div>
			</div>
		{:else}
			<div class="mobile-logo">
				<img src={logo} alt="kycdental" />
			</div>
			<div class="mobile-memberships-banner">
				<div class="mobile-memberships">
					<h1 class="mobile-portfolio-header slideFromLeft">Current Memberships</h1>
					<p class="mobile-portfolio-text slideFromRight">
						American College of Prosthodontics (ACP)
					</p>
					<p class="mobile-portfolio-text slideFromLeft">
						American Academy of Maxillofacial Prosthetics (AAMP)
					</p>
					<div class="mobile-socials">
						<a class="mobile-social-button fadeIn" href="https://www.instagram.com/kevinchendmd">
							<img src={insta} alt="kycdental" />
						</a>
						<a class="mobile-social-button fadeIn" href="http://www.linkedin.com/in/kevinchendmd">
							<img src={linkedin} alt="kycdental" />
						</a>
					</div>
				</div>
			</div>
			<img class="mobile-wideshot scaleFromCenter" src={pic1} alt="wideshot" />
			<div class="mobile-welcome-banner">
				<div class="mobile-welcome">
					<h1 class="mobile-portfolio-header fadeIn">Welcome!</h1>
					<p class="mobile-portfolio-text fadeIn">
						My name is Dr. Kevin Chen and I am currently a first year Prosthodontic Resident at the San Francisco Veterans Affairs Medical Center in conjunction with the University of California San Francisco (UCSF). I obtained a BA Chemistry and Asian Studies degree from UNC Chapel Hill in 2017 and obtained my Doctorate of Dental Medicine at Kornberg School of Dentistry at Temple University (KSoD) in 2022. Before going into residency, I practiced as a full-time clinical faculty at KSoD as well as worked in a community clinic and private practice.
					</p>
					<p class="mobile-portfolio-text fadeIn">
						During my time at Temple Dental, I developed a strong interest in Prosthodontics and Digital Dentistry. Additionally, with my experience in technology, art, photography, and design, I hope to bridge these skills of mine to show the quality of work I can deliver to patients through this portfolio. I always strive to learn with a strong foundation while pushing the boundaries of dentistry through innovation and creativity. I hope you can follow me on this wonderful journey!
					</p>
					<p class="mobile-portfolio-text fadeIn">
						I like to hike, boulder, and play tennis on my free time. Traveling and eating new foods are activities that I enjoy outside of practicing dentistry. 
					</p>
				</div>
			</div>
			<div class="mobile-pics-banner">
				<div class="mobile-pics fadeIn">
					<Splide options={ { 
						type: 'loop',
						rewind: true,
						width: '100%',
						height: '15rem',
						autoWidth: true,
						gap: '1rem',
						padding: '2rem',
						} } aria-label="About Me Pictures">
						<SplideSlide>
							<img class="mobile-splide-pic" src={about1} alt="about1" />
						</SplideSlide>
						<SplideSlide>
							<img class="mobile-splide-pic" src={about2} alt="about2" />
						</SplideSlide>
						<SplideSlide>
							<img class="mobile-splide-pic" src={about3} alt="about3" />
						</SplideSlide>
					</Splide>
				</div>
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
		background-color: var(--color-bg-2);}
	
	.memberships-banner {
		display: flex;
		margin-left: auto;
		margin-right: auto;
		margin-top: 2.5em;
		margin-bottom: 2.5em;
		justify-content: center;
		width: 90%;}
	.memberships {
		display: flex;
		flex-direction: column;
		padding-left: 8vw;
		padding-right: 8vw;
		width: 100%;
		justify-content: center;
		align-items: left;
		background-color: white;}
	.membership-header {
		padding-bottom: 1em;
    	font-family:"Avenir-LT-W01_85-Heavy1475544";
		color: var(--color-theme-1);}
	.membership-text {
		margin: 0;
    	font-family:"Avenir-LT-W01_35-Light1475496";
		color: var(--color-theme-1);}
	.socials {
		margin-top: 2em;
		margin-bottom: 3em;}
	.welcome-banner {
		display: flex;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 2em;
		justify-content: center;
		width: 90%;}
	.welcome {
		display: flex;
		flex-direction: column;
		margin-left: auto;
		margin-right: auto;
		align-items: center;
		width: 100%;
		padding-top: 1.5em;
		padding-bottom: 3em;
		background-color: white;}
	.welcome-text-box {
		width: 50%;}
	.welcome-header {
    	font-family:"Avenir-LT-W01_85-Heavy1475544";
		color: var(--color-theme-1);}
	.welcome-text {
		margin: 0;
		padding-top: 1em;
		padding-bottom: 1em;
		font-size: 1.1em;
    	font-family:"Avenir-LT-W01_35-Light1475496";
		color: var(--color-theme-1);}
	.pics-banner {
		display: block;
		margin-left: auto;
		margin-right: auto;
		width: 90%;
		height: 500px;
	}
	.pics {
		width: 100%;
		height: 500px;

	}
	.splide-pic {
		height: 480px;
	}
	.footer {
		display: flex;
		justify-content: center;}
	.footer-text {
		margin: 1em;}
	
	/* mobile */
	.mobile-logo {
		display: block;
		margin-left: auto;
		margin-right: auto;
		align-items: center;
		margin-top: 4.5em;
		background: var(--background);
		background-size: contain;}
	.mobile-wideshot {
		display: block;
		margin-left: auto;
		margin-right: auto;
		max-width: 100%;}
	.mobile-memberships-banner {
		display: flex;
		background-color: var(--color-bg-2);}
	.mobile-memberships {
		width: 85%;
		display: inline-block;
		margin-left: auto;
		margin-right: auto;
		text-align: center;
		color: var(--color-theme-1);}
	.mobile-portfolio-header {
		font-size: 8vw;
    	font-family:"Avenir-LT-W01_85-Heavy1475544";}
	.mobile-portfolio-text {
		font-size: 4vw;
    	font-family:"Avenir-LT-W01_35-Light1475496";}
	.mobile-socials {
		padding-top: 1em;
		padding-bottom: 1.5em;
		display: inline-block;
		width: auto;}
	.mobile-social-button {
		margin-left: 0.5em;
		margin-right: 0.5em;}
	.mobile-welcome-banner {
		display: flex;
		background-color: var(--color-bg-2);}
	.mobile-welcome {
		width: 85%;
		display: inline-block;
		margin-left: auto;
		margin-right: auto;
		text-align: center;
		color: var(--color-theme-1);}
	.mobile-pics-banner {
		display: block;
		background-color: var(--color-bg-0);
		padding-top: 1em;
		padding-bottom: 1em;}
	.mobile-splide-pic {
		height: 100%;
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