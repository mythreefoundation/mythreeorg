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
          imageName: getFullUrlPath(EventsBucket, doc.data.imageName, this.TOKEN),
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
  <header class="w3-container w3-teal w3-center" style="padding:64px 16px">
    <h3 class="w3-margin w3-jumbo">ಕಾರ್ಯಕ್ರಮಗಳು</h3>
    <p class="w3-xlarge">ನಮ್ಮ ಕಾರ್ಯಕ್ರಮಗಳಲ್ಲಿ ನಮ್ಮೊಂದಿಗೆ ಸೇರಿಕೊಳ್ಳಿ</p>
  </header>

  <div class="w3-row-padding w3-padding-32 w3-container">
    <h2 class="w3-center">ಪ್ರೋಗ್ರಾಂ ವೀಕ್ಷಿಸಲು ಚಿತ್ರದ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ</h2>
    <div v-for="(_groupedEvents, title) in groupedEvents" class="w3-container">
      <h3 class="w3-text-teal w3-center">{{ getGroupName(title) }}</h3>
      <div v-for="event in sortByOrderId(_groupedEvents)" class="w3-third w3-container w3-margin-bottom"
        style="box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
        <div class="w3-image-container"
          style="height: 300px; display: flex; align-items: center; justify-content: center;">

          <a :href="`${event.joiningLink}`" target="_blank">
            <img :src="`${event.imageName}`" :alt="`${event.name}`" style="max-width: 100%; max-height: 300px; padding: 5px;">
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


  <div class="iframe-container">
    <iframe
      src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FKolkata&showNav=1&showPrint=0&showTabs=0&showTz=1&showCalendars=1&title=Mythree%20Pratishtanam%20Programs&src=bXl0aHJlZXByYXRpc2h0YW5hQGdtYWlsLmNvbQ&color=%23039BE5"
      style="padding: 20px;" width="800" height="600" frameborder="0" scrolling="no"></iframe>
  </div>

  <h4 class="w3-center w3-margin">ನಿಮ್ಮ ಕ್ಯಾಲೆಂಡರ್ ಗೆ ಸೇರಿಸಲು ಮತ್ತು ಮುಂಬರುವ ಕಾರ್ಯಕ್ರಮಗಳ ಬಗ್ಗೆ ಸೂಚನೆ ಪಡೆಯಲು "+ Google
    Calendar" ಬಟನ್ ಕ್ಲಿಕ್ ಮಾಡಿ</h4>

  <div class="w3-container w3-black w3-center w3-opacity w3-padding-64">
    <h1 class="w3-margin w3-xlarge">ಕಾಯೃಕ್ರಮದ Link ಪಡೆಯಲು ಕು। ಧನ್ಯಶ್ರೀ ಅವರ 74835
      86269 ಸಂಖ್ಯೆಗೆ WhatsApp ಸಂದೇಶ ಕಳುಹಿಸಿ. ಕರೆ ಮಾಡಲು ಅವಕಾಶವಿಲ್ಲ</h1>
  </div>
</template>

<style scoped></style>