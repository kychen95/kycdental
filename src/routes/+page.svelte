<script>
	import headshot from '$lib/images/headshot.webp'
	import MediaQuery from 'svelte-media-queries';
	import logo from '$lib/images/logo.webp';
	import insta from '$lib/images/insta-logo.webp';
	import linkedin from '$lib/images/linkedin-logo.webp';
	import skillsbg from '$lib/images/skills_background.png';
	import mobileskillsbg from '$lib/images/skills_background.png';
    import { scale } from 'svelte/transition';
    import { quadOut } from 'svelte/easing';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Kevin's website" />
</svelte:head>

<section>
	<MediaQuery query="(min-width: 1000px)" let:matches>
		{#if matches}
		<div class="profile-banner">
			<div class="profile">
				<img class="headshot scaleFromCenter" src={headshot} alt="headshot" />
				<div class="profile-info">
					<div class="profile-text">
						<h3 class="slideFromLeft desktop-h3">Dr. Kevin Chen</h3>
						<h4 class="slideFromRight desktop-h4">Prosthodontic Resident - PGY1</h4>
						<h4 class="slideFromLeft desktop-h4">Education:</h4>
						<p class="slideFromRight profile-p">
						UCSF/SFVA - Prosthodontic Residency
						<br>
						Maurice H. Kornberg School of Dentistry - DMD
						</p>
						<h4 class="slideFromLeft desktop-h4">Email:</h4>
						<p class="slideFromRight profile-p">kychen95@gmail.com</p>
						<h4 class="slideFromLeft desktop-h4">Location:</h4>
						<p class="slideFromRight profile-p">San Francisco, CA</p>
					</div>
					<div class="resumecv slideFromLeft">
						<a class="rbutton .profile-p" href="https://kycdental.com/resume.pdf">
						Resume
						</a>
						<!-- <a class="rbutton .profile-p" href="https://kycdental.com/cv.pdf">
						Full CV
						</a> -->
					</div>
				</div>
			</div>
		</div>
		<div class="socials-banner">
			<div class="socials">
				<a class="social-button" href="https://www.instagram.com/kevinchendmd">
					<img src={insta} alt="kycdental" />
				</a>
				<a class="social-button" href="http://www.linkedin.com/in/kevinchendmd">
					<img src={linkedin} alt="kycdental" />
				</a>
			</div>
		</div>
		<div class="intro-banner">
				<div class="intro">
					<h1 class="scaleFromCenter desktop-h1">Hello, I'm Kevin!</h1>
					<p class="scaleFromCenter text-p">
						Welcome to my E-Portfolio! Take some time to explore the projects I am working on. This site is constantly being updated so it is still a work in a progress. Feel free to contact me with any inquiries or questions.
					</p>
				</div>
		</div>
		<div id="EXPERIENCE" class="experience-banner">
			<div class="experience">
				<h1 class="fadeIn desktop-h1">EXPERIENCE</h1>
				<div class="experience-details">
					<div class="exp-detail-item">
						<div class="exp-time slideFromLeft">
							<h4 class="exp-h4">
							07/2022 - 06/2023	
							</h4>
							<p class="exp-p">
							Dr. Aaron Segal, DDS, FACP	
							</p>
						</div>
						<div class="exp-detail slideFromRight">
							<h4 class="exp-h4">
							Full-time Dental Instructor/Clinician at Temple Dental
							</h4>
							<ul class="exp-list">
								<li>
									Comprehensive clinical care dentist in Faculty Practice
								</li>
								<li>
									Comprehensive care dentist at Kleinlife, a satellite community clinic for elderly Holocaust survivors
								</li>
								<li>
									Row instructor for clinical students and pre-clinical students
								</li>
								<li>
									Expanding and integrating digital dentistry into clinical and pre-clinical settings
								</li>
							</ul>
						</div>
					</div>
					<hr class="exp-hr" transition:scale={{ duration: 750, easing: quadOut, opacity: 1 }} />
					<div class="exp-detail-item">
						<div class="exp-time slideFromLeft">
							<h4 class="exp-h4">
							07/2022 - 06/2023	
							</h4>
							<p class="exp-p">
							Lauren Eveland, RDH, MHA
							</p>
						</div>
						<div class="exp-detail slideFromRight">
							<h4 class="exp-h4">
							Part-Time Dental Associate at Simply Beautiful Smiles
							</h4>
							<ul class="exp-list">
								<li>
									Work on Saturdays doing comprehensive care dentistry
								</li>
							</ul>
						</div>
					</div>
					<hr class="exp-hr" transition:scale={{ duration: 750, easing: quadOut, opacity: 1 }} />
					<div class="exp-detail-item">
						<div class="exp-time slideFromLeft">
							<h4 class="exp-h4">
							06/2022 - 06/2022	
							</h4>
							<p class="exp-p">
							Weill Cornell Medicine	
							</p>
						</div>
						<div class="exp-detail slideFromRight">
							<h4 class="exp-h4">
							Human Performance Hackathon
							</h4>
							<ul class="exp-list">
								<li>
									Worked with team of 6 to design and prototype an application software for dental flossing and other habits using behavioral science concepts
								</li>
								<li>
									Conceptualized scalability and expansion of market size for prototyped product
								</li>
								<li>
									Won 1st place and "Most Scalable Design" Award
								</li>
							</ul>
						</div>
					</div>
					<hr class="exp-hr" transition:scale={{ duration: 750, easing: quadOut, opacity: 1 }} />
					<div class="exp-detail-item">
						<div class="exp-time slideFromLeft">
							<h4 class="exp-h4">
							02/2022 - 05/2022	
							</h4>
							<p class="exp-p">
							Dr. Mohammed Elsafi  DDS, MS, FACP, FAAMP	
							</p>
						</div>
						<div class="exp-detail slideFromRight">
							<h4 class="exp-h4">
							Maxillofacial Prosthodontist Lab Assistant
							</h4>
							<ul class="exp-list">
								<li>
									Waxed up facial prostheses for maxillofacial patients
								</li>
								<li>
									Set teeth for removable dentures for patients that required obturators
								</li>
								<li>
									Assisted with integration of digital dentistry with maxillofacial prostheses using 3Shape
								</li>
							</ul>
						</div>
					</div>
					<hr class="exp-hr" transition:scale={{ duration: 750, easing: quadOut, opacity: 1 }} />
					<div class="exp-detail-item">
						<div class="exp-time slideFromLeft">
							<h4 class="exp-h4">
							01/2022 - 05/2022	
							</h4>
							<p class="exp-p">
							Dr. Geraldine Weinstein  DMD, MPH	
							</p>
						</div>
						<div class="exp-detail slideFromRight">
							<h4 class="exp-h4">
							Digital Technician Intern for KSoD and GDCL
							</h4>
							<ul class="exp-list">
								<li>
									Learned 3Shape TRIOS design studio with clinical integration of smile design
								</li>
								<li>
									Digitally designed, milled and glazed monolithic zirconia crowns using 3Shape
								</li>
								<li>
									Scanned and 3D printed analog models for digital integration of case workflow
								</li>
								<li>
									Learned, used, and taught Cerec Primescan, 3Shape, Medit intraoral scanners
								</li>
							</ul>
						</div>
					</div>
					<hr class="exp-hr" transition:scale={{ duration: 750, easing: quadOut, opacity: 1 }} />
					<div class="exp-detail-item">
						<div class="exp-time slideFromLeft">
							<h4 class="exp-h4">
							04/2021 - 04/2022	
							</h4>
							<p class="exp-p">
							Dr. Joseph Breitman  DMD, MS, FACP
							</p>
						</div>
						<div class="exp-detail slideFromRight">
							<h4 class="exp-h4">
							Lab Assistant at Prosthodontics Limited PC
							</h4>
							<ul class="exp-list">
								<li>
									Assisted prosthodontic treatment procedures
								</li>
								<li>
									Fabricating record bases, occlusal rims, and setting teeth for removable dentures
								</li>
								<li>
									Observed porcelain stacking, e.max press, and digital integration of lab work with exocad
								</li>
							</ul>
						</div>
					</div>
					<hr class="exp-hr" transition:scale={{ duration: 750, easing: quadOut, opacity: 1 }} />
					<div class="exp-detail-item">
						<div class="exp-time slideFromLeft">
							<h4 class="exp-h4">
							09/2019 - 04/2022	
							</h4>
							<p class="exp-p">
							Maurice H. Kornberg School of Dentistry	
							</p>
						</div>
						<div class="exp-detail slideFromRight">
							<h4 class="exp-h4">
							Academic Affairs Pre-Clinical Tutor for KSoD
							</h4>
							<ul class="exp-list">
								<li>
									After-hours preclinic tutoring for D1/D2 students covering Restorative I to Restorative IV
								</li>
								<li>
									Helped students with wax-ups, direct/indirect restorations, crown and bridge, dentures
								</li>
							</ul>
						</div>
					</div>
					<hr class="exp-hr" transition:scale={{ duration: 750, easing: quadOut, opacity: 1 }} />
					<div class="exp-detail-item">
						<div class="exp-time slideFromLeft">
							<h4 class="exp-h4">
							12/2021 - 12/2021
							</h4>
							<p class="exp-p">
							Greater New York Academy of Prosthodontics
							</p>
						</div>
						<div class="exp-detail slideFromRight">
							<h4 class="exp-h4">
							67th Annual Scientific Session of GNYAP
							</h4>
							<ul class="exp-list">
								<li>
									Attended two-day session of CE courses presented by leading practitioners on the art and science of modern prosthodontics and regenerative therapy
								</li>
								<li>
									Spoke with program directors, faculties, residents and attended poster exhibit
								</li>
							</ul>
						</div>
					</div>
					<hr class="exp-hr" transition:scale={{ duration: 750, easing: quadOut, opacity: 1 }} />
					<div class="exp-detail-item">
						<div class="exp-time slideFromLeft">
							<h4 class="exp-h4">
							10/2021 - 10/2021
							</h4>
							<p class="exp-p">
							UNC Chapel Hill School of Dentistry 
							</p>
						</div>
						<div class="exp-detail slideFromRight">
							<h4 class="exp-h4">
							UNC Chapel Hill Prosthodontic Externship
							</h4>
							<ul class="exp-list">
								<li>									
									Observed and assisted residents with prosthodontic procedures
								</li>
								<li>
									Attended prosthodontic and periodontic lectures with first year residents on dental materials and implant osseointegration
								</li>
							</ul>
						</div>
					</div>
				</div>
				<a class="rbutton exp-button profile-p fadeIn" href="https://kycdental.com/cv.pdf">Download Full CV</a>
			</div>
		</div>
		<div id="EDUCATION" class="education-banner">
			<div class="education">
				<h1 class="fadeIn desktop-h1">EDUCATION</h1>
				<div class="education-item">
					<div class="education-item-ed slideFromLeft">
						<h4 class="desktop-h4">07/2023 - 06/2026</h4>
						<p class="exp-p">Prosthodontic Certificate</p>
					</div>
					<div class="education-item-inst slideFromRight">
						<h4 class="desktop-h4">
						University of California, San Francisco
						</h4>
						<h4 class="desktop-h4">
						San Francisco Veterans Affair Medical Center
						</h4>
					</div>
				</div>
				<hr class="exp-hr" transition:scale={{ duration: 750, easing: quadOut, opacity: 1 }} />
				<div class="education-item">
					<div class="education-item-ed slideFromLeft">
						<h4 class="desktop-h4">08/2018 - 05/2022</h4>
						<p class="exp-p">Doctorate's Degree - DMD</p>
					</div>
					<div class="education-item-inst slideFromRight">
						<h4 class="desktop-h4">
							Maurice H. Kornberg School of Dentistry
						</h4>
						<p class="exp-p">
							Honors: Cum Laude
						</p>
					</div>
				</div>
				<hr class="exp-hr" transition:scale={{ duration: 750, easing: quadOut, opacity: 1 }} />
				<div class="education-item">
					<div class="education-item-ed slideFromLeft">
						<h4 class="desktop-h4">05/2017 - 05/2018</h4>
						<p class="exp-p">Post-Baccalaureate Certificate</p>
					</div>
					<div class="education-item-inst slideFromRight">
						<h4 class="desktop-h4">
							Maurice H. Kornberg School of Dentistry
						</h4>
					</div>
				</div>
				<hr class="exp-hr" transition:scale={{ duration: 750, easing: quadOut, opacity: 1 }} />
				<div class="education-item">
					<div class="education-item-ed slideFromLeft">
						<h4 class="desktop-h4">08/2013 - 05/2017</h4>
						<p class="exp-p">Bachelor's Degree</p>
					</div>
					<div class="education-item-inst slideFromRight">
						<h4 class="desktop-h4">
							University of North Carolina Chapel Hill
						</h4>
						<p class="exp-p">
							BA Chemistry and Asian Studies
						</p>
					</div>
				</div>
			</div>
		</div>
		<div id="SKILLS" class="skills-banner">
			<h1 class="fadeIn desktop-h1">SKILLS</h1>
			<div class="skills-bg" style="background-image: url({skillsbg});
												background-attachment: fixed;
												background-position: center;
												background-repeat: no-repeat;
												background-size: cover;">
				<div class="skills">
					<div class="skills-box">
						<div class="skills-col">
							<div class="skills-item wipeFromLeft">
								<h4 class="skills-text">
									Digital Dentistry
								</h4>
							</div>
							<div class="skills-item wipeFromLeft">
								<h4 class="skills-text">
									Computer Construction
								</h4>
							</div>
							<div class="skills-item wipeFromLeft">
								<h4 class="skills-text">
									English
								</h4>
							</div>
						</div>
						<div class="skills-col">
							<div class="skills-item wipeFromLeft">
								<h4 class="skills-text">
									Dental Photography
								</h4>
							</div>
							<div class="skills-item wipeFromLeft">
								<h4 class="skills-text">
									Marketing and Design
								</h4>
							</div>
							<div class="skills-item wipeFromLeft">
								<h4 class="skills-text">
									Mandarin Chinese
								</h4>
							</div>
						</div>
					</div>
				</div>
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
			<div id="HOME" class="logo-mobile">
				<img src={logo} alt="kycdental" />
			</div>
			<div class="mobile-profile-banner">
				<span class="mobile-profile">
					<img class="mobile-headshot scaleFromCenter" src={headshot} alt="headshot" />
					<div class="mobile-profile-text">
						<h3 class="slideFromLeft mobile-h3">Dr. Kevin Chen</h3>
						<h4 class="slideFromRight mobile-h4">Prosthodontic Resident - PGY1</h4>
						<h4 class="slideFromLeft mobile-h4">Education:</h4>
						<p class="slideFromRight">
						UCSF/SFVA - Prosthodontic Residency
						<br>
						Maurice H. Kornberg School of Dentistry - DMD
						</p>
						<h4 class="slideFromLeft mobile-h4">Email:</h4>
						<p class="slideFromRight">kychen95@gmail.com</p>
						<h4 class="slideFromLeft mobile-h4">Location:</h4>
						<p class="slideFromRight">San Francisco, CA</p>
						<div class="mobile-resumecv slideFromLeft">
							<a class="mobile-rbutton" href="https://kycdental.com/resume.pdf">
							Resume
							</a>
							<!-- <a class="mobile-rbutton" href="https://kycdental.com/cv.pdf">
							Full CV
							</a> -->
						</div>
					</div>
					<div class="mobile-socials">
						<a class="mobile-social-button" href="https://www.instagram.com/kevinchendmd">
							<img src={insta} alt="kycdental" />
						</a>
						<a class="mobile-social-button" href="http://www.linkedin.com/in/kevinchendmd">
							<img src={linkedin} alt="kycdental" />
						</a>
					</div>
				</span>
			</div>
			<div class="mobile-intro-banner">
					<div class="mobile-intro">
						<h1 class="scaleFromCenter mobile-h1">Hello, I'm Kevin!</h1>
						<p class="scaleFromCenter">
							Welcome to my E-Portfolio! Take some time to explore the projects I am working on. This site is constantly being updated so it is still a work in a progress. Feel free to contact me with any inquiries or questions.
						</p>
					</div>
			</div>
			<div id="EXPERIENCE" class="mobile-experience-banner">
				<div class="mobile-experience">
					<h1 class="fadeIn mobile-h1">EXPERIENCE</h1>
					<a class="mobile-rbutton scaleFromCenter" href="https://kycdental.com/cv.pdf">
						Download Full CV
					</a>
				</div>
			</div>
			<div id="EDUCATION" class="mobile-education-banner">
				<div class="mobile-education">
					<h1 class="fadeIn">EDUCATION</h1>
					<div class="mobile-education-item">
						<div class="mobile-education-item-ed slideFromRight">
							<h4 class="mobile-h4">07/2023 - 06/2026</h4>
							<p>Prosthodontic Certificate</p>
						</div>
						<div class="mobile-education-item-inst slideFromLeft">
							<h4 class="mobile-h4">
							University of California, San Francisco
							<br>
							San Francisco Veterans Affair Medical Center
							</h4>
						</div>
					</div>
					<hr transition:scale={{ duration: 750, easing: quadOut, opacity: 1 }} />
					<div class="mobile-education-item">
						<div class="mobile-education-item-ed slideFromRight">
							<h4 class="mobile-h4">08/2018 - 05/2022</h4>
							<p>Doctorate's Degree - DMD</p>
						</div>
						<div class="mobile-education-item-inst slideFromLeft">
							<h4 class="mobile-h4">
								Maurice H. Kornberg School of Dentistry
							</h4>
							<p>
								Honors: Cum Laude
							</p>
						</div>
					</div>
					<hr transition:scale={{ duration: 750, easing: quadOut, opacity: 1 }} />
					<div class="mobile-education-item">
						<div class="mobile-education-item-ed slideFromRight">
							<h4 class="mobile-h4">05/2017 - 05/2018</h4>
							<p>Post-Baccalaureate Certificate</p>
						</div>
						<div class="mobile-education-item-inst slideFromLeft">
							<h4 class="mobile-h4">
								Maurice H. Kornberg School of Dentistry
							</h4>
						</div>
					</div>
					<hr transition:scale={{ duration: 750, easing: quadOut, opacity: 1 }} />
					<div class="mobile-education-item">
						<div class="mobile-education-item-ed slideFromRight">
							<h4 class="mobile-h4">08/2013 - 05/2017</h4>
							<p>Bachelor's Degree</p>
						</div>
						<div class="mobile-education-item-inst slideFromLeft">
							<h4 class="mobile-h4">
								University of North Carolina Chapel Hill
							</h4>
							<p>
								BA Chemistry and Asian Studies
							</p>
						</div>
					</div>
					<hr transition:scale={{ duration: 750, easing: quadOut, opacity: 1 }} />
				</div>
			</div>
			<div id="SKILLS" class="mobile-skills-banner">
				<h1 class="fadeIn mobile-h1">SKILLS</h1>
				<div class="mobile-skills-bg" style="background-image: url({mobileskillsbg});
													background-attachment: fixed;
													background-position: center;
													background-repeat: no-repeat;
													background-size: cover;">
					<div class="mobile-skills">
						<div class="mobile-skills-item wipeFromLeft">
							<h4 class="mobile-skills-text mobile-h4">
								Digital Dentistry
							</h4>
						</div>
						<div class="mobile-skills-item wipeFromLeft">
							<h4 class="mobile-skills-text mobile-h4">
								Computer Construction
							</h4>
						</div>
						<div class="mobile-skills-item wipeFromLeft">
							<h4 class="mobile-skills-text mobile-h4">
								Dental Photography
							</h4>
						</div>
						<div class="mobile-skills-item wipeFromLeft">
							<h4 class="mobile-skills-text mobile-h4">
								Marketing and Design
							</h4>
						</div>
						<div class="mobile-skills-item wipeFromLeft">
							<h4 class="mobile-skills-text mobile-h4">
								English
							</h4>
						</div>
						<div class="mobile-skills-item wipeFromLeft">
							<h4 class="mobile-skills-text mobile-h4">
								Mandarin Chinese
							</h4>
						</div>
					</div>
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
	.profile-banner {
		display: block;
		background-color: var(--color-theme-1);
		align-items: center;
		justify-content: center;
		width: 100%;}
	.profile {
		display: flex;
		width: 950px;
		justify-content: center;
		padding: 0;
		margin-left: auto;
		margin-right: auto;
		margin-top: 7em;}
	.headshot {
		display: block;
		position: relative;
		max-height: 530px;
		max-width: 470px;
		width: auto;
		height: auto;
		top: 0;}
	.profile-info{
		display: block;
		width: 100%;
		padding-left: 5em;
		padding-right: 5em;
		background-color: #F0F0F4;
		max-height: 530px;
		text-align: left;}
	.profile-text {
		display: flex;
		flex-direction: column;
		margin-top: auto;
		margin-bottom: auto;
		padding-top: 4em;
		color:var(--color-theme-1)}
	.profile-p{
		font-size: 1em;
		margin-top: 0em;
		font-family: "DIN-Next-W01-Light";}
	.rbutton {
		border: 2px solid #2F2E2E;
		color: #2F2E2E;
		background: white;
		border-radius: 50px;
		margin-left: 1em;
		margin-right: 1em;
		padding-top: 0.5em;
		padding-bottom: 0.5em;
		padding-left: 1.25em;
		padding-right: 1.25em;}
	.resumecv {
		display: flex;
		position: relative;
		justify-content: center;
		margin: 0.5vb;}
	.socials-banner {
		display: flex;
		background-color: var(--color-bg-2);
		align-items: center;
		justify-content: center;
		width: 100%;}
	.socials {
		display: flex;
		align-items: center;
		justify-content: center;
		padding-top: 2em;
		padding-bottom: 2em;
		width: 950px;
		height: 100%;
		background-color: var(--color-theme-1);}
	.social-button {
		padding-left: 0.5em;
		padding-right: 0.5em;}
	.intro-banner {
		display: block;
		background-color: var(--color-bg-2);
		align-items: center;
		justify-content: center;
		width: 100%;}
	.intro {
		display: flex;
		flex-direction: column;
		margin-left: auto;
		margin-right: auto;
		padding-top: 4em;
		padding-bottom: 4em;
		text-align: center;
		width: 700px;}
	.experience-banner {
		display: flex;
		flex-direction: column;
		background-color: white;
		align-items: center;
		justify-content: center;
		width: 100%;}
	.experience {
		color: var(--color-theme-1);
		width: 65%;
		display: flex;
		flex-direction: column;
		padding-top: 3em;
		padding-bottom: 3em;}
	.experience-details {
		margin-top: 2em;
		display: inline-block;
		width: 100%;}
	.exp-detail-item {
		display: flex;
		flex-direction: row;
		width: 100%;}
	.exp-time {
		text-align: right;
		letter-spacing: 0.2em;
		width: 50%;
		padding: 0 3em;}
	.exp-detail {
		text-align: left;
		width: 50%;
		padding: 0 3em;}
	.exp-list {
		padding-left: 1em;
		margin-top: 0.5em;
		font-size: 0.85em;
    	font-family:"Avenir-LT-W01_35-Light1475496";}
	.exp-h4 {
		font-size: 0.95em;
    	font-family:"Avenir-LT-W01_85-Heavy1475544";
		margin-bottom: 0em;}
	.exp-p {
		margin-top: 0.5em;
		font-size: 1em;
    	font-family:"Avenir-LT-W01_35-Light1475496";}
	.exp-hr {
		width: 100%;
		opacity: 0.3;}
	.exp-button{
		font-size: 1.25em;
		display: flex;
		margin: auto;
		width: 8em;
		text-align: center;
		justify-content: center;
		margin-top: 3em;}
	.education-banner {
		display: flex;
		flex-direction: column;
		background-color: white;
		align-items: center;
		justify-content: center;
		width: 100%;}
	.education {
		color: var(--color-theme-1);
		width: 65%;
		display: flex;
		flex-direction: column;
		padding-top: 3em;
		padding-bottom: 3em;}
	.education-item {
		display: flex;
		flex-direction: row;
		margin-top: 2em;
		width: 100%;}
	.education-item-ed {
		text-align: right;
		letter-spacing: 0.2em;
		width: 50%;
		padding: 0 3em;}
	.education-item-inst {
		text-align: left;
		width: 50%;
		padding: 0 3em;}
	.skills-banner {
		display: flex;
		width: 100%;
		background-color: var(--color-theme-1);
		display: inline-block;
		margin-left: auto;
		margin-right: auto;
		color: #F0F0F4;
		letter-spacing: 0.2em;
		text-align: center;}
	.skills{
		display: flex;
		justify-content: center;
		background-color: var(--color-theme-1b);}
	.skills-box {
		display: flex;
		align-items: stretch;
		width: 50%;
		padding-top: 0.5em;
		padding-bottom: 0.5em;}
	.skills-col {
		display: flex;
		flex: 1;
		margin-top: 1em;
		margin-bottom: 1em;
		margin-left: 2.5em;
		margin-right: 2.5em;
		flex-direction: column;}
	.skills-item {
		width: 95%;
		margin-left: auto;
		margin-right: auto;
		padding-top: 1.75em;
		padding-bottom: 1.75em;
		margin-top: 1em;
		margin-bottom: 1em;
		background-color: var(--color-theme-3b);}
	.skills-text {
		font-size: 0.8em;
    	font-family:"Avenir-LT-W01_35-Light1475496";;
		margin: auto;}
	.footer {
		display: flex;
		justify-content: center;}
	.footer-text {
		margin: 1em;}

	/* mobile */
	.logo-mobile {
		display: block;
		margin-left: auto;
		margin-right: auto;
		align-items: center;
		margin-top: 4.5em;
		background: var(--background);
		background-size: contain;}
	.mobile-profile-banner {
		display: flex;
		background-color: var(--color-theme-1);}
	.mobile-profile {
		display: inline-block;
		margin-left: auto;
		margin-right: auto;
		margin-top: 2em;
		margin-bottom: 1em;
		max-width: 85%;
		text-align: center;}
	.mobile-headshot {
		display: block;
		margin-left: auto;
		margin-right: auto;
		max-width: 100%;}
	.mobile-profile-text {
		padding-top: 2em;
		padding-bottom: 2em;
		padding-left: 3em;
		padding-right: 3em;
		display: block;
		margin-left: auto;
		margin-right: auto;
		text-align: left;
		background-color: #F0F0F4;
		max-width: 100%;
    	font-family:"Avenir-LT-W01_35-Light1475496";}
	.mobile-resumecv {
		display: block;
		margin-top: 2em;}
	.mobile-rbutton {
    	font-family:"Avenir-LT-W01_35-Light1475496";
		font-size: large;
		color: black;
		display: block;
		margin-left: auto;
		margin-right: auto;
		margin-top: 0.5em;
		margin-bottom: 0.5em;
		max-width: 50%;
		/* transition: all 0.2s ease, visibility 0s; */
		border: 2px solid #2F2E2E;
		background: white;
		border-radius: 50px;
		text-align: center;
		padding: 3%}
	.mobile-socials {
		padding-top: 1em;
		display: inline-block;
		width: auto;}
	.mobile-social-button {
		margin-left: 0.5em;
		margin-right: 0.5em;}
	.mobile-intro-banner {
		display: flex;
		background-color: var(--color-bg-2);}
	.mobile-intro {
		display: inline-block;
		margin-left: 2em;
		margin-right: 2em;
		text-align: center;
		color: var(--color-theme-1);}
	.mobile-experience-banner {
		background-color: white;
		color: var(--color-theme-1);
		padding-bottom: 2em;
		margin-top: 1em;
		margin-bottom: 1em;
		letter-spacing: 0.2em;}
	.mobile-education-banner {
		background-color: white;
		display: flex;}
	.mobile-education {
		width: 85%;
		display: inline-block;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 2em;
		text-align: left;
		color: var(--color-theme-1);
		letter-spacing: 0.2em;}
	.mobile-education-item {
		margin: 2em;}
	.mobile-skills-banner {
		display: flex;
		width: 100%;
		background-color: var(--color-theme-1);
		display: inline-block;
		margin-left: auto;
		margin-right: auto;
		color: #F0F0F4;
		letter-spacing: 0.2em;
		text-align: center;}
	.mobile-skills {
		padding-top: 0.5em;
		padding-bottom: 0.5em;
		background-color: var(--color-theme-1a);}
	.mobile-skills-item {
		width: 95%;
		margin-left: auto;
		margin-right: auto;
		padding-top: 1em;
		padding-bottom: 1em;
		margin-top: 1em;
		margin-bottom: 1em;
		background-color: var(--color-theme-3a);}
	.mobile-skills-text {
		margin: auto;}
	.mobile-footer-banner {
		display: flex;
		background-color: white;}
	.mobile-footer {
		display: block;
		margin-left: auto;
		margin-right: auto;}
	.mobile-footer-text {
		margin: 1em;}

	/* elements */
	.mobile-h1 {
    	font-family:"Avenir-LT-W01_85-Heavy1475544";}
	.mobile-h3 {
		font-size: 7vw;
		margin-bottom: 0;
    	font-family:"Avenir-LT-W01_35-Light1475496";}
	.mobile-h4 {
		margin-bottom: 0;
    	font-family:"Avenir-LT-W01_85-Heavy1475544";}
	.desktop-h1 {
    	font-family:"Avenir-LT-W01_35-Light1475496";}
	.desktop-h3 {
		font-size: 1.75em;
		margin-top: 0.5em;
		margin-bottom: 0.5em;
    	font-family:"Avenir-LT-W01_35-Light1475496";}
	.desktop-h4 {
		font-size: 1.05em;
		margin-top: 0.5em;
		margin-bottom: 0em;
    	font-family:"Avenir-LT-W01_85-Heavy1475544";}
	.text-p {
		font-size: 1.35em;
    	font-family:"Avenir-LT-W01_35-Light1475496";}
	a {
		letter-spacing: normal;
		margin: 0;
		padding: 0;
    	font-family:"Avenir-LT-W01_35-Light1475496";}
	li {
		margin: 0.3em 0em;}
	
		/* animations */
	.slideFromLeft {
		animation: 1s ease-in 0s 1 slideFromLeft;}
	.slideFromRight {
		animation: 1s ease-in 0s 1 slideFromRight;}
	.scaleFromCenter {
		animation: 1s linear 0s 1 scaleFromCenter;}
	.wipeFromLeft {
		animation: 1s ease-in 0s 1 wipeFromLeft;}
	.fadeIn {
		animation: 1s linear 0s 1 fadeIn;}
	
	
</style>
