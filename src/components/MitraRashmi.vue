<script lang="ts">
import { EventsBucket, MitraRashmiBucket, type MitraRashmi } from '@/utils/models';
import { fetchImageURL, getTokenFromUrl, readCollection, getFullUrlPath } from '@/utils/utils';
import VuePdfEmbed from 'vue-pdf-embed'

export default {
    components: {
        VuePdfEmbed,
    },
    data() {
        return {
            TOKEN: '',
            publicPath: import.meta.env.BASE_URL,
            magazines: [] as MitraRashmi[],
            imageUrl: '',
            images: [] as string[],
            array: [] as Array<string>,
            pdfSource: "'https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/examples/learning/helloworld.pdf",
            isLoading: true,
        };
    },
    async created() {
        // Call a function to fetch the image URL from Firebase Storage
        await fetchImageURL("logo.png").then(img => {
            this.TOKEN = getTokenFromUrl(img);
        })

        await readCollection(MitraRashmiBucket).then(_magzs => {

            _magzs.map((doc) => {
                this.magazines.push({
                    title: doc.data.title,
                    id: doc.id,
                    imageName: getFullUrlPath(MitraRashmiBucket, doc.data.imageName, this.TOKEN),
                    linkToMagazine: doc.data.linkToMagazine,
                })
            })
        })
    },
    methods: {
        handleDocumentRender() {
            this.isLoading = false
            // this.pageCount = this.$refs.pdfRef.pageCount
        },


        handleClick(imgUrl: string) {
            document.getElementById('modal-id')!.style.display = 'block';
        },
    }
}

</script>

