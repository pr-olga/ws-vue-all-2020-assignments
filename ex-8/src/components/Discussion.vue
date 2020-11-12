<template>
  <div>
    <alert :alert="alert" v-if="alert!== ''" @close="alert = ''" @resetField="visits = ''">
      <div>
        How many times do you want to try? <input type="text" v-model="visits">
      </div>
    </alert>
    <section class="block discussion">
      <div class="discussion__body">
        <h3 class="discussion__title"> Discussion </h3>
        <div v-for="comment in comments" :key="comment.id">
          <discussion-comment :comment="comment"/>
        </div>
        <div class="discussion__form">
          <comment-form @send="addComment" @setText="setCommentText" @setAuthor="setCommentAuthor" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Comment from './Discussion/Comment.vue'
import CommentForm from './Discussion/CommentForm.vue'
import Alert from './Alert.vue'

export default {
name: 'Discussion',
components: {
  'discussion-comment': Comment,
  'comment-form': CommentForm,
  'alert': Alert
},
data () {
  return {
    comments: [{
      id: 1,
      commentAuthor: 'Donald',
      commentText: 'Do commanded an shameless we disposing do. Indulgence ten remarkably nor are impression out. Power is lived means oh every in we quiet. Remainder provision an in intention. Saw supported too joy promotion engrossed propriety. Me till like it sure no sons.'
    }],
    commentTemporary: {
      commentAuthor: 'Joe',
      commentText: 'Do commanded an shameless we disposing do. Indulgence ten remarkably nor are impression out. Power is lived means oh every in we quiet. Remainder provision an in intention. Saw supported too joy promotion engrossed propriety. Me till like it sure no sons.'
    },
    alert: '',
    visits: ''
    }
  },
methods: {
  setCommentText (value) {
    this.commentTemporary.commentText = value
  },
  setCommentAuthor (value) {
    this.commentTemporary.commentAuthor = value
  },
  addComment() {
    const id = this.comments.length + 1
  if (this.commentTemporary.commentAuthor === 'Donald') {
      this.alert = 'Hit the road, Donald!'
      return false
  } else {
    this.comments.push({
      id: id,
      commentAuthor: this.commentTemporary.commentAuthor,
      commentText: this.commentTemporary.commentText
    })

    this.alert = ''
    }
  }
}
}
</script>

<style>
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

</style>