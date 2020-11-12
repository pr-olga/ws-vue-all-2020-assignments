const app = Vue.createApp({
  data() {
    return {
      likesNumber: 0,
      donations: 0,
      comment: {
        commentAuthor: 'Donald',
        commentText: 'Do commanded an shameless we disposing do. Indulgence ten remarkably nor are impression out. Power is lived means oh every in we quiet. Remainder provision an in intention. Saw supported too joy promotion engrossed propriety. Me till like it sure no sons.'
      },
      commentTemporary: {
        commentAuthor: 'Joe',
        commentText: 'Do commanded an shameless we disposing do. Indulgence ten remarkably nor are impression out. Power is lived means oh every in we quiet. Remainder provision an in intention. Saw supported too joy promotion engrossed propriety. Me till like it sure no sons.'
      }
    }
  },
  methods: {
    increaseLikes () {
     this.likesNumber++
    },
    donateFiveEuro(num) {
      this.donations += num
    },
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
  }
})

app.mount('#app')
