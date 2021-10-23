<template>
  <header id="nav" class="w-full bg-black fixed">
    <nav class="flex flex-wrap md:flex-nowrap justify-between items-center max-w-screen-xl mx-auto px-2 md:px-12 py-4 h-48 md:h-24">
        <div class="w-full md:w-5/12 bg-white md:rounded-full flex flex-wrap md:flex-nowrap items-center justify-center text-center">
            <img class="h-16 p-4 inline-block" src="~/assets/images/favicon.png" alt="Catherine Kleimeier">
            <a href="https://catherinekleimeier.com" class="font-bold text-teal font-display text-3xl tracking-wider">Catherine Kleimeier</a>
        </div>

        <div class="w-full md:w-7/12 flex items-center justify-around md:justify-end text-center">
            <a href="https://github.com/cakleimeier" target="_blank" class="font-bold text-bronze text-2xl font-display tracking-wider"> Github</a>
            <a href="https://www.linkedin.com/in/catherine-kleimeier/" target="_blank" class="font-bold text-bronze text-2xl font-display tracking-wider mx-2"> LinkedIn</a> 
            <a href="mailto:catherine.kleimeier@gmail.com" class="font-bold text-bronze text-2xl font-display tracking-wider"> Contact Me</a>
        </div>
    </nav>
  </header>
</template>

<script>
  export default {
    layout: 'nav'
  }
</script>