<template>
  <!-- https://www.youtube.com/watch?v=OY-TySdgXPY -->

  <div class="card vw-100 vh-100">

    <img src="@/assets/images/home/headerBG.webp" alt="">

    <div id="img_wrapper">
      <img src="@/assets/images/home/shape.webp" alt="">
    </div>

    <div class="card_content d-flex justify-content-center align-items-center h-100">
      <div class="content_wrapper">
        <h1 class="text-center m-sm-0">شغفنا التقنية</h1>
        <h1 class="text-center m-sm-0">استثمارنا المستقبل</h1>
        <div class="text-center mt-4">
          <router-link :to="{ name: 'about' }" class="btn rounded border-0">
            من نحن
          </router-link>
        </div>
        <div class="text-center">
          <button type="button" class="btn text-white shadow-none border-0" @click="showCardMethod">
            <font-awesome-icon :icon="['fas', 'fa-arrow-down']" />
          </button>
        </div>
      </div>
    </div>

  </div>

  <div class="card vw-100 min-vh-100" v-if="showCard">

    <!-- import navbar in main.js file -->
    <Navbar />

    <!-- Start Header -->
    <Header />
    <!-- End Header -->

    <!-- Start Story -->
    <Story />
    <!-- End Story -->

    <!-- Start Partner -->
    <Partner />
    <!-- End Partner -->

    <!-- Start Overview -->
    <Overview />
    <!-- End Overview -->

    <!-- Start Associate -->
    <Associate />
    <!-- End Associate -->

    <!-- Start News -->
    <News />
    <!-- End News -->

    <!-- Start Footer -->
    <Footer />
    <!-- End Footer -->

  </div>
</template>

<script>

import Header from '@/components/home/Header.vue';
import Story from '@/components/home/Story.vue';
import Partner from '@/components/home/Partner.vue';
import Overview from '@/components/home/Overview.vue';
import Associate from '@/components/home/Associate.vue';
import News from '@/components/home/News.vue';

export default {

  name: 'HomeView',

  data() {
    return {
      showCard: false,
    };
  },

  components: {
    Header,
    Story,
    Partner,
    Overview,
    Associate,
    News,
  },

  methods: {
    showCardMethod: function () {
      this.showCard = 'true';
      window.scrollBy(0, 100);
      // window.scrollTo(0, 100);
    }
  },

  created() {
    this.$store.commit("setPage", "home");
  },

}

</script>

<style lang="scss" scoped>
.card {

  position: sticky;
  top: 0;

  border: 0;
  border-radius: 0;

  // position: relative;

  img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    // filter: brightness(0.9);
    z-index: 1;
  }

  #img_wrapper {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 500px;
    height: 382px;
    z-index: 1;

    @include breakpoints(x-small) {
      /* width: 300px;
        height: 229px; */
      display: none;
    }

    @include breakpoints(small) {
      width: 400px;
      height: 306px;
    }

    @include breakpoints(medium) {
      width: 400px;
      height: 306px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .card_content {

    background-image: $Header-BG;
    opacity: 0.8;

    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    z-index: 2;

    .content_wrapper {

      display: grid;

      h1 {

        font-family: 'FFShamelFamily-Bold';
        color: $Light-Primary;
        font-size: 40px;
        font-style: normal;
        font-weight: 400;
        line-height: 100px;

        @include breakpoints(x-small) {
          font-size: 32px;
          line-height: 180%;
          margin-bottom: 0;
        }

      }

      a {

        background-color: $White;
        padding: 3px 16px;
        font-family: 'FFShamelFamily-Bold';
        color: $Primary;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 180%;

        &:hover {
          background: $Linear-Blue;
          background-clip: padding-box;
          -webkit-background-clip: padding-box;
          -webkit-text-fill-color: $White;
          transition: background 1s ease-in;
        }

      }

      button {

        background-color: $Primary;
        border-radius: 50%;
        margin-top: 120px;

        svg {
          font-size: 24px;
        }

        &:hover {
          background: $Linear-Blue;
          background-clip: padding-box;
          -webkit-background-clip: padding-box;
          -webkit-text-fill-color: $White;
          transition: background 1s ease-in;
        }

      }

    }
  }

}
</style>
