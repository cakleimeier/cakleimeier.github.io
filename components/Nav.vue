<template>
  <header id="nav" class="w-full bg-black fixed">
    <nav class="flex flex-wrap md:flex-nowrap justify-between items-center max-w-screen-xl mx-auto px-2 md:px-12 py-4 h-48 md:h-24">
        <div class="w-full md:w-5/12 bg-white md:rounded-full flex flex-wrap md:flex-nowrap items-center justify-center text-center">
            <img class="h-16 p-4 inline-block" src="~/assets/images/favicon.png" alt="Catherine Kleimeier">
            <a href="https://catherinekleimeier.com" class="font-bold text-teal font-display text-3xl tracking-wider">Catherine Kleimeier</a>
        </div>

        <div class="w-full md:w-7/12 flex items-center justify-around md:justify-end text-center">
            <a href="https://github.com/cakleimeier" target="_blank" class="font-bold text-bronze text-2xl font-display tracking-wider"> Github</a>
            <a href="https://www.linkedin.com/in/catherine-kleimeier/" target="_blank" class="font-bold text-bronze text-2xl font-display tracking-wider px-4"> LinkedIn</a> 
            <a href="mailto:catherine.kleimeier@gmail.com" class="font-bold text-bronze text-2xl font-display tracking-wider"> Contact Me</a>
        </div>

        <!-- Mobile Nav -->
        <div class="block md:hidden w-full">
            <ul class="nav-list w-full flex items-center justify-around text-center flex-wrap">
                <li><NuxtLink class="text-white" data-to="about" to="#about">About</NuxtLink></li>
                <li><NuxtLink class="text-white in-page-link" data-to="skills" to="#skills" target="_self">Skills</NuxtLink></li>
                <li><NuxtLink class="text-white in-page-link" data-to="experience" to="#experience" target="_self">Experience</NuxtLink></li>
                <li><NuxtLink class="text-white in-page-link" data-to="portfolio" to="#portfolio" target="_self">Portfolio</NuxtLink></li>
            </ul>
        </div>
    </nav>
  </header>
</template>

<script>
  export default {
    layout: 'nav',
    mounted() {
        let anchors = document.querySelectorAll('.in-page-link');
        let navHeight = document.getElementById('nav').offsetHeight;

        // Only 'in-page-links' are mobile nav links, which should account for the header height when scrolling
        anchors.forEach(function(link) {
            link.addEventListener('click', function(e) {
                e.preventDefault;
                // Get the id of the element to navigate to
                let target = document.getElementById(link.dataset['to']);
                let top = target.offsetTop;
                // Set the appropriate scroll position
                window.scrollTo(0, top - navHeight);
            });
        });
    }
  }
</script>