<template>
  <carousel :items-to-show="1" :wrap-around="true" :breakpoints="breakpoints">
    <slide v-for="(eventItem, i) in events" :key="i">
      <div>
        <img :src="eventItem.image" alt="" class="carousel-img" />
        <div class="down-content">
          <h4>{{ eventItem.name }}</h4>
          <p>{{ eventItem.date }}</p>
          <a :href="eventItem.link"><i class="fa fa-link"></i></a>
        </div>
      </div>
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>

<script setup>
import events from "@/contents/events.json"
import "vue3-carousel/dist/carousel.css"
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel"

const breakpoints = ref({
  992: {
    itemsToShow: 3,
  },
  1200: {
    itemsToShow: 4,
  },
})
</script>

<style scoped>
.carousel-img {
  display: block;
  height: 200px;
  width: auto;
  aspect-ratio: 16 / 9;
  border-radius: 23px 23px 0px 0px;
  object-fit: cover;
}

.down-content {
  background-color: #fff;
  border: 1px solid #f3d7ff;
  border-radius: 0px 0px 23px 23px;
  padding: 30px;
  position: relative;
  height: 200px;
  aspect-ratio: 16 / 9;
  width: auto;
}

.down-content h4 {
  font-size: 20px;
  color: #2a2a2a;
  line-height: 30px;
  width: 75%;
  font-weight: 700;
}

.down-content p {
  font-size: 15px;
  line-height: 30px;
  color: black;
  width: 75%;
}

.down-content a {
  width: 46px;
  height: 46px;
  display: inline-block;
  line-height: 46px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
  border-radius: 50%;
  position: absolute;
  right: 30px;
  top: 50%;
  color: #330867;
  transform: translateY(-23px);
}
</style>
