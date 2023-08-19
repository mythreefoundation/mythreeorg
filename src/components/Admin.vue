<script setup lang="ts">

</script>
<script lang="ts">
import { db } from "../firestore";
import { collection, addDoc, deleteDoc, doc, updateDoc, getDocs } from "firebase/firestore";
import { uploadFile, getFullUrlPath, fetchImageURL, getTokenFromUrl } from '../utils/utils';
import { type Event, EventsBucket } from '../utils/models';

export default {
  data() {
    return {
      events: [] as Event[],
      file: {},
      eventName: '',
      eventdescription: '',
      eventdetails: '',
      eventjoiningLink: '',
      eventimageName: '',
      mitrarashmiTitle: '',
      mitrarashmiLink: '',
      mitrarashmiImage: '',
      TOKEN: ''
    };
  },
  async created() {
    await fetchImageURL("logo.png").then(img => {
      this.TOKEN = getTokenFromUrl(img);
    })
  },
  methods: {
    readEvents: async function () {
      // Get a reference to the events collection
      const eventsRef = collection(db, EventsBucket);

      // Get all documents in the events collection
      const querySnapshot = await getDocs(eventsRef);

      // Map each document to an object of MyObject type
      this.events = querySnapshot.docs.map((doc) => {
        // Get the document data
        const data = doc.data();
        // Return an object that matches your interface
        return {
          id: doc.id,
          name: data.name,
          description: data.description,
          details: data.detail,
          imageName: data.imageName,
          imageUrl: getFullUrlPath(EventsBucket, data.imageName, this.TOKEN),
          joiningLink: data.joiningLink
          // date: data.date, // Convert Timestamp to Date
        };
      });

      return this.events;
    },
    createEvent: async function (eventDetails: Event) {
      addDoc(collection(db, EventsBucket), {
        details: eventDetails.details,
        description: eventDetails.description,
        imageName: eventDetails.imageName,
        joiningLink: eventDetails.joiningLink,
        name: eventDetails.name,
      })
        .then((docRef) => {
          console.log("Document added with id", docRef.id);
          this.readEvents();

        })
        .catch((error) => {
          console.error("Error adding document", error);
        });
    },
    deleteEvents: async function (eventId: string) {
      // Using then
      deleteDoc(doc(db, EventsBucket, eventId))
        .then(() => {
          console.log("Document deleted");
          // alert("Event successfully deleted");
          this.readEvents();
        })
        .catch((error) => {
          console.error("Error deleting document", error);
          alert("Error deleting Event");
        });

    },
    updateEvents: async function () {

      const frankDocRef = doc(db, EventsBucket, "Nvevp7Z5EUdKZb62wQ82");

      // To update age and favorite color:
      await updateDoc(frankDocRef, {
        "date": "30th May",
        "place": "Belgavi",
        "name": "Book Exhibit"
      });


    },
    previewImage: function (event: any) {
      this.file = event.target.files[0]
      this.eventimageName = event.target.files[0].name;
    },
    uploadImage: async function () {

      if ((this.file as { name: string }).name != undefined) {
        uploadFile(EventsBucket, this.file)
      }
      else {
        alert("No Image uploaded")
      }
    },
    uploadEventDetails: async function () {

      this.uploadImage();
      this.createEvent({
        description: this.eventdescription,
        details: this.eventdetails,
        id: "-1",
        imageName: this.eventimageName,
        joiningLink: this.eventjoiningLink,
        name: this.eventName
      });
    },
    getImageUrl(imageName: string) {
      return getFullUrlPath(EventsBucket, imageName, this.TOKEN);
    }

  }, mounted() {
    this.readEvents()
  }
};
</script>
<template>
  <header class="w3-container w3-teal w3-center" style="padding:64px 16px">
    <h3 class="w3-margin w3-jumbo">Admin</h3>
  </header>
  <div class="w3-row-padding w3-padding-32 w3-container" style="padding-bottom: 0px!important;">
    <p class="w3-center w3-xlarge">ಕಾರ್ಯಕ್ರಮಗಳು</p>
    <table class="w3-table">
      <tr>
        <th>Event Name</th>
        <th>Description</th>
        <!-- <th>details</th> -->
        <th>Image</th>
        <th>Joining Link</th>
        <th>Delete</th>
      </tr>
      <tr v-for="item in events">
        <td>{{ (item.name) }}</td>
        <td>{{ item.description }}</td>
        <!-- <td>{{ item.details }}</td> -->
        <td><a :href="getImageUrl(item.imageName)" target="_blank">{{ item.imageName }}</a></td>
        <td>{{ item.joiningLink }}</td>
        <button @click="deleteEvents(item.id)">Delete</button>
        <!-- <button @click="updateEvents(item.id, 'Jiyan', '27 Aug')">Edit</button> -->
      </tr>
    </table>

    <!-- <button @click="createEvent()">CREATE EVENT</button>  -->
    <div class="formStyle">
      <div class="formdesign">
        <h1>ಕಾರ್ಯಕ್ರಮಗಳ FORM</h1>
        <div class="inputStyle">
          <label>Name</label>
          <input type="text" v-model="eventName" class="form-control" placeholder="Event Title">
        </div>
        <div class="inputStyle">
          <label>Description</label>
          <textarea v-model="eventdescription" class="form-control" placeholder="Event description"></textarea>
        </div>
        <!-- <div class="inputStyle">
          <label>Event Place</label>
          <input type="text" v-model="eventdetails" class="form-control" placeholder="Event Place">
        </div> -->
        <div class="inputStyle">
          <label>Link</label>
          <input type="text" v-model="eventjoiningLink" class="form-control" placeholder="Event joiningLink">
        </div>
        <div class="inputStyle">
          <label>Image to Upload</label>
          <input type="file" ref="input1" @change="previewImage" accept="image/*">
        </div>
        <button class="w3-margin w3-padding-small" @click="uploadEventDetails()">CREATE</button>
      </div>
      <!-- <button @click="uploadImage()">UPLOAD IMAGE</button>  -->

      <!-- <button @click="createEvent(eventName, eventDate, eventPlace)">CREATE EVENT</button>
  <button @click="deleteEvents()">Delete</button>
  <button @click="updateEvents()">Edit</button> -->
    </div>
  </div>
</template>

<style scoped>
.formStyle {
  flex: 1;
  flex-direction: column;
  justify-content: center;
  margin: 2%;
  background-color: aquamarine;
  /* margin-top: 10%; */
}

.inputStyle {
  display: flex;
  height: 100%;
  width: 50%;
  padding: 1%;
}

.form-control {
  display: flex;
  height: 100%;

}

label {
  width: 20%;
}

.formdesign {
  display: flex;
  flex-direction: column;
  align-items: center;

}
</style>