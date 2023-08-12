<script lang="ts">
import { fetchImagesURL } from '../utils/utils';

export default {
    data() {
        return {
            publicPath: import.meta.env.BASE_URL,
            latestNews: [] as string[],

        }
    },
    async created() {
        await fetchImagesURL("news").then(news => {
            this.latestNews = news;
        });
    },
}
</script>

<template>
    <header class="w3-container w3-teal w3-center" style="padding:128px 16px">
        <h1 class="w3-margin w3-jumbo">ಮೈತ್ರೀ ಸಂಸ್ಕೃತ-ಸಂಸ್ಕೃತಿ ಪ್ರತಿಷ್ಠಾನಮ್</h1>
        <!-- <p class="w3-xlarge">Template by w3.css</p>
        <button class="w3-button w3-black w3-padding-large w3-large w3-margin-top">Get Started</button> -->

        <div class="w3-bar-item w3-padding-large">
            <img src="@/assets/mythree-logo.png" alt="Logo" class="w3-image" style="max-height: 150px;">
        </div>
    </header>

    <h2 class="w3-text-teal w3-center">ಇತ್ತೀಚಿನ ಸುದ್ದಿಗಳು</h2>

    <div class="w3-content w3-row-padding w3-display-container w3-padding-large" style="max-width:800px">
        <div class="w3-image-container" style="height: 500px; display: flex; justify-content: center;">
            <a v-for="newsImgUrl in latestNews" :href="`${newsImgUrl}`" target="_blank">
                <img class="mySlides" alt="slidingImages" :src="`${newsImgUrl}`"
                    style="width:100%;max-width: 100%; max-height: 100%;">
            </a>
        </div>

        <!-- <img class="mySlides" :src="`${publicPath}./events/seniors.jpg`" style="width:100%"> -->

        <!-- <div class="w3-center w3-container w3-section w3-large w3-text-white w3-display-bottommiddle" style="width:100%">
            <div class="w3-left w3-hover-text-khaki" onclick="plusDivs(-1)">&#10094;</div>
            <div class="w3-right w3-hover-text-khaki" onclick="plusDivs(1)">&#10095;</div>
            <span class="w3-badge demo w3-border w3-transparent w3-hover-white" onclick="currentDiv(1)"></span>
            <span class="w3-badge demo w3-border w3-transparent w3-hover-white" onclick="currentDiv(2)"></span>
            <span class="w3-badge demo w3-border w3-transparent w3-hover-white" onclick="currentDiv(3)"></span>
        </div> -->

        <!-- <div class="w3-center">
            <div class="w3-section">
                <button class="w3-button w3-light-grey" onclick="plusDivs(-1)">❮ Prev</button>
                <button class="w3-button w3-light-grey" onclick="plusDivs(1)">Next ❯</button>
            </div>
            <button class="w3-button demo" onclick="currentDiv(1)">1</button>
            <button class="w3-button demo" onclick="currentDiv(2)">2</button>
            <button class="w3-button demo" onclick="currentDiv(3)">3</button>
        </div> -->
    </div>

    <div class="w3-row-padding w3-padding-64 w3-container">
        <div class="w3-content">
            <div class="w3-twothird">
                <h1>Lorem ipsum</h1>
                <h5 class="w3-padding-32">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.</h5>

                <p class="w3-text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>

            <div class="w3-third w3-center">
                <i class="fa fa-anchor w3-padding-64 w3-text-red"></i>
            </div>
        </div>
    </div>

    <div class="w3-row-padding w3-light-grey w3-padding-64 w3-container">
        <div class="w3-content">
            <div class="w3-third w3-center">
                <i class="fa fa-coffee w3-padding-64 w3-text-red w3-margin-right"></i>
            </div>

            <div class="w3-twothird">
                <h1>Lorem Ipsum</h1>
                <h5 class="w3-padding-32">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.</h5>

                <p class="w3-text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </div>
    </div>

    <div class="w3-container w3-black w3-center w3-opacity w3-padding-64">
        <h1 class="w3-margin w3-xlarge">Quote of the day: live life</h1>
    </div>
</template>

<style scoped>
.mySlides {
    display: none
}

.w3-left,
.w3-right,
.w3-badge {
    cursor: pointer
}

.w3-badge {
    height: 13px;
    width: 13px;
    padding: 0
}
</style>