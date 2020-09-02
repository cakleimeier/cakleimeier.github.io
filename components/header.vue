<template>
	<header class="column is-12">
		<nav class="navbar" role="navigation" aria-label="main navigation">
			<div class="navbar-brand">
				<a class="navbar-item" href="https://catherinekleimeier.com">
					<img src="~assets/images/logo.png" width="300" alt="Catherine Kleimeier logo">
				</a>

				<a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="menu">
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</a>
			</div>

			<div id="menu" class="navbar-menu">
				<div class="navbar-start">
					<a class="navbar-item is-size-4" href="#about">About</a>
					<a class="navbar-item is-size-4" href="#skills">Skills</a>
					<a class="navbar-item is-size-4" href="#experience">Experience</a>
				</div>

				<div class="navbar-end">
					<a class="navbar-item is-size-6" href="https://github.com/cakleimeier" target="_blank" rel="noindex nofollow"><font-awesome-icon class="fa-2x" :icon="['fab', 'github']"/> Github</a>
					<a class="navbar-item is-size-6" href="https://www.linkedin.com/in/catherine-kleimeier/" target="_blank" rel="noindex nofollow"><font-awesome-icon class="fa-2x" :icon="['fab', 'linkedin']"/> LinkedIn</a>
					<div class="buttons">
						<a class="button is-size-6 is-primary" href="mailto:catherine.kleimeier@gmail.com"><font-awesome-icon class="fa-2x" icon="envelope"/> Contact Me</a>
					</div>
				</div>
			</div>
		</nav>
	</header>
</template>

<script>
	export default {
		layout: 'header'
	}
</script>