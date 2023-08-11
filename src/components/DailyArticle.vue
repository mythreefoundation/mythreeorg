<script lang="ts">
import { storage } from '../firestore';
import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";
import { getTokenFromUrl } from '../utils/utils';

export default {
    data() {
        return {
            TOKEN: '',
            publicPath: import.meta.env.BASE_URL,
            imageUrl: '',
            images: [] as string[],
            selectedImageUrl: ''
        };
    },
    async created() {
        // Call a function to fetch the image URL from Firebase Storage
        await this.fetchImageURL();
    },
    methods: {

        async fetchImageURL() {
            try {
                getDownloadURL(ref(storage, 'books/amarakosha.jpg')).then(url => {
                    this.imageUrl = url
                })

                listAll(ref(storage, 'arogya_subashita')).then(res => {

                    // Loop through the items array on the result object
                    res.items.forEach((itemRef) => {
                        // Get the download URL for each image
                        getDownloadURL(itemRef)
                            .then((imgUrl) => {
                                // Do something with the image URL, such as displaying it
                                this.images.push(imgUrl);
                            })
                            .catch((error) => {
                                // Handle any errors
                                console.error(error);
                            });
                    });

                })
            } catch (error) {
                console.error('Error fetching image URL:', error);
            }
        },

        handleClick(imgUrl: string) {
            this.selectedImageUrl = imgUrl;
            document.getElementById('id01')!.style.display='block';
        }
    }
}

</script>

<script lang="ts">



</script>

<template>
    <header class="w3-container w3-teal w3-center" style="padding:64px 16px">
        <h3 class="w3-margin w3-jumbo">ನಮ್ಮ ಪ್ರಕಟಣೆಗಳು</h3>
        <p class="w3-xlarge">ಯಾವುದೇ ವಯೇಮಾನದವರಿಗೂ ಸುಲಭವಾಗಿ ಸಂಸಕೃತ ಕಲಿಯಲು
            ಮೈತ್ರೇ ಸಂಸಕೃತ-ಸಂಸಕೃತ್ ಪ್ರತ್ಷ್ಠಾನವು
            ಈ ಪುಸತಕಗಳನುು ಪ್ರಕಟಿಸಿದ.</p>
    </header>

    <div class="w3-row-padding w3-padding-64 w3-container">
        <div v-for="imgUrl in images" class="w3-third w3-container w3-margin-bottom"
            style="box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
            <div class="w3-image-container"
                style="height: 300px; display: flex; align-items: center; justify-content: center;">

                    <img :src="`${imgUrl}`" alt="image" style="max-width: 100%; max-height: 100%;" v-on:click="handleClick(imgUrl)">
            </div>
        </div>

    </div>

    <div id="id01" class="w3-modal">
        <div class="w3-modal-content">
            <div class="w3-container">
                <span onclick="document.getElementById('id01').style.display='none'"
                    class="w3-button w3-display-topright">&times;</span>
                <div class="w3-image-container"
                    style="height: 500px; display: flex; align-items: center; justify-content: center;">

                    <img :src="`${selectedImageUrl}`" alt="image" style="max-width: 100%; max-height: 100%;">

                </div>
            </div>
        </div>
    </div>
</template>


<style scoped></style>