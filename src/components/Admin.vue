<script setup lang="ts">

</script>
<script lang="ts">
import { db } from "../firestore";
import { collection, addDoc, deleteDoc, doc, updateDoc, getDocs } from "firebase/firestore";
import { uploadFile, getFullUrlPath, fetchImageURL, getTokenFromUrl } from '../utils/utils';
import { type Event, EventsBucket, type MitraRashmi, MitraRashmiBucket, type Book, BooksBucket } from '../utils/models';

export default {
  data() {
    return {
      events: [] as Event[],
      magazines: [] as MitraRashmi[],
      books: [] as Book[],
      file: {},
      eventName: '',
      eventdescription: '',
      eventdetails: '',
      eventjoiningLink: '',
      eventimageName: '',
      mitrarashmiTitle: '',
      mitrarashmiLink: '',
      mitrarashmiImage: '',
      bookName: '',
      bookImage: '',
      bookDescription: '',
      bookAuthor: '',
      TOKEN: '',
      EventsBucket,
      MitraRashmiBucket,
      BooksBucket
    };
  },
  async created() {
    await fetchImageURL("logo.png").then(img => {
      this.TOKEN = getTokenFromUrl(img);
    })
  },
  methods: {
    readEvents: async function () {
      const eventsRef = collection(db, EventsBucket);

      const querySnapshot = await getDocs(eventsRef);

      this.events = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          name: data.name,
          description: data.description,
          details: data.detail,
          imageName: data.imageName,
          joiningLink: data.joiningLink
        };
      });

    },
    readMagazines: async function () {
      const magzRef = collection(db, MitraRashmiBucket);

      const querySnapshot = await getDocs(magzRef);

      this.magazines = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          title: data.title,
          imageName: data.imageName,
          linkToMagazine: data.linkToMagazine
        };
      });

    },
    readBooks: async function () {
      const magzRef = collection(db, BooksBucket);

      const querySnapshot = await getDocs(magzRef);

      this.books = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          name: data.name,
          imageName: data.imageName,
          description: data.description,
          author: data.author,
          groupId: "2",
        };
      });

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
    createMagazine: async function (magazineDetails: MitraRashmi) {
      addDoc(collection(db, MitraRashmiBucket), {
        imageName: magazineDetails.imageName,
        linkToMagazine: magazineDetails.linkToMagazine,
        title: magazineDetails.title,
      })
        .then((docRef) => {
          console.log("Document added with id", docRef.id);
          this.readMagazines();

        })
        .catch((error) => {
          console.error("Error adding document", error);
        });
    },
    createBook: async function (bookDetails: Book) {
      addDoc(collection(db, BooksBucket), {
        imageName: bookDetails.imageName,
        description: bookDetails.description,
        name: bookDetails.name,
        author: bookDetails.author
      })
        .then((docRef) => {
          console.log("Document added with id", docRef.id);
          this.readMagazines();

        })
        .catch((error) => {
          console.error("Error adding document", error);
        });
    },
    deleteDocument: async function (bucketName: string, Id: string) {
      // Using then
      deleteDoc(doc(db, bucketName, Id))
        .then(() => {
          console.log("Document deleted");
          // alert("Event successfully deleted");
          switch (bucketName) {
            case EventsBucket:
              this.readEvents();
              break;
            case MitraRashmiBucket:
              this.readMagazines();
              break;
            default:
              break;
          }
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
    previewEventImage: function (event: any) {
      this.file = event.target.files[0]
      this.eventimageName = event.target.files[0].name;
    },
    previewMagazineImage: function (event: any) {
      this.file = event.target.files[0]
      this.mitrarashmiImage = event.target.files[0].name;
    },
    previewBookImage: function (event: any) {
      this.file = event.target.files[0]
      this.bookImage = event.target.files[0].name;
    },
    uploadImage: async function (bucketName: string) {

      if ((this.file as { name: string }).name != undefined) {
        uploadFile(bucketName, this.file)
      }
      else {
        alert("No Image uploaded")
      }
    },
    uploadEventDetails: async function () {

      this.uploadImage(EventsBucket);
      this.createEvent({
        description: this.eventdescription,
        details: this.eventdetails,
        id: "-1",
        imageName: this.eventimageName,
        joiningLink: this.eventjoiningLink,
        name: this.eventName
      });
    },
    uploadMagazineDetails: async function () {

      this.uploadImage(MitraRashmiBucket);
      this.createMagazine({
        id: "-1",
        imageName: this.mitrarashmiImage,
        linkToMagazine: this.mitrarashmiLink,
        title: this.mitrarashmiTitle
      });
    },
    uploadBookDetails: async function () {

      this.uploadImage(BooksBucket);
      this.createBook({
        id: "-1",
        imageName: this.bookImage,
        name: this.bookName,
        description: this.bookDescription,
        author: this.bookAuthor,
        groupId: "2"
      });
    },
    getImageUrl(bucketName: string, imageName: string) {
      return getFullUrlPath(bucketName, imageName, this.TOKEN);
    }

  }, mounted() {
    this.readEvents();
    this.readMagazines();
    this.readBooks();
  }
};
</script>
<template>
  <header class="w3-container w3-teal w3-center" style="padding:64px 16px">
    <h3 class="w3-margin w3-jumbo">Admin</h3>
  </header>

  <div class="w3-bar w3-gray w3-margin">
    <button class="w3-bar-item w3-button tablink w3-teal" onclick="openCity(event,'events')">ಕಾರ್ಯಕ್ರಮಗಳು</button>
    <button class="w3-bar-item w3-button tablink" onclick="openCity(event,'mitrarashmi')">ಮಿತ್ರರಶ್ಮಿ</button>
    <button class="w3-bar-item w3-button tablink" onclick="openCity(event,'books')">ಪ್ರಕಟಣೆಗಳು</button>
  </div>

  <div id="events" class="w3-row-padding w3-padding-32 w3-container w3-border city"
    style="padding-bottom: 0px!important;">
    <p class="w3-center w3-xlarge">ಕಾರ್ಯಕ್ರಮಗಳು</p>
    <table class="w3-table">
      <tr>
        <th>Event Name</th>
        <th>Description</th>
        <th>Image</th>
        <th>Joining Link</th>
        <th>Delete</th>
      </tr>
      <tr v-for="item in events">
        <td>{{ (item.name) }}</td>
        <td>{{ item.description }}</td>
        <td><a :href="getImageUrl(EventsBucket, item.imageName)" target="_blank">{{ item.imageName }}</a></td>
        <td>{{ item.joiningLink }}</td>
        <button @click="deleteDocument(EventsBucket, item.id)">Delete</button>
        <!-- <button @click="updateEvents(item.id, 'Jiyan', '27 Aug')">Edit</button> -->
      </tr>
    </table>

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
        <div class="inputStyle">
          <label>Link</label>
          <input type="text" v-model="eventjoiningLink" class="form-control" placeholder="Event joiningLink">
        </div>
        <div class="inputStyle">
          <label>Image to Upload</label>
          <input type="file" @change="previewEventImage" accept="image/*">
        </div>
        <button class="w3-margin w3-padding-small" @click="uploadEventDetails()">CREATE</button>
      </div>
    </div>
  </div>

  <div id="mitrarashmi" class="w3-row-padding w3-padding-32 w3-container w3-border city"
    style="padding-bottom: 0px!important; display:none">
    <p class="w3-center w3-xlarge">ಮಿತ್ರರಶ್ಮಿ</p>
    <table class="w3-table">
      <tr>
        <th>title</th>
        <th>Image</th>
        <th>Link</th>
        <th>Delete</th>
      </tr>
      <tr v-for="item in magazines">
        <td>{{ (item.title) }}</td>
        <td><a :href="getImageUrl(MitraRashmiBucket, item.imageName)" target="_blank">{{ item.imageName }}</a></td>
        <td>{{ item.linkToMagazine }}</td>
        <button @click="deleteDocument(MitraRashmiBucket, item.id)">Delete</button>
      </tr>
    </table>

    <div class="formStyle">
      <div class="formdesign">
        <h1>ಮಿತ್ರರಶ್ಮಿ FORM</h1>
        <div class="inputStyle">
          <label>Title</label>
          <input type="text" v-model="mitrarashmiTitle" class="form-control" placeholder="Magazine title">
        </div>
        <div class="inputStyle">
          <label>Link</label>
          <input type="text" v-model="mitrarashmiLink" class="form-control" placeholder="Link to magazine">
        </div>
        <div class="inputStyle">
          <label>Image to Upload</label>
          <input type="file" @change="previewMagazineImage" accept="image/*">
        </div>
        <button class="w3-margin w3-padding-small" @click="uploadMagazineDetails()">CREATE</button>
      </div>
    </div>
  </div>

  <div id="books" class="w3-row-padding w3-padding-32 w3-container w3-border city"
    style="padding-bottom: 0px!important; display:none">
    <p class="w3-center w3-xlarge">ಪ್ರಕಟಣೆಗಳು</p>

    <table class="w3-table">
      <tr>
        <th>title</th>
        <th>Image</th>
        <th>Author</th>
        <th>Delete</th>
      </tr>
      <tr v-for="item in books">
        <td>{{ (item.name) }}</td>
        <td><a :href="getImageUrl(BooksBucket, item.imageName)" target="_blank">{{ item.imageName }}</a></td>
        <td>{{ item.author }}</td>
        <button @click="deleteDocument(BooksBucket, item.id)">Delete</button>
      </tr>
    </table>
    <div class="formStyle">
      <div class="formdesign">
        <h1>ಪ್ರಕಟಣೆಗಳ FORM</h1>
        <div class="inputStyle">
          <label>Title</label>
          <input type="text" v-model="mitrarashmiTitle" class="form-control" placeholder="Magazine title">
        </div>
        <div class="inputStyle">
          <label>Link</label>
          <input type="text" v-model="mitrarashmiLink" class="form-control" placeholder="Link to magazine">
        </div>
        <div class="inputStyle">
          <label>Image to Upload</label>
          <input type="file" @change="previewBookImage" accept="image/*">
        </div>
        <button class="w3-margin w3-padding-small" @click="uploadBookDetails()">CREATE</button>
      </div>
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