<script lang="ts">
import VuePdfEmbed from 'vue-pdf-embed'

export default {
    components: {
        VuePdfEmbed,
    },
    data() {
        return {
            TOKEN: '',
            publicPath: import.meta.env.BASE_URL,
            magazines: [
                { name: 'ಮಿತ್ರರಶ್ಮಿಃ (ಮಾರ್ಗಶಿರ ಮಾಸಸಂಚಿಕೆ)', link: 'https://drive.google.com/file/d/1xmVniMT_j6aBDR-Gi44LGRXCbm1NVnI8/view', month: 'Nov 2022', title: 'nov2022.png' },
                { name: 'MitraRashmi PushyaMaasa Sanchike 24Dec2022 Final (1)', link: 'https://drive.google.com/file/d/1vGAtKiUDK4O0f5J7W8u4UeWWdinhPhi1/view', month: 'Dec 2022', title: 'dec2022.png' },
                { name: 'ಮಿತ್ರರಶ್ಮಿಃ (ಮಾಘಮಾಸ ಸಂಚಿಕೆ)', link: 'https://drive.google.com/file/d/1xkcha6rT4bMsy-T-VaXY3oTbunnf1gPq/view', month: 'Jan 2023', title: 'jan2023.png' },
                { name: 'ಮಿತ್ರರಶ್ಮಿಃ (ಫಾಲ್ಗುಣಮಾಸ ಸಂಚಿಕೆ)', link: 'https://drive.google.com/file/d/13zXjobKf4H41yv1vQtdbodGVdHvVyd71/view', month: 'Feb 2023', title: 'feb2023.png' },
                { name: 'ಮಿತ್ರರಶ್ಮಿಃ (ಚೈತ್ರಮಾಸ ಸಂಚಿಕೆ)', link: 'https://drive.google.com/file/d/1A4ygTb88nlA0n1lcr--EAERAgYPckL41/view', month: 'Mar 2023', title: 'mar2023.png' },
                { name: 'Mitrarashmi Vaishaakhamaasa Sanchike 21Apr2023 Frozen', link: 'https://drive.google.com/file/d/1URdxBkn5XuZ5omsd9lxT-1pO1aIReina/view', month: 'Apr 2023', title: 'apr2023.png' },
                { name: 'Mitrarashmi Jyestamaasa Sanchike 20May2023 Frozen', link: 'https://drive.google.com/file/d/19gsdKqPpxBrxQXV8bitol6uVZw-VCDOI/view', month: 'May 2023', title: 'may2023.png' },
                { name: 'Mitrarashmi Aashadamaasa Sanchike 19Jun2023 Frozen', link: 'https://drive.google.com/file/d/1oh0EHjaLp216DS3fqc-beIGi6uW5uxK3/view', month: 'Jun 2023', title: 'june2023.png' },
                { name: 'ಅಧಿಕ ಶ್ರಾವಣಮಾಸ ಸಂಚಿಕೆ', link: 'https://drive.google.com/file/d/1tX8AGfjA_57tzPJbOugzzoQJawe36EU5/view', month: 'Jul 2023', title: 'july2023.png' },
            ],

            imageUrl: '',
            images: [] as string[],
            array: [] as Array<string>,
            pdfSource: "'https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/examples/learning/helloworld.pdf",
            isLoading: true,
        };
    },
    async created() {
        // Call a function to fetch the image URL from Firebase Storage
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

<script lang="ts">



</script>

<template>
    <header class="w3-container w3-teal w3-center" style="padding:64px 16px">
        <h3 class="w3-margin w3-jumbo">ಮಿತ್ರರಶ್ಮಿ ಮಾಸಪತಿರಕೆ</h3>
        <p class="w3-xlarge">ಮಿತ್ರರಶ್ಮಿ ಮಾಸಪತಿರಕೆಯ ಸಂಚಿಕೆಗಳನುು ಓದ್ಬೇಕೆ ? ಹಾಗಾದ್ರೆ ಇಷ್ಟವಾದ ಸಂಚಿಕೆಯ ಮುಖಪುಟದ್ ಚಿತ್ರದ್
            ಮೇಲ ಕ್ತಿಕ್ತಿಸ</p>
    </header>

    <div class="w3-row-padding w3-padding-64 w3-container">
        <div v-for="book in magazines" class="w3-third w3-container w3-margin-bottom"
            style="box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
            <div class="w3-image-container" style="height: 300px; display: flex; justify-content: center;">

                <a :href="`${book.link}`" target="_blank">
                    <img :src="`${publicPath}./mitrarashmi/${book.title}`" :alt="`${book.title}`"
                        style="max-width: 100%; max-height: 100%;">
                </a>
            </div>
            <div class="w3-container w3-white w3-center">
                <p><b>{{ book.month }}</b></p>
            </div>
        </div>

        <h2 class="w3-text-teal w3-center">ಲೆೇಖಕರಿಗೆ ಮಾರ್ಗಸೂಚಿರ್ಳು</h2>

        <div class="w3-container w3-padding-16">

            <p>ನಿೋವೂ ‘ಮಿತ್ರರಶ್ಮಿಿಃ’ ಮಾಸಪತ್ರಿಕೆಗೆ ಲೋಖನವನುು ಬರೆಯಲಿಚಿಿಸುವಿರಾ?</p>
            <p>ಈ ಕೆಳಕಂಡ ಸಾಮಾನಯ ಮಾರ್ಗಸೂಚ್ಛರ್ಳನನು ಅನನಸರಿಸಿ.</p>
            <!-- <p>ತಮಮ ಲೋಖನ/ ಪಿತ್ರಕ್ರಿಯೆಯನುು ವಿದುಯನಾಮನ ಅಂಚೆ (ಈ-ಮೋಲ್) editormrashmi@gmail.com ಮುಖೋನ ಅರ್ವಾ
            9448243724 WhatsApp ಸಂಖಯಗೆ ಕಳುಹಿಸಿ. ತಮಮ ಸಂಪೂಣಷ ಹಸರು, ಹುದೆದ ಹಾಗೂ ಮಬೈಲ್ ಸಂಖಯಯನುು ತ್ರಳಿಸುವುದನುು
            ಮರೆಯದಿರಿ.</p> -->
        </div>

        <div class="w3-container w3-padding-16">
            <p class="w3-text-teal">ಲೇಖನದ ವಿಷಯಗಳು</p>
            <p> ಸಂಸಕೃತ, ಸಂಸಕೃತ್ರ, ಸಂಸಾಕರ,
                ಪರಂಪರೆ, ಶಾಸರರ್ಳ ಪರಿಚಯ, ಸಂಸಕೃತದ ಉತತಮ
                ದೀವತಾಸನತತ್ರಪದಯರ್ಳು, ಕೃಷ್ಣಕರ್ಣಗಮೃತ, ಮೀಘದೂತ
                ಮೊದಲಾದವುರ್ಳಂದ ಆಯದ ಮಧನರ, ಶೃಂಗಾರ ಪದಯರ್ಳು,
                ಸಂಸಕೃತದಲಿಿ ಅಲಂಕಾರರ್ಳು, ಸಂಸಕೃತ ಕವಿರ್ಳ ಪರಿಚಯ,
                ಪ್ರಿಚ್ಛೀನ ಸಂಸಕೃತ ರ್ಿಂಥರ್ಳ ಪರಿಚಯದಂದಿಗೆ ಅದನ್ುೀ
                ಆಧರಿಸಿದ ಪಿಸನತತ ಸಾಹಿತಯರ್ಳ ಪರಿಚಯ, ಸಂಸಕೃತದಲಿಿ
                ವಿಜ್ಞಾ ನ, ಆಚರಣೆಯಲಿಿರನವ ಮನಖಯ ಹಬಬರ್ಳು, ಆರೀರ್ಯ,
                ಯೀರ್, ಸಂಸಕೃತದಲಿಿ ತಾತ್ರಿಕ ವಿಚಾರರ್ಳು, ಸಂಸಕೃತದ
                ಪಿಹೀಲಿಕಾ, ಕೂಟ, ಸಮಸ್ಯಯ, ಅಪಹನುತ್ರ, ಅಂತರಾಲಾಪ,
                ಬಹಿರಾಲಾಪ, ಮೊದಲಾದ ಒರ್ಟನರ್ಳು, ಸಂಸಕೃತದ
                ಹಾಸ್ಯೀಕ್ತತರ್ಳು, ಜ್ಯೀತ್ರಿಃಶಾಸರ, ವ್ಯಯಕರಣ, ಧಮಗಶಾಸರ, ವ್ಯಸನತ,
                ಭಾರತ್ರೀಯ ದಶಗನರ್ಳು, ಭಾರತ್ರೀಯ ವಿದಯರ್ಳು, ವ್ಯಸನತ
                ಹಾರ್ೂ ಶಿಲಪಕಲ, ಭಾರತ್ರೀಯ ರ್ಣಿತಶಾಸರ, ಸಸಯಶಾಸರ,
                ಲೀಹಶಾಸರ, ವ್ಯಸನತಶಾಸರ ಹಾರ್ೂ ಶಿಲಪಶಾಸರ, ಶನಿತ್ರ, ಸಮೃತ್ರರ್ಳು,
                ಸಂಸಕೃತದ ದೀವತಾಸನತತ್ರರ್ಳು ಹಿೀಗೆ ಹಲವು ವಿಚಾರರ್ಳನನು
                ಆಧರಿಸಿ ತಾವು ಲೀಖನವನನು ಬರೆಯಬಹನದನ. ಅಂಕ್ಣಗಳು
                ಸವರಚಿತವಾಗಿರಲ್ಲ. ಕ್ೃತಿಚೌಯಯಕೆಕ ಅವಕಾಶವಿಲ್ಿ.</p>
        </div>

        <div class="w3-container w3-padding-16">
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
        </div>

        <div class="w3-container w3-padding-16">

            <p class="w3-text-teal">ಲೇಖನವನನನ ಕ್ಳುಹಿಸಬೇಕಾದ ವಿಳಾಸ </p>
            <p>ಲೀಖನದ ಕಡತವನನು
                editormrashmi@gmail.com (ವಿದನಯನ್ಮಮನ ಅಂಚೆ /
                ಈ-ಮೀಲ್) ಮನಖೀನ ಅಥವ್ಯ 9448243724
                WhatsApp ಸಂಖಯಗೆ ಕಳುಹಿಸಿ.</p>
        </div>

        <div class="w3-container w3-padding-16">

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
        </div>

        <div class="w3-container w3-padding-16">

            <p class="w3-text-teal">ಲೇಖಕ್ರ ಸಂಪಕ್ಯ ಮಾಹಿತಿ</p>
            <p>ಲೀಖನವನನು ಈ-ಮೀಲ್
                ಮಾಡನವ್ಯರ್ ಲೀಖಕರನ ತಮಮ ಸಂಪೂಣಗ ಹಸರನ, ಹನದದ
                ಹಾರ್ೂ ಮೊಬೈಲ್ ಸಂಖಯಯನನು ತ್ರಳಸನವುದನ.</p>
        </div>
        <h3 class="w3-text-teal w3-center">ಇನ್ನೇಕೆ ತಡ? ಲೇಖನವನನನ ಬರೆಯಲ್ನ ಆರಂಭಿಸ !</h3>
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