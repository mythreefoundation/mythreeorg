<script setup lang="ts">
import CalendarView from '../views/CalendarView.vue'

</script>

<script lang="ts">
export default {
  data() {
    return {
      publicPath: import.meta.env.BASE_URL,
      events: [
        { name: 'ಕಿಶೋರ ಸಂಸ್ಕೃತಮ್', detail: 'ಮಕ್ಕಳಿಗಾಗಿ 30 ದಿನಗಳ ಸಂಸ್ಕ್ರತ ತರಗತಿ ಪ್ರತಿದಿನ ಸಂಜೆ 5-6', title: 'indian_kids.jpg' },
        { name: 'ಸಂಸ್ಕ್ರತ ಭಾಷಾ ಪ್ರವೇಶ:', detail: 'ಹಿರಿಯರಿಗಾಗಿ 30 ದಿನಗಳ ಸಂಸ್ಕ್ರತಭಾಷಾಪರಿಚಯ ತರಗತಿ ನಿತ್ಯ ಸಂಜೆ 6-7', title: 'seniors.jpg' },
        { name: 'ಗೀತಾನು ಸಂಧಾನಮ್', detail: 'ಗೀತಾಕಲಿಕೆಗೆ ತರಗತಿಗಳು ಪ್ರತಿಭಾನುವಾರ ಬೆಳಗ್ಗೆ 8-9', title: 'bhagavadgita01.jpg' },
        { name: 'ಅಮರಕೋಶ', detail: 'ಅಮರಕೋಶದ ಕಲಿಕೆಗೆ ತರಗತಿ ಪ್ರತಿಭಾನುವಾರ ಸಂಜೆ 6-7', title: 'subashita.jpg' },
        {
          name: 'ಗೀತಾರ್ಥಚಿಂತನಮ್', detail: 'ಶ್ರೇಕೃಷ್ಣಪರಬರಹಿಣೇ ನಮಃ ನಿಮಿ ಮನಯಲಿಲ ಶ್ರೇಕೃಷ್ಣನ ಗಿೇತ್ತವಾಣಿ ಮೊಳಗಬೇಕೆೇ? ನಿತ್ಯವೂ ಶುಭೇದಯದಲಿಲ ಗಿೇತ್ತನುರಣನವಾಗಬೇಕೆೇ? ಹಾಗಾದರೆ ಡಾ.ಗಣಪತಿ ಹೆಗಡೆ ಅವರು ಕಲಬ್- ಹೌಸ್(Club House) ಮೂಲಕ ಪರಸುಿತ್ಪಡಿಸುವ. ಕಾಯೃಕರಮದಲಿಲ ನಿತ್ಯವೂ (ಬಳಗೆೆ 7.00 ರಿಂದ 7.30)', title: 'bhagavadgita01.jpg'
        }, { name: 'ಸುಭಾಷಿತ ಚಿಂತನಮ್', detail: ' ಸುಭಾಷಿತಗಳ  ಅರ್ಥಾವಲೋಕನ ಪ್ರತಿ ಶನಿವಾರ ಸಂಜೆ 6-7', title: 'subashita.jpg' },

      ]
    }
  }
}

</script>

<template>
  <header class="w3-container w3-teal w3-center" style="padding:64px 16px">
    <h3 class="w3-margin w3-jumbo">ಚಟುವಟಿಕೆಗಳು</h3>
    <p class="w3-xlarge">ನಮ್ಮ ಕಾರ್ಯಕ್ರಮಗಳಲ್ಲಿ ನಮ್ಮೊಂದಿಗೆ ಸೇರಿಕೊಳ್ಳಿ</p>
  </header>

  <div class="w3-row-padding w3-padding-64 w3-container">

    <div v-for="book in events" class="w3-row"
      style="padding: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); margin-bottom: 10px;">
      <div class="w3-col m6 w3-center w3-padding-large">
        <img :src="`${publicPath}./events/${book.title}`" :alt="`${book.title}`" class="w3-round w3-image" width="500"
          height="333">
      </div>

      <!-- Hide this text on small devices -->
      <div class="w3-col m6 w3-padding-large">
        <p><b>{{ book.name }}</b></p>
        <p>{{ book.detail }}</p>
      </div>

      <a href="https://chat.whatsapp.com/" target="_blank">
        <button class="w3-button w3-teal w3-padding-large w3-large w3-margin-top">Join WhatsApp Group</button>
      </a>
    </div>

    <CalendarView />
  </div>
  <div class="w3-container w3-black w3-center w3-opacity w3-padding-64">
    <h1 class="w3-margin w3-xlarge">ಕಾಯೃಕರಮದ Link ಪಡೆಯಲು ಕು। ಧನಯಶ್ರೇ ಅವರ 74835
      86269 ಸಂಖ್ಯಯಗೆ WhatsApp ಸಂದೇಶ ಕಳುಹಿಸಿ. ಕರೆ

      ಮಾಡಲು ಅವಕಾಶವಲಲ.</h1>
  </div>
</template>

<style scoped></style>