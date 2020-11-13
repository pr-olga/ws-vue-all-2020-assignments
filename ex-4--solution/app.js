import Discussion from './components/Discussion.js'
import ArticleSingle from './components/Article.js'

const app = Vue.createApp({
  components: {
    discussion: Discussion,
    articleSingle: ArticleSingle
  }
})

app.mount('#app')
