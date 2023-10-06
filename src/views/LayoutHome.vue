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
    <header class="w3-container w3-teal w3-center" style="padding:64px 16px">
        <h1 class="w3-margin w3-jumbo">ಮೈತ್ರೀ ಸಂಸ್ಕೃತ-ಸಂಸ್ಕೃತಿ ಪ್ರತಿಷ್ಠಾನಮ್</h1>

        <!-- <div class="w3-bar-item w3-padding-large">
            <img src="@/assets/mythree-logo.png" alt="Logo" class="w3-image" style="max-height: 150px;">
        </div> -->
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
                <h1>Mythree is a not-for-profit organisation making an earnest attempt to revamp and re-join the soul of
                    Indian Culture, Indian Heritage and National Pride</h1>
                <!-- <h5 class="w3-padding-32">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.</h5>

                <p class="w3-text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.</p> -->
            </div>

            <div class="w3-third w3-center">
                <img src="@/assets/mythree-logo.png" alt="Logo" class="w3-image" style="max-height: 150px;">
            </div>
        </div>
    </div>

    <div class="w3-row-padding w3-light-grey w3-padding-64 w3-container">
        <div class="w3-content">
            <div class="w3-third w3-center">
                <img src="@/assets/ganapathi-hegde.png" alt="Logo" class="w3-image" style="max-height: 150px;">
            </div>
            <div class="w3-twothird">
                <h1>ಮಿತ್ರರಶ್ಮಿ ಮಾಸಪತ್ರಿಕೆ</h1>
                <h3>ಡಾ| ಗಣಪತಿ ಹೆಗಡೆ, ಪ್ರಧಾನ ಸಂಪಾದಕರು</h3>
                <h5 class="w3-padding-32"> ಪ್ರಕಟಣೆಗಳನ್ನು ಓದಲು,
                    <router-link :to="{ name: 'mitrarashmi' }" class="">ಇಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿ</router-link>
                </h5>
            </div>
        </div>

        <div class="w3-content">
            <div class="w3-twothird">
                <h1>ಕಾರ್ಯಕ್ರಮಗಳು</h1>
                <h3 class="w3-padding-32"> ನಮ್ಮ ಕಾರ್ಯಕ್ರಮಗಳಲ್ಲಿ ನಮ್ಮೊಂದಿಗೆ ಸೇರಿಕೊಳ್ಳಿ,
                    <router-link :to="{ name: 'events' }" class="">ಇಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿ</router-link>
                </h3>
            </div>
        </div>

        <div class="w3-content">
            <div class="w3-twothird">
                <h1>ಪ್ರಕಟಣೆಗಳು</h1>
                <h3>ಯಾವುದೇ ವಯೋಮಾನದವರಿಗೂ ಸುಲಭವಾಗಿ ಸಂಸ್ಕೃತ ಕಲಿಯಲು
                    ಮೈತ್ರೀ ಸಂಸ್ಕೃತ ಸಂಸ್ಕೃತಿ ಪ್ರತಿಷ್ಠಾನವು ಈ ಪುಸ್ತಕಗಳನ್ನು ಪ್ರಕಟಿಸಿದೆ</h3>
                <h5 class="w3-padding-32"> ಪುಸ್ತಕಗಳ ಪಟ್ಟಿಯನ್ನು ನೋಡಲು,
                    <router-link :to="{ name: 'books' }" class="">ಇಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿ</router-link>
                </h5>
            </div>
            <!-- <div class="w3-third w3-center">
                <img src="@/assets/ganapathi-hegde.png" alt="Logo" class="w3-image" style="max-height: 150px;">
            </div> -->
        </div>

        <div class="w3-content">
            <!-- <div class="w3-third w3-center">
                <img src="@/assets/ganapathi-hegde.png" alt="Logo" class="w3-image" style="max-height: 150px;">
            </div> -->
            <div class="w3-twothird">
                <h1>ಸುಭಾಷಿತಗಳು</h1>
                <h3>ಸಂಗ್ರಹ: ಡಾ| ಗಣಪತಿ ಹೆಗಡೆ</h3>
                <h5 class="w3-padding-16"> ಆರೋಗ್ಯ ಸುಭಾಷಿತಗಳನ್ನು ಓದಲು,
                    <router-link :to="{ name: 'arogyasubashita' }" class="">ಇಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿ</router-link>
                </h5>
                <h5 class="w3-padding-16"> ನಿತ್ಯ ಸುಭಾಷಿತಗಳನ್ನು ಓದಲು,
                    <router-link :to="{ name: 'nityasubashita' }" class="">ಇಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿ</router-link>
                </h5>
                <h5 class="w3-padding-16"> ಸಂಸ್ಕೃತ ಪಾಠಗಳನ್ನು ಓದಲು,
                    <a href="https://www.facebook.com/samskrutagurukulam" target="_blank">ಇಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿ</a>
                </h5>
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

    <!-- <p>ಭಾಷೆಯನ್ನು ಪರಿಶುದ್ಧವಾಗಿ ಉಚ್ಚರಿಸಲು ಈ ನಿಯಮಗಳನ್ನು
        ಅನುಸರಿಸಬಹುದು.

        1. ಪದಗಳನ್ನು, ವಾಕ್ಯಗಳನ್ನು ಕನಿಷ್ಠ ಹತ್ತು ಬಾರಿ ಜೋರಾಗಿ ಓದಿಕೊಳ್ಳಬೇಕು.

        2. ಅಲ್ಪಪ್ರಾಣ, ಮಹಾಪ್ರಾಣ ಅಕ್ಷರಗಳು ಬ೦ದಾಗ ಪ್ರಯತ್ನಪೂರ್ವಕವಾಗಿ ಉಚ್ಚರಿಸಬೇಕು,

        3. ಹಸ್ವ-ದೀರ್ಫ ವರ್ಣಗಳನ್ನು ಸರಿಯಾಗಿ ಗಮನವಿರಿಸಿ ಉಚ್ಚರಿಸಬೇಕು.

        4. ಸಂಸ್ಕೃತಕ್ಕೆ ಸಂಬಂಧಿಸಿದ ಚಿಕ್ಕ-ಪುಟ್ಟ ಪುಸ್ತಕಗಳನ್ನು ಸಂಗ್ರಹಿಸಿ, ಓದಬೇಕು.

        5. ಯಾವುದೇ ಪುಸ್ತಕಗಳನ್ನು ಮೊದಲ ಬಾರಿಗೆ ಓದಿದಾಗ ಅದು ಅರ್ಥವಾಗದಿದ್ದರೂ
        ಮತ್ತೆ ಮತ್ತೆ ಓದಿ ಅರ್ಥೈಸಿಕೊಳ್ಳಲು ಪ್ರಯತ್ನಿಸಬೇಕು.

        6. ಭಾಷೆಯ ಅಭ್ಯಾಸ ಮಾಡುವಾಗ ಇನ್ನೊಬ್ಬರು ಜೊತೆಗಿದ್ದರೆ ಉತ್ತಮ. ಇದರಿಂದ
        ಪರಸ್ಪರವಾಗಿ ವಿಚಾರಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳಲು ಹಾಗೂ ಅಭ್ಯಾಸ ಮಾಡಲು
        ಸಹಾಯವಾಗುತ್ತದೆ.

        ಸ್‌ ಉಚ್ಚಾರಣೆಯ ಸ್ಪಷ್ಟತೆಗಾಗಿ ಸಂಸ್ಕೃತ ತಿಳಿದವರೊಂದಿಗೆ ವ್ಯವಹರಿಸಿದರೆ ಬೇಗ
        ಅಭ್ಯಾಸವಾಗುತ್ತದೆ.

        8. ಸರಳ ಶಬ್ದಕೋಶಗಳು, ಲಘುವ್ಯವಹಾರವಾಕ್ಯಗಳು, ಲಘು ಕಥಾಪುಸ್ತಕಗಳು,
        ಸುಭಾಷಿತಶ್ಲೋಕಗಳ ಸ೦ಗ್ರಹಪುಸ್ತಕ ಹಾಗೂ ಸ೦ಸ್ಕೃತಭಾಷೆಯ ಕಲಿಕೆಗೆ
        ಪೂರಕವಾಗಿರುವ ಯಾವುದೇ ಪುಸ್ತಕಗಳನ್ನು ನಿರಂತರವಾಗಿ ಅಭ್ಯಾಸ ಮಾಡುವುದನ್ನು
        ರೂಢಿಸಿಕೊಳ್ಳಬೇಕು.

        ೬೦

        - ಪಾಠಗಳಲ್ಲಿನ ಪದಗಳನ್ನು ವಾಕ್ಕಗಳನ್ನು ಆದರ್ಶವಾಗಿಟ್ಟುಕೊಂಡು ಅದೇ ರೀತಿಯ
        ಸಂಭಾಷಣೆಗಳನ್ನು ನಿರ್ಮಿಸುವುದರಿಂದ ಭಾಷೆ ಬೇಗ ಅಭ್ಯಾಸವಾಗುವುದು.

        10. ತ7೫ ೧5 ೫7೫7 । ಕಲಿತ ವಿದ್ಯೆಯನ್ನು ಅಭ್ಯಾಸದಲ್ಲಿಟ್ಟುಕೊಳ್ಳದಿದ್ದರೆ ವಿದ್ಯೆ
        ವಿಷದಂತೆ.

        `ಸ

        1... ಸಂಸ್ಕೃತದ ಪದಗಳನ್ನು ಉಚ್ಚರಿಸುವಾಗ ಬಹಳ ಜಾಗರೂಕತೆಯಿರಜೇಕಷ್ಟೇ.
        ತಪಾಗಬಹುದೆ೦ಂಬ ಭಯದಿಂದ ಬಳಸದೆಯೂ ಬಿಡಬಾರದು.

        [ತ

        12. ಮಗು ಹೆಜ್ಜೆಯಿಡುವುದನ್ನು ಕಲಿತಂತೆಯೇ ನಾವು ಭಾಷಾಭ್ಯಾಸವನ್ನು ಮಾಡಬೇಕು.
        ಆರಂಭದಲ್ಲಿ ತಪ್ಪುಗಳಾಗುವುದು ಸಹಜ.

        13. ಭಾಷೆಯನ್ನು ಬಲ್ಲವರೊಂದಿಗೆ ವ್ಯವಹರಿಸಿ ದೋಷಗಳನ್ನು ಶುದ್ಧಮಾಡಿ ಕೊಳ್ಳದೇಜಿ.

    </p> -->

    <div class="w3-container w3-black w3-center w3-opacity w3-padding-64">
        <h1 class="w3-margin w3-xlarge">ತ್ವಂ ಜ್ಞಾನಮಯೋ ವಿಜ್ಞಾನಮಯೋಸಿ</h1>
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