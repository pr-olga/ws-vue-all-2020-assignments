<template>
  <div class="discussion-comment">
    <div class="discussion__comment">
      {{comment.commentText}}
    </div>
    <div class="discussion__details">
      <div class="author">{{comment.commentAuthor}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comment: Object
}}
</script>

<style scoped>
 .text-color--red {
   color: #e21912;
 }
</style>