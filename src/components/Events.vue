<script lang="ts">
import { fetchImageURL, readCollection, getTokenFromUrl, getFullUrlPath, groupBy, orderBy } from '../utils/utils';
import { type Event, EventsBucket, type Group, GroupsBucket } from '../utils/models';

export default {
  data() {
    return {
      publicPath: import.meta.env.BASE_URL,
      events: [] as Event[],
      groups: [] as Array<Group>,
      groupedEvents: {} as Record<string, Event[]>,
      TOKEN: ''
    }
  }, async created() {
    await fetchImageURL("logo.png").then(img => {
      this.TOKEN = getTokenFromUrl(img);
    })

    await readCollection(GroupsBucket).then(_grp => {

      _grp.map((doc) => {
        this.groups.push({
          id: doc.id,
          title: doc.data.title,
          orderId: doc.data.orderId
        })
      })
    })

    await readCollection(EventsBucket).then(_events => {

      _events.map((doc) => {
        this.events.push({
          description: doc.data.description,
          details: doc.data.details,
          id: doc.id,
          imageName: getFullUrlPath(EventsBucket + "/", doc.data.imageName, this.TOKEN),
          joiningLink: doc.data.joiningLink,
          name: doc.data.name,
          groupId: doc.data.groupId,
          orderId: doc.data.orderId
        })
      });

    }).then(() => {
      let _groupedEvents = groupBy("groupId")(this.events);

      this.groupedEvents = Object.entries(_groupedEvents)
        .sort(([keyA, eventsA], [keyB, eventsB]) => {
          const grpA = this.groups.find(g => g.id === keyA);
          const grpB = this.groups.find(g => g.id === keyB);
          if (grpA && grpB) {
            return Number(grpA.orderId) - Number(grpB.orderId);
          }
          return 0;
        })
        .reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {} as Record<string, Event[]>);
    })
  },
  methods: {
    getGroupName(id: string) {
      return this.groups.find(g => g.id == id)?.title;
    },
    getGroupOrderId(id: string) {
      return this.groups.find(g => g.id == id)?.orderId;
    },
    sortByOrderId(groupedEvents: Event[]) {
      return groupedEvents.sort((a, b) => {
        if (a.orderId === undefined && b.orderId === undefined) {
          return 0;
        } else if (a.orderId === undefined) {
          return -1;
        } else if (b.orderId === undefined) {
          return 1;
        } else {
          return Number(a.orderId) - Number(b.orderId);
        }
      });
    }
  }
}

</script>

<template>
  <header class="w3-container w3-teal gradient w3-center header-padding">

    <div class="w3-container header">
      <img src="@/assets/logo/clubhouse-app-logo.png" class="w3-hide-small" alt="Logo Left" />
      <h3 class="w3-margin w3-xxlarge">ಕಾರ್ಯಕ್ರಮಗಳು</h3>
      <img class="right w3-hide-small" src="@/assets/logo/speaker.png" alt="Logo Right" />
    </div>

    <p class="w3-xlarge">ನಮ್ಮ ಕಾರ್ಯಕ್ರಮಗಳಲ್ಲಿ ನಮ್ಮೊಂದಿಗೆ ಸೇರಿಕೊಳ್ಳಿ</p>
  </header>

  <div class="w3-row-padding w3-padding-32 w3-container">
    <h2 class="w3-center">ಕಾರ್ಯಕ್ರಮ ವೀಕ್ಷಿಸಲು ಚಿತ್ರದ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ</h2>
    <div v-for="(_groupedEvents, title) in groupedEvents" class="w3-container">
      <h3 class="w3-text-black w3-center" style="font-style: italic;">{{ getGroupName(title) }}</h3>
      <div v-for="event in sortByOrderId(_groupedEvents)" class="w3-third w3-container w3-margin-bottom"
        style="box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
        <div class="w3-image-container"
          style="height: 300px; display: flex; align-items: center; justify-content: center;">

          <a :href="`${event.joiningLink}`" target="_blank">
            <img :src="`${event.imageName}`" :alt="`${event.name}`"
              style="max-width: 100%; max-height: 300px; padding: 5px;">
          </a>
        </div>
        <div class="w3-container w3-white w3-center">
          <h4 style="margin: 0px;"><b>{{ event.name }}</b></h4>
          <p style="margin: 0px;"><b>{{ event.details }}</b></p>
          <p style="margin: 0px;">{{ event.description }}</p>
        </div>
      </div>
    </div>

  </div>

  <div class="w3-container w3-center w3-padding-16" style="background-color: #fef102;">
    <h1 class="w3-margin" style="color: #8a5241;">ಕಾಯೃಕ್ರಮದ Link ಪಡೆಯಲು ಕು। ಧನ್ಯಶ್ರೀ ಅವರ 74835
      86269 ಸಂಖ್ಯೆಗೆ WhatsApp ಸಂದೇಶ ಕಳುಹಿಸಿ. ಕರೆ ಮಾಡಲು ಅವಕಾಶವಿಲ್ಲ</h1>
  </div>
</template>

<style scoped></style>