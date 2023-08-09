<script setup lang="ts">
import CalendarView from '../views/CalendarView.vue'

</script>

<script lang="ts">
export default {
  data() {
    return {
      imageSizePx: 200,
      publicPath: import.meta.env.BASE_URL,
      events: [
        { name: 'ಕಿಶೋರ ಸಂಸ್ಕೃತಮ್', detail: 'ಮಕ್ಕಳಿಗಾಗಿ 30 ದಿನಗಳ ಸಂಸ್ಕ್ರತ ತರಗತಿ ಪ್ರತಿದಿನ ಸಂಜೆ 5-6', title: 'indian_kids.jpg' },
        { name: 'ಸಂಸ್ಕ್ರತ ಭಾಷಾ ಪ್ರವೇಶ:', detail: 'ಹಿರಿಯರಿಗಾಗಿ 30 ದಿನಗಳ ಸಂಸ್ಕ್ರತಭಾಷಾಪರಿಚಯ ತರಗತಿ ನಿತ್ಯ ಸಂಜೆ 6-7', title: 'seniors.jpg' },
        { name: 'ಗೀತಾನು ಸಂಧಾನಮ್', detail: 'ಗೀತಾಕಲಿಕೆಗೆ ತರಗತಿಗಳು ಪ್ರತಿಭಾನುವಾರ ಬೆಳಗ್ಗೆ 8-9', title: 'bhagavadgita01.jpg' },
        { name: 'ಅಮರಕೋಶ', detail: 'ಅಮರಕೋಶದ ಕಲಿಕೆಗೆ ತರಗತಿ ಪ್ರತಿಭಾನುವಾರ ಸಂಜೆ 6-7', title: 'subashita.jpg' },
        { name: 'ಭಗವದ್ಗೀತಾ ಪಾರಾಯಣಮ್', detail: 'ನಿತ್ಯ ಬೆಳಗ್ಗೆ 7-7.30', title: 'bhagavadgita01.jpg' },
        { name: 'ಸುಭಾಷಿತ ಚಿಂತನಮ್', detail: ' ಸುಭಾಷಿತಗಳ  ಅರ್ಥಾವಲೋಕನ ಪ್ರತಿ ಶನಿವಾರ ಸಂಜೆ 6-7', title: 'subashita.jpg' },

      ]
    }
  }
}

</script>

<template>
  <header class="w3-container w3-teal w3-center" style="padding:128px 16px">
    <h3 class="w3-margin w3-jumbo">ಚಟುವಟಿಕೆಗಳು</h3>
    <p class="w3-xlarge">Template by w3.css</p>
  </header>

  <div class="w3-row-padding w3-padding-64 w3-container">
    <div class="w3-row-padding">
      <div v-for="book in events" class="w3-third w3-container w3-margin-bottom">
        <img :src="`${publicPath}./events/${book.title}`" :alt="`${book.title}`" style="width:100%"
          class="w3-hover-opacity">
        <div class="w3-container w3-white">
          <p><b>{{ book.name }}</b></p>
          <p>{{ book.detail }}</p>
        </div>
      </div>
    </div>


    <!-- <div class="flex-container">
      <div v-for="book in events" style="padding: 20px;">

        <div :style="`display: inline-block; margin: 2px; box-shadow: 5px 5px 5px gray; width: ${imageSizePx}px;`">
          <img :src="`${publicPath}./events/${book.title}`" :alt="`${book.title}`" :style="`max-height: 250px;
    max-width: 200px; width: 100%;height: ${imageSizePx}px;object-fit: fill;`">

          <p style="font-size: large;">{{ book.name }}</p>
          <p>{{ book.detail }}</p>
        </div>

      </div>
    </div> -->

    <div style="justify-content: center;">
      <CalendarView />
    </div>
  </div>
</template>

<style scoped>
p {
  font-size: 12px;
}
</style>