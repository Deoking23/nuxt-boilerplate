<template>
  <section class="container text-center">
    <h1 class="outer30-bottom">Localization</h1>

    <div v-swiper:mySwiper="swiperOption"
         ref="mySwiper"
         :style="{ height: '100%' }"
    >
      <div class="swiper-wrapper">

        <!-- Cover Item -->
        <div class="swiper-slide" v-for="item in [1,2,3,4,5]">
          <div class="slide-item">

            <div style="width: 100%; height: 200px; background: #f9f9f9;">
              Swiper Item {{item}}
            </div>

          </div>
        </div>

      </div>
      <div class="swiper-pagination"></div>
    </div>

  </section>
</template>

<script>
  export default {
    data () {
      return {
        swiperOption: {
          speed: 1200,
          slidesPerView: 1,
          spaceBetween: 0,
          mousewheel: true,
          autoHeight: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          autoplay: {
            delay: 2000
          }
        }
      }
    },
    methods: {}
  }
</script>