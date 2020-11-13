const Discussion = ('articleSingle', {
  template: `
  <section class="block article">
  <div class="article__body">
    <h2 class="article__title"><span v-html="star" class="star"></span> Effects present letters</h2>
    <div class="article__snippet">
      Effects present letters inquiry no an removed or friends. Desire behind latter me though in. Supposing shameless am he engrossed up additions. My possible peculiar together to. Desire so better am cannot he up before points. Remember mistaken opinions it pleasure of debating. Court front maids forty if aware their at. Chicken use are pressed removed.

      At distant inhabit amongst by. Appetite welcomed interest the goodness boy not. Estimable education for disposing pronounce her. John size good gay plan sent old roof own. Inquietude saw understood his friendship frequently yet. Nature his marked ham wished.
    </div>
      <div class="article__detials">
        <div class="article-buttons article-likes">
          <div class="article-likes__description">
            <span id="article-likes__number">{{ likesNumber }}</span>
              reactions
          </div>
          <button class="button button--red" @click="increaseLikes()">
            <span class="article-likes__heart">&#10084;</span>
          </button>
        </div>
        <div class="article-buttons article-donations">
          <div class="article-likes__description">
            <span id="article-likes__number">{{ donations }}€</span>
              donated
          </div>
          <button class="button button--green" @click="donateFiveEuro(5)">
            <span >donate 5€</span>
          </button>
        </div>
      </div>
  </div>
</section>`,
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
},
computed: {
  star () {
    return this.likesNumber > 10 ? '&#9733;' : ''
  }
}
})

export default Discussion