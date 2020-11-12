<template>
  <div class="home">
    <article-single/>
    <discussion/>
  </div>
</template>

<script>
// @ is an alias to /src
import ArticleSingle from '@/components/ArticleSingle.vue'
import Discussion from '@/components/Discussion.vue'

export default {
  name: 'Home',
  components: {
    'article-single': ArticleSingle,
    'discussion': Discussion
  }
}
</script>
