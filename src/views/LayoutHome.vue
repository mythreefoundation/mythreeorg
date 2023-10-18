<script lang="ts">
import { getTokenFromUrl, fetchImageURL, getFullUrlPath, fetchFileNames } from '../utils/utils';

export default {
    data() {
        return {
            publicPath: import.meta.env.BASE_URL,
            latestNews: [] as string[],
            TOKEN: '' as string,
            newsFolder: "news"
        }
    },
    async created() {
        await fetchImageURL("logo.png").then(img => {
            this.TOKEN = getTokenFromUrl(img);
        })

        await fetchFileNames(this.newsFolder).then(news => {
            news.
                sort((a, b) => b.toLowerCase().localeCompare(a.toLowerCase())).
                forEach((fileName) => {
                    let imgUrl = getFullUrlPath(this.newsFolder, fileName, this.TOKEN);
                    this.latestNews.push(imgUrl);
                })
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


    <!-- Grid -->
    <div class="w3-row">

        <!-- Blog entries -->
        <div class="w3-col l8 s12">
            <!-- Blog entry -->
            <div class="w3-card-4 w3-margin w3-white">
                <!-- <img src="/w3images/woods.jpg" alt="Nature" style="width:100%"> -->
                <div class="w3-center">
                    <img src="@/assets/mythree-logo.png" alt="Logo" class="w3-image" style="max-height: 150px;">
                </div>
                <div class="w3-container">
                    <h3><b>Mythree Samskritha Samskrithi Prathisthanam</b></h3>
                    <h5>Mythree is a not-for-profit organisation making an earnest attempt to revamp and re-join the soul of
                        Indian Culture, Indian Heritage and National Pride</h5>
                </div>

                <!-- <div class="w3-container">
                    <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod
                        placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non
                        congue ullam corper. Praesent tincidunt sed
                        tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non
                        fringilla.</p>
                    <div class="w3-row">
                        <div class="w3-col m8 s12">
                            <p><button class="w3-button w3-padding-large w3-white w3-border"><b>READ MORE »</b></button></p>
                        </div>
                        <div class="w3-col m4 w3-hide-small">
                            <p><span class="w3-padding-large w3-right"><b>Comments  </b> <span
                                        class="w3-tag">0</span></span></p>
                        </div>
                    </div>
                </div> -->
            </div>
            <hr>

            <!-- Blog entry -->
            <div class="w3-card-4 w3-margin w3-white">
                <img src="@/assets/home/mitrarashmi.png" style="width:100%">
                <div class="w3-container">
                    <h3><b>ಮಿತ್ರರಶ್ಮಿ ಮಾಸಪತ್ರಿಕೆ</b></h3>
                    <h3>ಡಾ| ಗಣಪತಿ ಹೆಗಡೆ, ಪ್ರಧಾನ ಸಂಪಾದಕರು</h3>
                    <h5 class="w3-padding-8"> ಪ್ರಕಟಣೆಗಳನ್ನು ಓದಲು,
                        <router-link :to="{ name: 'mitrarashmi' }" class="">ಇಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿ</router-link>
                    </h5>
                </div>
            </div>

            <div class="w3-card-4 w3-margin w3-white">
                <img src="@/assets/home/events.jpg" style="width:100%">
                <div class="w3-container">
                    <h3><b>ಕಾರ್ಯಕ್ರಮಗಳು</b></h3>
                    <h5 class="w3-padding-8"> ನಮ್ಮ ಕಾರ್ಯಕ್ರಮಗಳಲ್ಲಿ ನಮ್ಮೊಂದಿಗೆ ಸೇರಿಕೊಳ್ಳಿ,
                        <router-link :to="{ name: 'events' }" class="">ಇಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿ</router-link>
                    </h5>
                </div>
            </div>

            <div class="w3-card-4 w3-margin w3-white">
                <img src="@/assets/home/books.jpeg" style="width:100%">
                <div class="w3-container">
                    <h3><b>ಪ್ರಕಟಣೆಗಳು</b></h3>
                    <h3>ಯಾವುದೇ ವಯೋಮಾನದವರಿಗೂ ಸುಲಭವಾಗಿ ಸಂಸ್ಕೃತ ಕಲಿಯಲು
                        ಮೈತ್ರೀ ಸಂಸ್ಕೃತ ಸಂಸ್ಕೃತಿ ಪ್ರತಿಷ್ಠಾನವು ಈ ಪುಸ್ತಕಗಳನ್ನು ಪ್ರಕಟಿಸಿದೆ</h3>
                    <h5 class="w3-padding-8"> ಪುಸ್ತಕಗಳ ಪಟ್ಟಿಯನ್ನು ನೋಡಲು,
                        <router-link :to="{ name: 'books' }" class="">ಇಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿ</router-link>
                    </h5>
                </div>
            </div>

            <div class="w3-card-4 w3-margin w3-white">
                <div class="w3-container">
                    <h3><b>ಸುಭಾಷಿತಗಳು</b></h3>
                    <h3>ಸಂಗ್ರಹ: ಡಾ| ಗಣಪತಿ ಹೆಗಡೆ</h3>
                    <h5 class="w3-padding-8"> ಆರೋಗ್ಯ ಸುಭಾಷಿತಗಳನ್ನು ಓದಲು,
                        <router-link :to="{ name: 'arogyasubashita' }" class="">ಇಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿ</router-link>
                    </h5>
                    <h5 class="w3-padding-8"> ನಿತ್ಯ ಸುಭಾಷಿತಗಳನ್ನು ಓದಲು,
                        <router-link :to="{ name: 'nityasubashita' }" class="">ಇಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿ</router-link>
                    </h5>
                    <h5 class="w3-padding-8"> ಸಂಸ್ಕೃತ ಪಾಠಗಳನ್ನು ಓದಲು,
                        <a href="https://www.facebook.com/samskrutagurukulam" target="_blank">ಇಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿ</a>
                    </h5>
                </div>
            </div>

            <div class="w3-card-4 w3-margin w3-white">
                <div class="iframe-container">
                    <iframe
                        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FKolkata&showNav=1&showPrint=0&showTabs=0&showTz=1&showCalendars=1&title=Mythree%20Pratishtanam%20Programs&src=bXl0aHJlZXByYXRpc2h0YW5hQGdtYWlsLmNvbQ&color=%23039BE5"
                        style="padding: 20px;" width="800" height="600" frameborder="0" scrolling="no"></iframe>
                </div>
                <h4 class="w3-center w3-margin">ನಿಮ್ಮ ಕ್ಯಾಲೆಂಡರ್ ಗೆ ಸೇರಿಸಲು ಮತ್ತು ಮುಂಬರುವ ಕಾರ್ಯಕ್ರಮಗಳ ಬಗ್ಗೆ ಸೂಚನೆ ಪಡೆಯಲು "+
                    Google
                    Calendar" ಬಟನ್ ಕ್ಲಿಕ್ ಮಾಡಿ</h4>
            </div>



            <!-- END BLOG ENTRIES -->
        </div>

        <!-- Introduction menu -->
        <div class="w3-col l4">
            <!-- About Card -->
            <div class="w3-card w3-margin w3-margin-top">
                <div class="w3-container w3-white">
                    <h4 class="w3-center"><b>ಇತ್ತೀಚಿನ ಸುದ್ದಿಗಳು</b></h4>

                    <div class="w3-image-container" style="height: 500px; display: flex; justify-content: center;">
                        <a v-for="newsImgUrl in latestNews" :href="`${newsImgUrl}`" target="_blank">
                            <img class="mySlides" alt="slidingImages" :src="`${newsImgUrl}`"
                                style="width:100%;max-width: 100%; max-height: 100%;">
                        </a>
                    </div>
                </div>
            </div>
            <hr>

            <div class="w3-card w3-margin w3-margin-top">
                <div class="iframe-container">
                    <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLSfezDnMaAdIODS0CyL4wWeBBAW2wW879Z-Cpz2vw4iueDeR0Q/viewform?embedded=true"
                        width="750" height="1685" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                </div>
            </div>
            <hr>

            <!-- Posts -->
            <!-- <div class="w3-card w3-margin">
                <div class="w3-container w3-padding">
                    <h4>Popular Posts</h4>
                </div>
                <ul class="w3-ul w3-hoverable w3-white">
                    <li class="w3-padding-16">
                        <img src="/w3images/workshop.jpg" alt="Image" class="w3-left w3-margin-right" style="width:50px">
                        <span class="w3-large">Lorem</span><br>
                        <span>Sed mattis nunc</span>
                    </li>
                    <li class="w3-padding-16">
                        <img src="/w3images/gondol.jpg" alt="Image" class="w3-left w3-margin-right" style="width:50px">
                        <span class="w3-large">Ipsum</span><br>
                        <span>Praes tinci sed</span>
                    </li>
                    <li class="w3-padding-16">
                        <img src="/w3images/skies.jpg" alt="Image" class="w3-left w3-margin-right" style="width:50px">
                        <span class="w3-large">Dorum</span><br>
                        <span>Ultricies congue</span>
                    </li>
                    <li class="w3-padding-16 w3-hide-medium w3-hide-small">
                        <img src="/w3images/rock.jpg" alt="Image" class="w3-left w3-margin-right" style="width:50px">
                        <span class="w3-large">Mingsum</span><br>
                        <span>Lorem ipsum dipsum</span>
                    </li>
                </ul>
            </div>
            <hr> -->

            <!-- Labels / tags -->
            <!-- <div class="w3-card w3-margin">
                <div class="w3-container w3-padding">
                    <h4>Tags</h4>
                </div>
                <div class="w3-container w3-white">
                    <p><span class="w3-tag w3-black w3-margin-bottom">Travel</span> <span
                            class="w3-tag w3-light-grey w3-small w3-margin-bottom">New York</span> <span
                            class="w3-tag w3-light-grey w3-small w3-margin-bottom">London</span>
                        <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">IKEA</span> <span
                            class="w3-tag w3-light-grey w3-small w3-margin-bottom">NORWAY</span> <span
                            class="w3-tag w3-light-grey w3-small w3-margin-bottom">DIY</span>
                        <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">Ideas</span> <span
                            class="w3-tag w3-light-grey w3-small w3-margin-bottom">Baby</span> <span
                            class="w3-tag w3-light-grey w3-small w3-margin-bottom">Family</span>
                        <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">News</span> <span
                            class="w3-tag w3-light-grey w3-small w3-margin-bottom">Clothing</span> <span
                            class="w3-tag w3-light-grey w3-small w3-margin-bottom">Shopping</span>
                        <span class="w3-tag w3-light-grey w3-small w3-margin-bottom">Sports</span> <span
                            class="w3-tag w3-light-grey w3-small w3-margin-bottom">Games</span>
                    </p>
                </div>
            </div> -->

            <!-- END Introduction Menu -->
        </div>

        <!-- END GRID -->
    </div><br>

    <!-- <div class="w3-row-padding w3-light-grey w3-padding-64 w3-container">

        <div class="w3-content">
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
    </div> -->

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