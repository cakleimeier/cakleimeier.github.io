<template>
    <li><a class="font-serif tracking-wider text-xl" :href="content.href" target="_blank">{{ content.title }}</a>
        <p><strong class="text-xs text-white bg-teal rounded-full py-1 px-2 mr-2">{{ content.category }}</strong> <span v-html="content.blurb" class="text-sm"></span></p>
    </li>
</template>

<script>
  export default {
    layout: 'portfolio-item',
    props: ['content']
  }
</script>