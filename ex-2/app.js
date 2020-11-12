const app = Vue.createApp({
  data() {
    return {
      likesNumber: 0,
      donations: 0
    }
  },
  methods: {
    increaseLikes () {
     this.likesNumber++
    },
    donateFiveEuro(num) {
      this.donations += num
    }
  }
})

app.mount('#app')
