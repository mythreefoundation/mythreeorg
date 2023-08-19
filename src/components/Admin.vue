<script setup lang="ts">
import CalendarView from '../views/CalendarView.vue'
// import CarouselView from '../views/CarouselView.vue'
import { ref } from 'vue'

</script>
<script lang="ts">
import { db } from "../firestore";
import { collection, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { uploadFile } from '../utils/utils';
let eventName = ref<string>('')
let eventPlace = ref<string>('')
let eventDate = ref<string>()

export default {
  data() {
    return {
      myArray: [],
      file: {}

    };
  },
  methods: {
    readEvents: function () {
      db.collection("events")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {

            this.myArray.push({
              id: doc.id,
              name: doc.data().name,
              date: doc.data().date,
            });
            console.log(doc.id, " => ", doc.data());
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
      return this.myArray;
    },
    createEvent: async function (name: InstanceType<typeof string>, date: InstanceType<typeof string>, place: InstanceType<typeof string>) {
      try {

        const docRef = await addDoc(collection(db, "events"), {
          name: name.value,
          date: date.value,
          place: place.value
        });

        console.log("Document successfully written!", name);
        alert("Event successfully Added")

      } catch (e) {
        console.error("Error adding document: ", e);
        alert("Error updating Event")
      }
    },
    deleteEvents: async function () {
      try {

        const docRef = await deleteDoc(doc(db, "events", "cTSuGeDwKTMXgLcdSFkZ"));
        console.log("Document successfully written!", name);
        alert("Event successfully Added")
      } catch (e) {
        console.error("Error adding document: ", e);
        alert("Error updating Event")
      }

    },
    updateEvents: async function () {

      const frankDocRef = doc(db, "events", "Nvevp7Z5EUdKZb62wQ82");

      // To update age and favorite color:
      await updateDoc(frankDocRef, {
        "date": "30th May",
        "place": "Belgavi",
        "name": "Book Exhibit"
      });


    },
    previewImage: function (event) {
      this.file = event.target.files[0]
    },
    uploadImage: async function () {

      if (this.file.name != undefined) {
        await uploadFile(this.file)
      }
      else {
        alert("No Image uploaded")
      }
    },
    uploadEventDetails: async function () {

      this.createEvent(eventName, eventDate, eventPlace);
      this.uploadImage()
    }

    //   mounted() {
    //     this.readEvents()
    //   }
  }
};
</script>
<template>
  <!-- <table>
    <tr>
      <th>Event ID</th>
      <th>Event Name</th>
      <th>Event Place</th>
      <th>Delete</th>
      <th>Edit</th>
    </tr>
    <tr v-for="item in myArray">
      <td>{{ item.id }}</td>
      <td>{{ (item.name) }}</td>
      <td>{{ item.date }}</td>
      <button @click="deleteEvents(item.id)">Delete</button>
      <button @click="updateEvents(item.id, 'Jiyan', '27 Aug')">Edit</button>
    </tr>
  </table>
  <input type="text" v-model="eventName" class="form-control" placeholder="Event Name">
  <input type="text" v-model="eventDate" class="form-control" placeholder="Event date">
  <input type="text" v-model="eventPlace" class="form-control" placeholder="Event Place">
  <button @click="createEvent(eventName, eventDate, eventPlace)">CREATE EVENT</button> -->
  <!-- <CalendarView /> -->
  <!-- <button @click="createEvent()">CREATE EVENT</button>  -->
  <div class="formStyle">
    <div class="formdesign">
      <h1>EVENT DETAILS FORM</h1>
      <div class="inputStyle">
        <label>Event Name</label>
        <input type="text" v-model="eventName" class="form-control" placeholder="Event Name">
      </div>
      <div class="inputStyle">
        <label>Event Date</label>
        <input type="text" v-model="eventDate" class="form-control" placeholder="Event date">
      </div>
      <div class="inputStyle">
        <label>Event Place</label>
        <input type="text" v-model="eventPlace" class="form-control" placeholder="Event Place">
      </div>
      <div class="inputStyle">
        <label>Image to Upload</label>
        <input type="file" ref="input1" @change="previewImage" accept="image/*">
      </div>
      <button @click="uploadEventDetails()">UPLOAD EVENT DETAILS</button>
    </div>
    <!-- <button @click="uploadImage()">UPLOAD IMAGE</button>  -->

    <!-- <button @click="createEvent(eventName, eventDate, eventPlace)">CREATE EVENT</button>
  <button @click="deleteEvents()">Delete</button>
  <button @click="updateEvents()">Edit</button> -->
  </div>
</template>

<style scoped>
.formStyle {
  flex: 1;
  flex-direction: column;
  justify-content: center;
  margin: 2%;
  background-color: aquamarine;
  margin-top: 10%;
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