<template>
  <section id="portfolio" class="col-span-5">
    <article class="grid grid-cols-1">
        <div class="col-span-1">
            <h2 class="tracking-wider pb-4">Portfolio</h2>
            <p>While most of my development work has been done on private repositories to protect client privacy, I have many non-code materials that demonstrate my proficiency with technical and non-technical skills.</p>
            <ul>
                <portfolio-item v-for="item in items" :key="item.key" :content="{
                    href: item.href,
                    title: item.title,
                    category: item.category,
                    blurb: item.blurb
                }" />
            </ul>
        </div>
    </article>
  </section>
</template>

<script>
  export default {
    layout: 'portfolio',
    data() {
        return {
            items: [
                {
                    'key': 1,
                    'href': 'https://youtu.be/GBmtAryB-wU"',
                    'title': 'Organizing Assets in Craft CMS',
                    'category': 'Video',
                    'blurb': 'In this video, I cover some common Asset-related functionality in Craft CMS, including the creation and naming of subfolders, how to move, rename, and replace files, and more.'
                },
                {
                    'key': 2,
                    'href': 'https://www.gomasuga.com/blog/saved-filters-functionality-for-cp-filters-out-now',
                    'title': 'Saved Filters Functionality for CP Filters Out Now',
                    'category': 'Blog',
                    'blurb': 'In this brief blog post, I detail the new "Saved Filters" feature I added to Masuga Design\'s "CP Filters" custom Craft CMS plugin. I explain what the feature does and why the feature specifically, and the plugin more generally, are useful.'
                },
                {
                    'key': 3,
                    'href': 'https://www.gomasuga.com/blog/craft-cms-3-feature-tour',
                    'title': 'Craft CMS 3 Feature Tour',
                    'category': 'Blog',
                    'blurb': 'This extensive blog post serves as a guide to Craft CMS, intended for content editors. I methodically break down every feature of the Craft CMS Control Panel, using images, gifs, and short videos to display visual information. I also make and explain recommendations and offer “how-to”s while explaining the basic functionality of all native Craft CMS features.'
                },
                {
                    'key': 4,
                    'href': 'https://www.gomasuga.com/blog/mapbox-google-maps-alternative',
                    'title': 'Switching to Mapbox: the Less Expensive Google Maps Alternative',
                    'category': 'Blog',
                    'blurb': 'In this blog post, I offer a brief overview of Mapbox and its features, as well as covering why to switch from Google Maps to Mapbox.'
                },
                {
                    'key': 5,
                    'href': 'https://www.gomasuga.com/blog/converting-google-maps-to-mapbox',
                    'title': 'Converting Google Maps to Mapbox',
                    'category': 'Blog',
                    'blurb': 'This blog post is a short guide on how to switch from Google Maps to Mapbox. In it, I offer code samples and explanations, along with some light evangelizing about why I love Mapbox.'
                },
                {
                    'key': 6,
                    'href': 'https://www.gomasuga.com/blog/using-vue-js-with-server-rendered-form-input-values',
                    'title': 'Using Vue.js with Server Rendered Form Input Values',
                    'category': 'Blog',
                    'blurb': 'In this blog post aimed at developers, I explain and offer solutions for a common Vue.js problem.'
                },
                {
                    'key': 7,
                    'href': 'https://www.gomasuga.com/blog/craft-cms-and-laravel-mix',
                    'title': 'Craft CMS and Laravel Mix',
                    'category': 'Blog',
                    'blurb': 'This extensive blog post covers Masuga Design’s switch from a Gulp-based taskrunner setup to a webpack- and Laravel Mix-based setup. I offer more code samples, technical explanations, and reasonsings in this post, also.'
                },
                {
                    'key': 8,
                    'href': 'https://github.com/craftcms/cms/issues/9679',
                    'title': 'Craft CMS Matrix Block Bug Report',
                    'category': 'Bug Report',
                    'blurb': 'I’ve included this bug report both because it illustrates my technical communication ability, but also because it was for a long-standing and surprising bug which was fun to find.'
                },
                {
                    'key': 9,
                    'href': 'https://github.com/masugadesign/cp-filters-craft-cms/commit/694178307135c4509f2b42d95ab6f03254164658',
                    'title': 'Masuga Design CP Filters v1.1.0 Release Commit',
                    'category': 'Commit',
                    'blurb': 'This merge commit shows several of my commits for the “Saved Filters” of Masuga Design’s CP Filters plugin. This commit contains several examples of my technical work with Yii and Craft CMS.'
                },
            ]
        }
    }
  }
</script>