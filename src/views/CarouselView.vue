<script setup lang="ts">
import { defineComponent } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import Vue from 'vue'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
const props = defineProps(['carouselBackgroundStyle'])

const eventData = [
  {
    id: 1,
    eventName: 'Book Exhibition',
    eventDate: '08 Aug',
    eventTime: '11 AM',
    eventPlace: 'Bangalore'
  },
  {
    id: 2,
    eventName: 'Old Book Exhibition',
    eventDate: '09 Aug',
    eventTime: '12 AM',
    eventPlace: 'Bangalore'
  },
  {
    id: 3,
    eventName: 'Sanskrit Old Books Exhibition',
    eventDate: '05 Aug',
    eventTime: '11 AM',
    eventPlace: 'Mysore'
  },
  {
    id: 4,
    eventName: 'Retro Sale',
    eventDate: '08 Sept',
    eventTime: '11 AM',
    eventPlace: 'Bangalore'
  },
  {
    id: 5,
    eventName: 'Jumbo Book Sale',
    eventDate: '22 Aug',
    eventTime: '11 AM',
    eventPlace: 'Mangalore'
  }
]
</script>

<template>
  <div :style="{ 'background-color': props.carouselBackgroundStyle }">
    <carousel :items-to-show="1">
      <slide v-for="item in eventData" :key="item.id">
        <div>
          <img src="@/assets/mythree-logo.png" class="carouselimgSty" />
        </div>
        <div class="contentStyle">
          <p>{{ item.eventName }}</p>

          <p>{{ item.eventDate }} {{ item.eventTime }}</p>
          <p class="contentStyle">{{ item.eventPlace }}</p>
        </div>
      </slide>

      <template #addons>
        <navigation />
      </template>
    </carousel>
  </div>
</template>

<style>
.carouselimgSty {
  height: 150px;
  padding-right: 20px;
}

.contentStyle {
  color: white;
}
</style>