<template>
    <header class="w3-container w3-teal w3-center" style="padding:64px 16px">
        <h3 class="w3-margin w3-jumbo">ಮಿತ್ರರಶ್ಮಿ ಮಾಸಪತ್ರಿಕೆ</h3>
        <p class="w3-xlarge">ಕನ್ನಡದ ಕನ್ನಡಿಯಲ್ಲಿ ಸಂಸ್ಕೃತ ಮಾಸಪತ್ರಿಕೆ</p>
    </header>

    <div class="w3-row-padding w3-padding-32 w3-container">
        <h2 class="w3-text-teal w3-center">ಮಿತ್ರರಶ್ಮಿ ಮಾಸಪತ್ರಿಕೆಯ ಸಂಚಿಕೆಗಳನ್ನು ಓದಬೇಕೆ? ಹಾಗಾದರೆ ಇಷ್ಟವಾದ ಸಂಚಿಕೆಯ ಮುಖಪುಟದ
            ಚಿತ್ರದ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ</h2>

        <div v-for="book in magazines" class="w3-third w3-container w3-margin-bottom"
            style="box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
            <div class="w3-image-container" style="height: 300px; display: flex; justify-content: center;">

                <a :href="`${book.linkToMagazine}`" target="_blank">
                    <img :src="`${book.imageName}`" :alt="`${book.title}`"
                        style="max-width: 100%; max-height: 100%;">
                </a>
            </div>
            <div class="w3-container w3-white w3-center">
                <p><b>{{ book.title }}</b></p>
            </div>
        </div>

        <h2 class="w3-text-teal w3-center">ಲೆೇಖಕರಿಗೆ ಮಾರ್ಗಸೂಚಿಗಳು</h2>

        <div class="w3-container w3-padding-16">

            <p>ನೀವೂ ‘ಮಿತ್ರರಶ್ಮಿಃ’ ಮಾಸಪತ್ರಿಕೆಗೆ ಲೀಖನವನ್ನು
                ಬರೆಯಲಿಚ್ಛಿಸುವಿರಾ? ಬನ್ನಿ, ಈ ಕೆಳಕಂಡ ಸಾಮಾನ್ಯ
                ಮಾರ್ಗಸೂಚಿಗಳನ್ನು ಅನುಸರಿಸಿ</p>
            <!-- <p>ತಮಮ ಲೋಖನ/ ಪಿತ್ರಕ್ರಿಯೆಯನುು ವಿದುಯನಾಮನ ಅಂಚೆ (ಈ-ಮೋಲ್) editormrashmi@gmail.com ಮುಖೋನ ಅರ್ವಾ
            9448243724 WhatsApp ಸಂಖಯಗೆ ಕಳುಹಿಸಿ. ತಮಮ ಸಂಪೂಣಷ ಹಸರು, ಹುದೆದ ಹಾಗೂ ಮಬೈಲ್ ಸಂಖಯಯನುು ತ್ರಳಿಸುವುದನುು
            ಮರೆಯದಿರಿ.</p> -->
        </div>

        <div class="w3-container w3-padding-16">
            <p class="w3-text-teal">ಲೇಖನದ ವಿಷಯಗಳು</p>
            <p> ಸಂಸ್ಕೃತ, ಸಂಸ್ಕೃತಿ, ಸಂಸ್ಕಾರ
                ಪರಂಪರೆ, ಶಾಸ್ತ್ರಗಳ ಪರಿಚಯ, ಸಂಸ್ಕೃತದ ಉತ್ತಮ
                ದೇವತಾಸ್ತುತಿಪದ್ಯಗಳು, ಕೃಷ್ಣಕರ್ಣಾಮೃತ, ಮೇಘದೂತ
                ಮೊದಲಾದವುಗುಳಿಂದ ಆಯ್ದ ಮಧುರ, ಶೃಂಗಾರ ಪದ್ಯಗಳು,
                ಸಂಸ್ಕೃತದಲ್ಲಿ ಅಲಂಕಾರಗಳು, ಸಂಸ್ಕೃತದ ಕವಿಗಳ ಪರಿಚಯ,
                ಪ್ರಾಚೀನ ಸಂಸ್ಕೃತ ಗ್ರಂಥಗಳ ಪರಿಚಯದೊಂದಿಗೆ ಅದನ್ನೇ
                ಆಧರಿಸಿದ ಪ್ರಸ್ತುತ ಸಾಹಿತ್ಯಗಳ ಪರಿಚಯ, ಸಂಸ್ಕೃತದಲ್ಲಿ
                ವಿಜ್ಞಾನ, ಆಚರಣೆಯಲ್ಲಿರುವ ಮುಖ್ಯ ಹಬ್ಬಗಳು, ಆರೋಗ್ಯ,
                ಯೋಗ, ಸಂಸ್ಕೃತದಲ್ಲಿ ತಾತ್ವಿಕ ವಿಚಾರಗಳು, ಸಂಸ್ಕೃತದ
                ಪ್ರಹೇಲಿಕಾ, ಕೂಟ, ಸಮಸ್ಯೆ, ಅಪಹ್ನುತಿ, ಅಂತರಾಲಾಪ,
                ಬಹಿರಾಲಾಪ, ಮೊದಲಾದ ಒಗಟುಗಳು, ಸಂಸ್ಕೃತದ
                ಹಾಸ್ಯೋಕ್ತಿಗಳು ಜ್ಯೋತಿ:
                ಶಾಸ್ತ್ರ, ವ್ಯಾಕರಣ, ಧರ್ಮಶಾಸ್ತ್ರ, ವಾಸ್ತು,
                ಭಾರತೀಯ ದರ್ಶನಗಳು, ಭಾರತೀಯ ವಿದ್ಯೆಗಳು, ವಾಸ್ತು
                ಹಾಗೂ ಶಿಲ್ಪಕಲೆ, ಭಾರತೀಯ ಗಣಿತಶಾಸ್ತ್ರ, ಸಸ್ಯಶಾಸ್ತ್ರ, ಲೋಹಶಾಸ್ತ್ರ, ವಾಸ್ತುಶಾಸ್ತ್ರ ಹಾಗೂ ಶಿಲ್ಪ ಶಾಸ್ತ್ರ, ಶ್ರುತಿ,
                ಸ್ಮೃತಿಗಳು,
                ಸಂಸ್ಕ್ರತದ ದೇವತಾಸ್ತುತಿಗಳು ಹೀಗೆ ಹಲವು ವಿಚಾರಗಳನ್ನು
                ಆಧರಿಸಿ ತಾವು ಲೇಖನವನ್ನು ಬರೆಯಬಹುದು. ಅಂಕಣಗಳು
                ಸ್ವರಚಿತವಾಗಿರಲಿ. ಕೃತಿಚೌರ್ಯಕ್ಕೆ ಅವಕಾಶವಿಲ್ಲ</p>
        </div>

        <!-- <div class="w3-container w3-padding-16">
            <p class="w3-text-teal">ಉಪಯೇಗಿಸಬೇಕಾದ ಅಕ್ ಷರ ಶೈಲ್ಲ</p>
            <p>ಯಾವುದೀ
                ಯೂನಿಕೇಡ್ ಫಂಟ್ (ಉದಾ: NudiUni 01e ;
                NudiParijatha) ; ಅಕಷರಶೈಲಿಯ ಗಾತಿ 14.</p>
        </div>

        <div class="w3-container w3-padding-16">

            <p class="w3-text-teal">ಲೇಖನದ ಮಿತಿ</p>
            <p>ಚಿಕ್ಕ, ಚೊಕ್ಕ, ವಿಶಿೇಷಣಾತಮಕ್ ಲೇಖನಗಳನನನ
                ನಿರಿೇಕ್ಷ ಷಸನತ್ತೇವೆ. ನಿಮ್ಮ ಲೇಖನವು ಕ್ನನಡದಲ್ಲಿದನು, ಸ್ಕಮಾನಯವಾಗಿ
                200 ರಿಂದ 400 ಪದಗಳಿಗೆ ಸೇಮಿತವಾಗಿರಲ್ಲ; ಅನಿವಾಯಯತ್
                ಇದುಲ್ಲಿ ಲೇಖನವು 800 ಪದಗಳವರೆಗೆ ಇರಬಹನದನ; ದೇರ್ಯ
                ಲೇಖನಗಳನನನ ಹಲ್ವು ಕ್ಂತನಗಳ ಮ್ೂಲ್ಕ್ ಕ್ಳುಹಿಸನವ
                ಅವಕಾಶವಿದೆ.</p>
        </div>

        <div class="w3-container w3-padding-16">

            <p class="w3-text-teal">ಕೇಷ ಟಕ್ಗಳು ಮ್ತನತ ಚಿತಿಗಳು</p>
            <p>ನಮಮ ಲೀಖನದ ಜ್ತೆಗೆ ಕನಷ್ಠ
                ಒಂದನ ಸೂಕತವ್ಯದ ಚ್ಛತಿವಿದದರೆ ಉತತಮ. ಅರ್ತಯವಿದದಡೆ ಕೀಷ್ಟಕರ್ಳನನು ಬಳಸಬಹನದನ. ಅಂತಜ್ಞಗಲದಿಂದ
                ಯಾವುದಾದರೂ ಚ್ಛತಿರ್ಳನನು ಬಳಸಿದದಲಿಿ, ಅವುರ್ಳ
                ಮೂಲವನನು ತ್ರಳಸಬೀಕಾಗಿ ಪ್ರಿಥಗನ್. ಬಳಸನವ ಚಿತಿಗಳು
                ಕ್ೃತಿಸ್ಕವಮ್ಯಹಕ್ಕನನನ ಉಲ್ಿಂಘಿಸನವಂತಿಲ್ಿ</p>
        </div> -->

        <div class="w3-container w3-padding-16">

            <p class="w3-text-teal">ಲೇಖನವನ್ನು ಕಳುಹಿಸಬೇಕಾದ ವಿಳಾಸ </p>
            <p>ಲೀಖನದ ಕಡತವನ್ನು
                editormrashmi@gmail.com (ಈ-ಮೀಲ್) ಮುಖೇನ ಅಥವಾ 9448243724
                WhatsApp ಸಂಖ್ಯೆಗೆ ಕಳುಹಿಸಿ</p>
        </div>

        <!-- <div class="w3-container w3-padding-16">

            <p class="w3-text-teal">ಲೇಖನಗಳನನನ ಕ್ಳುಹಿಸನವ ದನಂಕ್ </p>
            <p>ನಮಮ ಲೀಖನರ್ಳನನು
                ಯಾವುದೀ ಸಮಯ ಈ ಮೀಲ ತ್ರಳಸಿದ ವಿದನಯನ್ಮಮನ ಅಂಚೆಯ
                ವಿಳಾಸಕೆಕ ಕಳುಹಿಸಬಹನದನ. ‘ಮಿತಿರಶ್ಮಿಃ’ ಮಾಸಪತ್ರಿಕೆಯನ ಪಿತ್ರ

                ತ್ರಂರ್ಳು ಹಿಂದೂಪಂಚಾಂರ್ವನುನನಸರಿಸಿ ಡಿಜಿಟಲ್ (ಈ-
                ಪತ್ರಿಕೆ) ರೂಪದಲಿಿ ಲೀಕಾಪಗಣೆಯಾಗುತತದ. ಪತಿಿಕೆಯನ

                ಬಿಡನಗಡೆಯಾಗುವ ದನಕೆಕ ಹತನತ ದನಗಳು ಮ್ನಂಚಿತವಾಗಿ
                ತಲ್ನಪಿದ ಲೇಖನಗಳನನನ ಅದೆೇ ತಿಂಗಳಿನ ಪತಿಿಕೆಯಲ್ಲಿ
                ಪಿಕ್ಟಿಸಲ್ನ ಪರಿಗಣಿಸಲಾಗುವುದನ. ತಡವ್ಯಗಿ ತಲನಪಿದ
                ಲೀಖನರ್ಳನನು ಮನಂಬರನವ ಸಂಚ್ಛಕೆರ್ಳಗೆಂದನ
                ಕಾಯ್ದದರಿಸಲಾಗುವುದನ.</p>
        </div>

        <div class="w3-container w3-padding-16">

            <p class="w3-text-teal">ಲೇಖಕ್ರ ಭಾವಚಿತಿ</p>
            <p>ಪಿಥಮ ಬಾರಿ ಮಿತಿರಶಿಮ ಪತ್ರಿಕೆಗೆ
                ಲೀಖನವನನು ಬರೆಯನತ್ರತರನವವರನ ತಮಮ ಒಂದನ ಪ್ರಸ್-
                ಪೀರ್ಟಗ ಗಾತಿದ (.jpg ಫಾಮಾಯಗರ್ಟನಲಿಿ ಇರನವಂತಹ)
                ಭಾವಚ್ಛತಿವನನು ಲೀಖನದ ಜ್ತೆಗೆ ಈ-ಮೀಲ್ ಮನಖಂತರ
                ಕಳುಹಿಸಬೀಕು. ಭಾವಚ್ಛತಿದ ಸಾಫ್ಟ್ ಕಾಪಿಯನ 300x300
                ಅಥವ್ಯ ಅದಕ್ತಕಂತ ಉತತಮ ಪಿಕೆೆಲ್ ಹಂದಿರಲಿ. ಪಿಸನತತ
                ಅಥವ್ಯ ಹಿಂದಿನ ಮಿತಿರಶಿಮ ಸಂಚ್ಛಕೆರ್ಳಗೆ ಲೀಖನವನನು
                ಕಳುಹಿಸಿರನವವರನ ಮತ್ತತಮಮ ಭಾವಚ್ಛತಿವನನು ಕಳುಹಿಸನವ
                ಅರ್ತಯವಿಲಿ.</p>
        </div> -->

        <div class="w3-container w3-padding-16">

            <p class="w3-text-teal">ಲೀಖಕರ ಸಂಪರ್ಕ ವಿವರಗಳು</p>
            <p>ಲೀಖನವನ್ನು ಈ-ಮೀಲ್
                ಮಾಡುವಾಗ ಲೀಖಕರು ತಮ್ಮ ಸಂಪೂರ್ಣ ಹಸರನ್ನು, ಹುದ್ಧೆ
                ಹಾಗು ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯನ್ನು ತಿಳಿಸುವುದು</p>
        </div>
        <h3 class="w3-text-teal w3-center">ಇನ್ನೇಕೆ ತಡ? ಲೇಖನವನ್ನು ಬರೆಯಲು ಆರಂಭಿಸಿ!</h3>
    </div>

    <!-- <div id="modal-id" class="w3-modal">
        <div class="w3-modal-content">

            <div class="w3-container">
                <span onclick="document.getElementById('modal-id').style.display='none'"
                    class="w3-button w3-display-topright w3-padding-large w3-xxlarge">&times;</span>

                <object :data="`${publicPath}./mitrarashmi/helloworld.pdf`" type="application/pdf" width="100%"
                    height="100%">
                    <p>It appears you don't have a PDF plugin for this browser. No biggie... you can <a
                            href="example.pdf">click here to download the PDF file.</a></p>
                </object>

                <vue-pdf-embed ref="pdfRef" :source="pdfSource" />
            </div>
        </div>
    </div> -->
</template>


<style scoped>
p {
    margin: 0;
    padding: 0;
}

.app-content {
    padding: 24px 16px;
}

.vue-pdf-embed>div {
    margin-bottom: 8px;
    box-shadow: 0 2px 8px 4px rgba(0, 0, 0, 0.1);
}
</style>