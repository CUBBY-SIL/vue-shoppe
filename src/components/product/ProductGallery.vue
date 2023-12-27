<template>
    <div class="container-gallery">
          <swiper
              @swiper="setThumbsSwiper"
              :spaceBetween="10"
              :slidesPerView="4"
              :freeMode="true"
              :watchSlidesProgress="true"
              :modules="modules"
              :direction="'vertical'"
              :mousewheel="true"
              class="mySwiper"
          >
              <swiper-slide v-for="img, i in images" :key="i">
                  <img :src="img" />
              </swiper-slide>
          </swiper>
          <swiper
              :spaceBetween="10"
              :modules="modules"
              :thumbs="{ swiper: thumbsSwiper }"
              :loop="true"
              class="mySwiper2"
          >
              <swiper-slide v-for="img, i in images" :key="i">
                  <img :src="img" />
              </swiper-slide>
          </swiper>
      </div>
  </template>
  
<script>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import { Mousewheel, Pagination, FreeMode, Navigation, Thumbs } from 'swiper/modules';
export default {
    components:{
        Swiper,
        SwiperSlide,
    },
    setup() {
    const thumbsSwiper = ref(null);

    const setThumbsSwiper = (swiper) => {
        thumbsSwiper.value = swiper;
    };

    return {
        thumbsSwiper,
        setThumbsSwiper,
        modules: [FreeMode, Navigation, Thumbs, Mousewheel, Pagination],
    };
    },
    props:{
        images:{
            type: Array,
        }
    }
}
</script>
  
<style>
.swiper {
    width: 100%;
    height: 100%;
}
.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}
.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>