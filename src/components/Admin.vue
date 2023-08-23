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
      documentId: '',
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
      bookGroupId: '',
      TOKEN: '',
      EventsBucket,
      MitraRashmiBucket,
      BooksBucket,
      createMode: true,
      buttonText: 'Create',
      fileInputKey: 0,
    };
  },
  async created() {
    await fetchImageURL("logo.png").then(img => {
      this.TOKEN = getTokenFromUrl(img);
    })
  },
  computed: {
    buttonText(): string {
      return this.createMode ? 'Create' : 'Edit'
    }
  },
  methods: {
    clearImage() {
      this.fileInputKey++;
    },
    readEvents: async function () {
      const eventsRef = collection(db, EventsBucket);

      const querySnapshot = await getDocs(eventsRef);

      this.events = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          name: data.name,
          description: data.description,
          details: data.details,
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
    clearEvent: function () {
      this.createMode = true;
      this.eventName = '';
      this.eventdescription = '';
      this.eventdetails = '';
      this.eventimageName = '';
      this.eventjoiningLink = '';
      this.documentId = '';
      this.clearImage();
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
          this.clearEvent();
        })
        .catch((error) => {
          console.error("Error adding document", error);
        });
    },
    clearMagazine() {
      this.createMode = true;
      this.mitrarashmiTitle = '';
      this.mitrarashmiImage = '';
      this.mitrarashmiLink = '';
      this.clearImage();
      this.documentId = '';
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
          this.clearMagazine();
        })
        .catch((error) => {
          console.error("Error adding document", error);
        });
    },
    clearBook: function () {
      this.createMode = true;
      this.bookName = '';
      this.bookAuthor = '';
      this.bookDescription = '';
      this.bookImage = '';
      this.bookGroupId = '';
      this.clearImage();
      this.documentId = '';
    },
    createBook: async function (bookDetails: Book) {
      addDoc(collection(db, BooksBucket), {
        imageName: bookDetails.imageName,
        description: bookDetails.description,
        name: bookDetails.name,
        author: bookDetails.author,
        groupId: bookDetails.groupId
      })
        .then((docRef) => {
          console.log("Document added with id", docRef.id);
          this.readBooks();
          this.clearBook();
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
            case BooksBucket:
              this.readBooks();
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
    updateEvents: async function (Id: string) {

      this.uploadImage(EventsBucket);
      const DocRef = doc(db, EventsBucket, Id);
      updateDoc(DocRef, {
        description: this.eventdescription,
        details: this.eventdetails,
        imageName: this.eventimageName,
        joiningLink: this.eventjoiningLink,
        name: this.eventName
      }).then(() => {
        console.log("Document updated");
        this.createMode = false;
        this.readEvents();
        this.clearEvent();
      }).catch((error) => { });
    },
    updateBooks: async function (Id: string) {

      this.uploadImage(BooksBucket);
      const DocRef = doc(db, BooksBucket, Id);
      updateDoc(DocRef, {
        author: this.bookAuthor,
        description: this.bookDescription,
        groupId: this.bookGroupId,
        imageName: this.bookImage,
        name: this.bookName
      }).then(() => {
        console.log("Document updated");
        this.createMode = false;
        this.readBooks();
        this.clearBook();
      }).catch((error) => { });
    },
    updateMagazine: async function (Id: string) {

      this.uploadImage(MitraRashmiBucket);
      const DocRef = doc(db, MitraRashmiBucket, Id);
      updateDoc(DocRef, {
        title: this.mitrarashmiTitle,
        linkToMagazine: this.mitrarashmiLink,
        imageName: this.mitrarashmiImage,
      }).then(() => {
        console.log("Document updated");
        this.createMode = false;
        this.readMagazines();
        this.clearMagazine();
      }).catch((error) => { });
    },
    displayEventInForm: function (id: string) {
      let _event = this.events.find(e => e.id == id);
      if (_event !== undefined) {
        this.eventdescription = _event.description;
        this.eventdetails = _event.details;
        this.eventimageName = _event.imageName;
        this.eventjoiningLink = _event.joiningLink;
        this.eventName = _event.name;
        this.documentId = id;
        this.createMode = false;
      }
    },
    displayBookInForm: function (id: string) {
      let _event = this.books.find(e => e.id == id);
      if (_event !== undefined) {
        this.bookAuthor = _event.author;
        this.bookDescription = _event.description;
        this.bookImage = _event.imageName;
        this.bookName = _event.name;
        this.bookGroupId = _event.groupId;
        this.documentId = id;
        this.createMode = false;
      }
    },
    displayMagazineInForm: function (id: string) {
      let _event = this.magazines.find(e => e.id == id);
      if (_event !== undefined) {
        this.mitrarashmiImage = _event.imageName;
        this.mitrarashmiLink = _event.linkToMagazine;
        this.mitrarashmiTitle = _event.title;
        this.documentId = id;
        this.createMode = false;
      }
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
        <th>Edit</th>
        <th>Delete</th>
      </tr>
      <tr v-for="item in events">
        <td>{{ (item.name) }}</td>
        <td>{{ item.description }}</td>
        <td><a :href="getImageUrl(EventsBucket, item.imageName)" target="_blank">{{ item.imageName }}</a></td>
        <td>{{ item.joiningLink }}</td>
        <td><button @click="displayEventInForm(item.id)">Edit</button></td>
        <td><button @click="deleteDocument(EventsBucket, item.id)">Delete</button></td>
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
          <textarea rows="10" cols="50" v-model="eventdescription" class="form-control"
            placeholder="Event description"></textarea>
        </div>
        <div class="inputStyle">
          <label>Link</label>
          <input type="text" v-model="eventjoiningLink" class="form-control" placeholder="Event link">
        </div>
        <div v-if="!createMode && eventimageName !== ''" class="inputStyle">
          <label>Current selected image</label>
          <label>{{ eventimageName }}</label>
        </div>
        <div class="inputStyle">
          <label>Image to Upload</label>
          <input type="file" :key="fileInputKey" @change="previewEventImage" accept="image/*">
        </div>
        <div>
          <button v-text="buttonText" class="w3-margin w3-padding-small"
            @click="createMode ? uploadEventDetails() : updateEvents(documentId)"></button>
          <button v-if="!createMode" class="w3-margin w3-padding-small" @click="clearEvent()">Cancel</button>
        </div>
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
        <th>Edit</th>
        <th>Delete</th>
      </tr>
      <tr v-for="item in magazines">
        <td>{{ (item.title) }}</td>
        <td><a :href="getImageUrl(MitraRashmiBucket, item.imageName)" target="_blank">{{ item.imageName }}</a></td>
        <td>{{ item.linkToMagazine }}</td>
        <td><button @click="displayMagazineInForm(item.id)">Edit</button></td>
        <td><button @click="deleteDocument(MitraRashmiBucket, item.id)">Delete</button></td>
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
        <div v-if="!createMode && mitrarashmiImage !== ''" class="inputStyle">
          <label>Current selected image</label>
          <label>{{ mitrarashmiImage }}</label>
        </div>
        <div class="inputStyle">
          <label>Image to Upload</label>
          <input type="file" :key="fileInputKey" @change="previewMagazineImage" accept="image/*">
        </div>
        <div>
          <button v-text="buttonText" class="w3-margin w3-padding-small"
            @click="createMode ? uploadMagazineDetails() : updateMagazine(documentId)"></button>
          <button v-if="!createMode" class="w3-margin w3-padding-small" @click="clearMagazine()">Cancel</button>
        </div>
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
        <th>description</th>
        <th>Author</th>
        <!-- <th>Group Id</th> -->
        <th>Delete</th>
      </tr>
      <tr v-for="item in books">
        <td>{{ (item.name) }}</td>
        <td><a :href="getImageUrl(BooksBucket, item.imageName)" target="_blank">{{ item.imageName }}</a></td>
        <td>{{ item.description }}</td>
        <td>{{ item.author }}</td>
        <td><button @click="displayBookInForm(item.id)">Edit</button></td>
        <td><button @click="deleteDocument(BooksBucket, item.id)">Delete</button></td>
      </tr>
    </table>
    <div class="formStyle">
      <div class="formdesign">
        <h1>ಪ್ರಕಟಣೆಗಳ FORM</h1>
        <div class="inputStyle">
          <label>Title</label>
          <input type="text" v-model="bookName" class="form-control" placeholder="book title">
        </div>
        <div class="inputStyle">
          <label>Description</label>
          <textarea rows="10" cols="50" v-model="bookDescription" class="form-control"
            placeholder="Description"></textarea>
        </div>
        <div class="inputStyle">
          <label>author</label>
          <input type="text" v-model="bookAuthor" class="form-control" placeholder="author">
        </div>
        <div class="inputStyle">
          <label>Group Id</label>
          <input type="text" v-model="bookGroupId" class="form-control" placeholder="Group Id">
        </div>
        <div v-if="!createMode && bookImage !== ''" class="inputStyle">
          <label>Current selected image</label>
          <label>{{ bookImage }}</label>
        </div>
        <div class="inputStyle">
          <label>Image to Upload</label>
          <input type="file" @change="previewBookImage" :key="fileInputKey" accept="image/*">
        </div>

        <div>
          <button v-text="buttonText" class="w3-margin w3-padding-small"
            @click="createMode ? uploadBookDetails() : updateBooks(documentId)"></button>
          <button v-if="!createMode" class="w3-margin w3-padding-small" @click="clearBook()">Cancel</button>
        </div>
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

input[type=text] {
  width: 400px;
}
</style>