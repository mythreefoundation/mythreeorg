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
                <h1>Mythree is a not-for-profit organisation making an earnest attempt to revamp and re-join the soul of Indian Culture, Indian Heritage and National Pride</h1>
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
                <h1>ಸಂಪಾದಕವಚನರಶ್ಮಿ</h1>
                <h3>ಡಾ| ಗಣಪತಿ ಹೆಗಡೆ, ಪ್ರಧಾನ ಸಂಪಾದಕರು</h3>
                <h5 class="w3-padding-32">ಗಣಕಯಂತ್ರವೇ ಜಗತ್ತನ್ನಾಳುತ್ತಿರುವ ಪ್ರಸ್ತುತ
                    ಕಾಲಘಟ್ಟದಲ್ಲಿ ಅಂತರ್ಜಾಲವು ಮಾಡಿದ ಮೋಡಿ
                    ಬರಿಮಾತಿಗೆ ನಿಲುಕದ್ದು. ದಿನಬಳಕೆಯ ವಸ್ತುವಿನಿಂದ
                    ಹಿಡಿದು ಬೌದ್ಧಿಕ ಕಸರತ್ತಿನವರೆಗೆ. ಮಾನವ
                    ಅಂತರ್ಜಾಲದ ಮೊರೆಹೋಗಿದ್ದಾನೆಂದರೆ ಅದರ
                    ವಿಸ್ತಾರವನ್ನು, ಅಗಾಧತೆಯನ್ನು ಊಹಿಸಬಹುದು.
                    ಇಲ್ಲಿ ಏನುಂಟು, ಏನಿಲ್ಲ?! ಇಡೀ ಪ್ರಪಂಚವೇ
                    ನಮ್ಮೆದುರು ತೆರೆದುಕೊಳ್ಳುವ ಮಾಯಾಲೋಕವಿದು.
                    ಅಂತರ್ಜಾಲ ಮಾಧ್ಯಮ ವ್ಯಾಪಕವಾಗುತ್ತಿದ್ದಂತೆ
                    ದೇಶ-ದೇಶಗಳ ನಡುವೆ ಅ೦ತರ ಕಡಿಮೆಯಾಗಿದೆ.
                    ಮನಸ್ಸು-ಮನಸ್ಸುಗಳ ನಡುವೆ ಸೇತುವೆಯೇರ್ಪಟ್ಟಿದೆ.
                    ಪ್ರತಿಯೊಂದು ಮನಸ್ಸಿನ ಅನಿಸಿಕೆಗೂ-ಅಭಿಪ್ರಾಯಕ್ಕೂ
                    ವೇದಿಕೆ ಒದಗಿದೆ. ಆಧುನಿಕತೆಯ ಅತ್ಯಂತ
                    ಪರಿಣಾಮಕಾರಿ ಕೊಡುಗೆ ಎಂದರೆ ಅದು
                    ಅಂತರ್ಜಾಲ ಮಾಧ್ಯಮ.</h5>

                <p class="w3-text">ಆಧುನಿಕತೆಯ ಭರಾಟೆಯಲ್ಲಿ ನಮ್ಮತನವನ್ನು
                    ನಾವು ಉಳಿಸಿಕೊಂಡಿದ್ದೇವೆಯೇ? ಆಧುನಿಕತೆಯ
                    ಅತಿಯಾದ ವೇಗವನ್ನು ಗಮನಿಸಿದಾಗ ಈ ಪ್ರಶ್ನೆ
                    ಉದ್ಭವಿಸದೇ ಇರದು. ಹಾಗಾದರೆ. ನಮ್ಮತನ-
                    ವೆಂದರೇನು? ಹೌದು, ಹೀಗೊಂದು ಪ್ರಶ್ನೆಯನ್ನು
                    ಯುವಜನಾಂಗದ ಎದುರಿಟ್ಟರೆ ಒಂದರೆಕ್ಷಣ
                    ವಿಚಲಿತರಾಗಬಹುದು. ಯಾವುದೇ ಕಟ್ಟಡವನ್ನು
                    ಕಟ್ಟಬೇಕಾದಲ್ಲಿ ಅದಕ್ಕೆ ಭದ್ರಬುನಾದಿ ಬೇಕೇಬೇಕು. ಆ
                    ಭದ್ರತೆಯ ಮೇಲೆ ಕಟ್ಟಡ ಎದ್ದು ನಿಲ್ಲುತ್ತದೆ. ಅದೇ
                    ರೀತಿ, ಆಧುನಿಕತೆಯ ಪ್ರಭಾವ ಎಷ್ಟೇ ಇದ್ದರೂ, ನಮ್ಮ
                    ಸಮಾಜವು ನಮ್ಮದೇ ಆದ ಸಂಸ್ಕೃತಿ, ಸಂಸ್ಕೃತ,
                    ಸದಾಚಾರ, ಸಂಸ್ಕಾರಗಳ ಮೇಲೆ ಬೆಳೆದುಬಂದಿದೆ,
                    ಸಂಸ್ಕಾರಬದ್ಧವಾದ ಭಾಷೆಯನ್ನು ತನ್ನೊಡಲೊಳಿಟ್ಟು-
                    ಕೊಂಡಿದೆ. . ಇಂತಹ ಭವ್ಯವಾದ-ಶ್ರೀಮಂತವಾದ
                    ಪರಂಪರೆಯೊಂದು ನಮ್ಮ ಬೆನ್ನಿಗಿದೆ. ಅದೆಲ್ಲದಕ್ಕಿಂತ
                    ಹೆಚ್ಜಾಗಿ ಅದನ್ನು ಕಾಪಾಡಿಕೊಂಡು, ಬೆಳೆಸಿಕೊಂಡು
                    ಹೋಗುವ ಮಹತ್ತರ ಜವಾಬ್ದಾರಿ ನಮ್ಮ ಮೇಲಿದೆ</p>

                <p class="w3-text">ನಿಜ, ಬದಲಾಗುತ್ತಿರುವ ಕಾಲಮಾನದ ಜೊತೆ
                    ಹೆಜ್ಜೆಹಾಕುವ ಅನಿವಾರ್ಯತೆ ನಮಗಿದೆ. ಆದರೆ
                    ಆಧುನಿಕತೆಯನ್ನು ಪರಿಚಯಿಸಿದ ಹೊಸ-ಹೊಸ
                    ಮಾಧ್ಯಮಗಳ ಮೂಲಕ ನಮ್ಮ ಸಂಸ್ಕೃತಿ-
                    ಪರಂಪರೆಯನ್ನು ಎಲ್ಲೆಡೆ ಪ್ರಚುರಪಡಿಸುವ, ಅದರ ಹಿಂದಿರುವ ವೈಜ್ಞಾನಿಕ-ತಾತ್ವಿಕ-ಭಾವನಾತ್ಮಕ
                    ಸತ್ಯಗಳನ್ನು ತಿಳಿಸುವ, ನಮ್ಮ ಭಾಷೆ ಸಂಸ್ಕೃತವನ್ನು
                    ಅಪ್ಪಿಕೊಳ್ಳುವ, ಆ ಮೂಲಕ ಜನರನ್ನು
                    ಚಿ೦ಂತನೆಗೊಳಪಡಿಸಿ ನಮ್ಮ ಶ್ರೇಷ್ಠತೆಯನ್ನು ನಾವು
                    ಕಾಯ್ದುಕೊಳ್ಳುವ ಜರೂರತ್ತಿದೆ. ಈ ಎಲ್ಲ ಹಿನ್ನೆಲೆಯಲ್ಲಿ
                    ರೂಪುತಳೆದಿದ್ದೇ ಅಂತರ್ಜಾಲ ಪತ್ರಿಕೆ ಮಿತ್ರರಶ್ಮಿ</p>

                <p class="w3-text">ದಿನನಿತ್ಯದ ಆಗುಹೋಗುಗಳನ್ನು ತಿಳಿಸಲು
                    ಸಾಕಷ್ಟು ಅಂತರ್ಜಾಲ ಪತ್ರಿಕೆಗಳಿವೆ; ಮನೋ-
                    ರಂಜನೆಗೆ, ಮಾಹಿತಿ ಕಲೆಹಾಕಲು ಸಾಕಷ್ಟು ಇ-
                    ಪತ್ರಿಕೆಗಳಿವೆ. ಆದರೆ. ನಿರ್ದಿಷ್ಟವಾಗಿ ಸಂಸ್ಕೃತ-
                    ಸಂಸ್ಕೃತಿಗಳ ವಿಚಾರಕ್ಕೆ ಬಂದಾಗ ಇದಕ್ಕೆ ಸಂಬಂಧಿಸಿದ
                    ತಾಣಗಳು ಸಿಗುವುದು ಅತಿ ವಿರಳ. ಇದನ್ನು
                    ಗಮನದಲ್ಲಿರಿಸಿಕೊಂಡು ನಮ್ಮ ಪತ್ರಿಕೆ ನಿಮ್ಮ
                    ದಾಹವನ್ನು ತೀರಿಸುವ ಕಿರುಪ್ರಯತ್ನ ಮಾಡಲಿದೆ. ಇಲ್ಲಿ
                    ಅನೇಕ ಗಣ್ಯರು ತಮ್ಮ ಅಂಕಣಗಳ ಮೂಲಕ
                    ನಿಮ್ಮೆದುರು ಬರಲಿದ್ದಾರೆ. ತಿಂಗಳಿಗೊಮ್ಮೆ ಹೊಸ
                    ಹೊಸ ವಿಚಾರಗಳು, ಚಿಂತನ-ಮಂಥನಗಳು
                    'ಮಿತ್ರರಶ್ವಿ' ಯಲ್ಲಿ ಪ್ರಕಟಗೊಳ್ಳಲಿವೆ. ಓದುಗರಿಗೆ ತಮ್ಮ
                    ಅನಿಸಿಕೆ-ಅಭಿಪ್ರಾಯಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳಲು ಮುಕ್ತ
                    ವೇದಿಕೆ ಇದು. ಓದುಗರಿಗಾಗಿ ಮೈತ್ರೀ ಪ್ರತಿಷ್ಠಾನವು
                    ಪ್ರಸ್ತುತಪಡಿಸುತ್ತಿರುವ ಅಕ್ಷರಯಾನ. ಪ್ರತಿ ಮಾಸದ
                    ಮೊದಲ ದಿನ ಅಂದರೆ ಚೈತ್ರ ಪ್ರಥಮಾ, ವೈಶಾಖ
                    ಪ್ರಥಮಾ, ಜ್ಯೇಷ್ಠ ಪ್ರಥಮಾ, ಹೀಗೆ ನಮ್ಮ ಭಾರತೀಯ
                    ಪಂಚಾಂಗದ ಪದ್ಧತಿಯಂತೆ ಈ ಪತ್ರಿಕೆ ಪ್ರತಿಮಾಸವೂ
                    ಪ್ರಕಟವಾಗಲಿದೆ. ಇದರಲ್ಲಿ. ನಮ್ಮ ದೈನಂದಿನ
                    ಆಚರಣೆಗಳಲ್ಲಿನ ವೈಜ್ಞಾನಿಕತೆ, ಆಚಾರ-ವಿಚಾರಗಳು,
                    ಸಂಪ್ರದಾಯಗಳು, ಸಂಸ್ಕೃತ ಭಾಷೆಯ ವೈಶಿಷ್ಟ್ಯ. ದೇಶ ವಿದೇಶಗಳಲ್ಲಿ ಸಂಸ್ಕೃತದ ಪ್ರಭಾವ,
                    ಸಂಸ್ಕಾರಗಳು, ಸಂಸ್ಕೃತಿಯ ವೈಶಿಷ್ಟ್ಯ ಸಾಂಸ್ಕೃತಿಕ
                    ಪರಂಪರೆ ಹೀಗೆ ಹತ್ತಾರು. ವಿಚಾರಗಳು
                    ಪ್ರಸ್ತುತವಾಗಲಿವೆ. ಬನ್ನಿ! ಭಾಗಿಗಳಾಗಿ, ಸ್ನೇಹಿತರನ್ನೂ,
                    ಬಂಧುಗಳನ್ನೂ ಕರೆತನ್ನಿ. ಪರಿಪೂರ್ಣ ಚಿ೦ಂತನಾ-
                    ತ್ಮಕವಾದ ಈ ಅಕ್ಷರಯಾನದಲ್ಲಿ ನಮ್ಮೊಂದಿಗೆ ಕೈ
                    ಜೋಡಿಸಿ, ಮುಂದಿನ ದಿನಗಳಲ್ಲಿ ನಿಮ್ಮ ಮನಸ್ಸಿನ
                    ಭಾವನೆಗಳಿಗೆ ಅಕ್ಷರರೂಪ ಕೊಡುವ ಪ್ರಯತ್ನಮಾಡಿ.
                    ಚಿಂತನಾತ್ಮಕವಾದ, ಚಿಕ್ಕ, ಚೊಕ್ಕ ವಿಚಾರಗಳನ್ನು
                    ಬರೆದು ನಮಗೆ ಕಳುಹಿಸಿ. ಅವುಗಳನ್ನು ಪರಿಶೀಲಿಸಿ
                    ಪ್ರಕಟಿಸಲಾಗುವುದು.</p>

                <p>ಪ್ರತಿ ಸಂಚಿಕೆಯಲ್ಲಿ ಹಲವಾರು ಗಣ್ಯ
                    ವಿದ್ವಾಂಸರ ಲೇಖನಗಳು ಪ್ರಕಟವಾಗುವುದು.</p>

                <p class="w3-large"> ಪ್ರಕಟಣೆಗಳನ್ನು ಓದಲು,
                    <router-link :to="{ name: 'mitrarashmi' }" class="">ಇಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿ</router-link>
                </p>
            </div>
        </div>
    </div>

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