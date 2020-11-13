<template>
  <form @submit.prevent="addComment" class="discussion__form__fields">
      <div class="form-el">
        <label for="comment">Comment</label>
        <textarea name="comment" id="comment" cols="50" rows="5" @input="setCommentText">
        </textarea>
      </div>
      <div class="form-el">
        <label for="name">Name</label>
        <input type="text" name="name" id="name" class="input-name" @input="setCommentAuthor">
      </div>
      <button class="button button--black form-el">send</button>
    </form>
</template>

<script>
export default {
  methods: {
    setCommentText(e) {
      this.$emit('set-text', e.target.value)
    },
    setCommentAuthor(e) {
      this.$emit('set-author', e.target.value)
    },
    addComment() {
      this.$emit('send')
    }
  }
}
</script>

<style>

</style>