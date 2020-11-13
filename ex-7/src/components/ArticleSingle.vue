<template>
  <div class="article-single">
  <section class="block article">
  <div class="article__body">
    <h2 class="article__title"><span v-html="star" class="star"></span> Effects present letters</h2>
    <div class="article__snippet">
      Effects present letters inquiry no an removed or friends. Desire behind latter me though in. Supposing shameless am he engrossed up additions. My possible peculiar together to. Desire so better am cannot he up before points. Remember mistaken opinions it pleasure of debating. Court front maids forty if aware their at. Chicken use are pressed removed.

      <button v-if="!readMore" @click="readMore = !readMore">read more</button>
      <template v-if="readMore">
      At distant inhabit amongst by. Appetite welcomed interest the goodness boy not. Estimable education for disposing pronounce her. John size good gay plan sent old roof own. Inquietude saw understood his friendship frequently yet. Nature his marked ham wished.
      </template>
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
</section>
  </div>
</template>

<script>
export default {
  name: 'ArticleSingle',
    data() {
      return {
        likesNumber: 0,
        donations: 0,
        readMore: false
      }
    },
    methods: {
      increaseLikes() {
        this.likesNumber++
      },
      donateFiveEuro(num) {
        this.donations += num
      }
    },
    computed: {
      star() {
        return this.likesNumber > 10 ? '&#9733;' : ''
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.article__body {
  max-width: 640px;
  padding: 3rem;
  margin: auto;
}

.article__title {
  margin-bottom: 20px;
  font-size: 2.5rem;
}

.article__snippet {
  line-height: 2rem;
}

.article__detials {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}

.article-buttons {
  margin-left: 20px;
}

.article-likes {
  display: flex;
  flex-direction: column;
  align-content: center;
}

#article-likes__number {
  font-weight: 900;
}

.article-likes__heart {
  color: #e21912;
  font-size: 2rem;
}

.star {
  color: gold;
}
</style>
