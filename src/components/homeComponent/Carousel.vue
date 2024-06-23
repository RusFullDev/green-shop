<template>
    <swiper
      :slidesPerView="1"
      :spaceBetween="10"
      :loop="true"
      :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }"
      :pagination="{
        clickable: true,
      }"
      :navigation="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide><Picture/></swiper-slide>
      <swiper-slide><Picture/></swiper-slide>
      <swiper-slide><Picture/></swiper-slide>
      <swiper-slide><Picture/></swiper-slide>
      <swiper-slide><Picture/></swiper-slide>
      <swiper-slide><Picture/></swiper-slide>
      <swiper-slide><Picture/></swiper-slide>
      <swiper-slide><Picture/></swiper-slide>
      <swiper-slide><Picture/></swiper-slide>
    </swiper>
  </template>
  <script>
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
  
    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
  
   
  
    // import required modules
    import { Pagination ,Autoplay,Navigation} from 'swiper/modules';
import Picture from './Picture.vue';
  
    export default {
      components: {
        Swiper,
        SwiperSlide,
        Picture
      },
      setup() {
        return {
          modules: [Pagination,Autoplay,Navigation],
        };
      },
    };
  </script>
  