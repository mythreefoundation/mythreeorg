<script lang="ts">
import { db } from "../../firestore";
import { collection, addDoc, deleteDoc, doc, updateDoc, getDocs } from "firebase/firestore";
import { uploadFile, getFullUrlPath, fetchImageURL, getTokenFromUrl, deleteFile } from '../../utils/utils';
import { type Event, EventsBucket, type MitraRashmi, MitraRashmiBucket, type Book, BooksBucket } from '../../utils/models';



export default {
    data() {
        return {
            magazines: [] as MitraRashmi[],
            file: {},
            documentId: '',
            mitrarashmiTitle: '',
            mitrarashmiLink: '',
            mitrarashmiImage: '',
            mitrarashmiDate: new Date(),
            MitraRashmiBucket,
            createMode: true,
            buttonText: 'Create',
            fileInputKey: 0,
        };
    },
    methods: {
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
        getImageUrl(imageName: string) {
            return getFullUrlPath(MitraRashmiBucket, imageName, this.TOKEN);
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
        clearMagazine() {
            this.createMode = true;
            this.mitrarashmiTitle = '';
            this.mitrarashmiImage = '';
            this.mitrarashmiLink = '';
            this.clearImage();
            this.documentId = '';
        },
        previewMagazineImage: function (event: any) {
            this.file = event.target.files[0]
            this.mitrarashmiImage = event.target.files[0].name;
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
    }
}
</script>

<template>
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
            <td><a :href="getImageUrl(item.imageName)" target="_blank">{{ item.imageName }}</a></td>
            <td>{{ item.linkToMagazine }}</td>
            <td><button @click="displayMagazineInForm(item.id)">Edit</button></td>
            <!-- <td><button @click="deleteDocument(MitraRashmiBucket, item.imageName, item.id)">Delete</button></td> -->
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
</template>
