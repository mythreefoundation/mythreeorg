<script setup lang="ts">
import CalendarView from '../views/CalendarView.vue'
import { fetchImageURL, readCollection, getTokenFromUrl, getFullUrlPath } from '../utils/utils';
import { type Event, EventsBucket } from '../utils/models';

</script>

<script lang="ts">
export default {
  data() {
    return {
      publicPath: import.meta.env.BASE_URL,
      events: [] as Event[],
      TOKEN: ''
    }
  }, async created() {
    // await fetchImagesURL(this.folderName).then(images => {
    //     this.allImages = images;
    //     this.loadImages();
    // });

    await fetchImageURL("logo.png").then(img => {
      this.TOKEN = getTokenFromUrl(img);
    })

    await readCollection(EventsBucket).then(_events => {

      _events.map((doc) => {
        this.events.push({
          description: doc.data.description,
          details: doc.data.details,
          id: doc.id,
          imageName: getFullUrlPath(EventsBucket, doc.data.imageName, this.TOKEN),
          joiningLink: doc.data.joiningLink,
          name: doc.data.name
        })
      })
    })
  }
}

</script>

<template>
  <header class="w3-container w3-teal w3-center" style="padding:64px 16px">
    <h3 class="w3-margin w3-jumbo">ಕಾರ್ಯಕ್ರಮಗಳು</h3>
    <p class="w3-xlarge">ನಮ್ಮ ಕಾರ್ಯಕ್ರಮಗಳಲ್ಲಿ ನಮ್ಮೊಂದಿಗೆ ಸೇರಿಕೊಳ್ಳಿ</p>
  </header>

  <div class="w3-row-padding w3-padding-32 w3-container">

    <div v-for="event in events " class="w3-row"
      style="padding: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); margin-bottom: 10px;">
      <div class="w3-col m6 w3-center w3-padding-large">
        <img :src="`${event.imageName}`" :alt="`${event.name}`" class="w3-round w3-image" width="500" height="333">

        <!-- <img :src="`${publicPath}./events/${event.title}`" :alt="`${event.title}`" class="w3-round w3-image" width="500"
          height="333"> -->
      </div>

      <!-- Hide this text on small devices -->
      <div class="w3-col m6 w3-padding-large">
        <p><b>{{ event.name }}</b></p>
        <p>{{ event.description }}</p>
        <p>{{ event.details }}</p>
      </div>

      <a :href="event.joiningLink" target="_blank">
        <button class="w3-button w3-teal w3-padding-large w3-large w3-margin-top">Link to the event</button>
      </a>
    </div>

  </div>


  <CalendarView />

  <h4 class="w3-center w3-margin">ನಿಮ್ಮ ಕ್ಯಾಲೆಂಡರ್ ಗೆ ಸೇರಿಸಲು ಮತ್ತು ಮುಂಬರುವ ಕಾರ್ಯಕ್ರಮಗಳ ಬಗ್ಗೆ ಸೂಚನೆ ಪಡೆಯಲು "+ Google
    Calendar" ಬಟನ್ ಕ್ಲಿಕ್ ಮಾಡಿ</h4>

  <div class="w3-container w3-black w3-center w3-opacity w3-padding-64">
    <h1 class="w3-margin w3-xlarge">ಕಾಯೃಕ್ರಮದ Link ಪಡೆಯಲು ಕು। ಧನ್ಯಶ್ರೀ ಅವರ 74835
      86269 ಸಂಖ್ಯೆಗೆ WhatsApp ಸಂದೇಶ ಕಳುಹಿಸಿ. ಕರೆ ಮಾಡಲು ಅವಕಾಶವಿಲ್ಲ</h1>
  </div>
</template>

<style scoped></style>