/* eslint-disable */
<template>
  <div class="home">
    <article-single/>
  <section class="block block-alert">
  <div class="alert_body">
    {{alert}}
  </div>
  </section>
  <section class="block discussion">
  <div class="discussion__body">
    <h3 class="discussion__title"> Discussion </h3>
    <div class="discussion__comment" :class="{'text-color--red': setTextColor}">
      {{comment.commentText}}
    </div>
    <div class="discussion__details">
      <div class="author">{{comment.commentAuthor}}</div>
    </div>
  <div class="discussion__form">
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
  </div>
  </div>
</section>
  </div>
</template>

<script>
// @ is an alias to /src
import ArticleSingle from '@/components/ArticleSingle.vue'

export default {
  name: 'Home',
  components: {
    'article-single': ArticleSingle
  },
  data () {
  return {
      comment: {
        commentAuthor: 'Donald',
        commentText: 'Do commanded an shameless we disposing do. Indulgence ten remarkably nor are impression out. Power is lived means oh every in we quiet. Remainder provision an in intention. Saw supported too joy promotion engrossed propriety. Me till like it sure no sons.'
      },
      commentTemporary: {
        commentAuthor: 'Joe',
        commentText: 'Do commanded an shameless we disposing do. Indulgence ten remarkably nor are impression out. Power is lived means oh every in we quiet. Remainder provision an in intention. Saw supported too joy promotion engrossed propriety. Me till like it sure no sons.'
      },
      alert: '',
      setTextColor: false
  }
},
methods: {
  setCommentText (e) {
    this.commentTemporary.commentText = e.target.value;
  },
  setCommentAuthor (e) {
    this.commentTemporary.commentAuthor = e.target.value;
  },
  addComment() {
    this.comment = {
      commentAuthor: this.commentTemporary.commentAuthor,
      commentText: this.commentTemporary.commentText
    }
  }
},
watch: {
  comment (value) {
    if (value.commentAuthor === 'Donald') {
      this.setTextColor = true
      this.alert = 'Hit the road, Donald!'
    } else {
      this.setTextColor = false
      this.alert = ''
    }
  }
}
}
</script>

<style scoped>
/* Comment
   ========================================================================== */

.discussion__body{
  padding: 2.5rem;
}

.discussion__title {
  margin-bottom: 20px;
  font-size: 1.8rem;
}

.discussion__comment {
  font-size: 0.9rem;
  line-height: 1.4rem;
}

.discussion__details {
  display: flex;
  justify-content: flex-end;
  font-weight: 900;
}

.discussion__form__fields {
  display: flex;
  flex-direction: column;
  max-width: 400px;
}

/* Form
   ========================================================================== */

.form-el {
  margin-top: 15px;
}

.input-name {
  display: block;
}

.alert_body{
  padding: 1rem 2.5rem;
  color: #e21912;
  font-weight: 900;
}

</style>
