<script lang="ts">
import { getTokenFromUrl, fetchImageURL, getFullUrlPath, fetchFileNames } from '../utils/utils';

export default {
    props: {
        title: {
            type: String,
            required: true
        },
        folderName: {
            type: String,
            required: true
        },
        img1: {
            type: String,
            required: true
        },
        img2: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            TOKEN: '' as string,
            publicPath: import.meta.env.BASE_URL,
            allImages: [] as string[],
            displayedImages: [] as string[],
            selectedImageUrl: '',
            currentIndex: 0,
            stepCount: 10
        };
    },
    async created() {
        // await fetchImagesURL(this.folderName).then(images => {
        //     this.allImages = images;
        //     this.loadImages();
        // });

        await fetchImageURL("logo.png").then(img => {
            this.TOKEN = getTokenFromUrl(img);
        })

        await fetchFileNames(this.folderName).then(fileNames => {
            fileNames.
                sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())).
                forEach((fileName) => {
                    let imgUrl = getFullUrlPath(this.folderName, fileName, this.TOKEN);
                    this.allImages.push(imgUrl);
                })

            this.loadImages();
        });


    },
    methods: {
        handleClick(imgUrl: string) {
            this.selectedImageUrl = imgUrl;
            document.getElementById('modal-id')!.style.display = 'block';
        },

        loadImages() {
            for (let i = this.currentIndex; i < Math.min(this.currentIndex + this.stepCount, this.allImages.length); i++) {
                this.displayedImages.push(this.allImages[i]);
            }
            this.currentIndex += this.stepCount;
        },

        getImagePath(imgName: string){
            return "src/assets/logo/" + imgName;
        }
    }
}

</script>

<template>
    <header class="w3-container w3-teal w3-center header-padding gradient">
        <div class="w3-container header">
            <img src="@/assets/logo/om.png" class="w3-hide-small" alt="Logo Left" />
            <h3 class="w3-margin w3-xxlarge">{{ title }}</h3>
            <img class="right w3-hide-small" src="@/assets/logo/folded-hands.png" alt="Logo Right" />
        </div>

        <!-- <p class="w3-xlarge"></p> -->
    </header>

    <div class="w3-row-padding w3-padding-32 w3-container" style="padding-bottom: 0px!important;">
        <h2 class="w3-center" v-if="allImages.length == 0">Loading...</h2>
        <p class="w3-center" v-else>Displaying {{ displayedImages.length }} of {{ allImages.length }} images</p>

        <div v-for="imgUrl in displayedImages" class="w3-third w3-container w3-margin-bottom"
            style="box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
            <div class="w3-image-container"
                style="height: 300px; display: flex; align-items: center; justify-content: center;">

                <img :src="`${imgUrl}`" alt="image" style="max-width: 100%; max-height: 100%;"
                    v-on:click="handleClick(imgUrl)">
            </div>
        </div>

    </div>
    <div class="w3-padding-small w3-center">
        <button type="button" class="w3-button w3-teal w3-padding-large w3-large" v-if="currentIndex < allImages.length"
            @click="loadImages">Load more...</button>
    </div>
    <div id="modal-id" class="w3-modal">
        <div class="w3-modal-content">
            <div class="w3-container">
                <span onclick="document.getElementById('modal-id').style.display='none'"
                    class="w3-button w3-display-topright w3-padding-large w3-xxlarge">&times;</span>
                <div class="w3-image-container" style="height: 500px; display: flex; justify-content: center;">

                    <img :src="`${selectedImageUrl}`" alt="image" style="max-width: 100%; max-height: 100%;">

                </div>
            </div>
        </div>
    </div>
</template>


<style scoped></style>