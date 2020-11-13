const Discussion = ('discussion', {
  template: `
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
</section>`,
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
},
})

export default Discussion