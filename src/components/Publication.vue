<script lang="ts">
export default {
    data() {
        return {
            imageSizePx: 250,
            publicPath: import.meta.env.BASE_URL,
            books: [
                { name: 'ಸಂಸ್ಕಾರ ಸುಗಂಧಃ', title: 'samskara_suganda.jpeg', author: 'ಡಾ.ಗಣಪತಿ ಹೆಗಡೆ', },
                { name: 'ಸಂಸ್ಕೃತ ಬಿಂದುಃ', title: 'samskrita_bindu.jpg', author: 'ಡಾ.ಗಣಪತಿ ಹೆಗಡೆ', },
                { name: 'ಸಂಸ್ಕೃತ ಗುರುಕುಲಮ್-1', title: 'sg_part1.jpg', author: 'ಡಾ.ಗಣಪತಿ ಹೆಗಡೆ', },
                { name: 'ಸಂಸ್ಕೃತ ಗುರುಕುಲಮ್-2', title: 'sg_part2.jpg', author: 'ಡಾ.ಗಣಪತಿ ಹೆಗಡೆ', },
                { name: 'ಸಂಸ್ಕೃತ ಗುರುಕುಲಮ್-3', title: 'sg_part3.jpg', author: 'ಡಾ.ಗಣಪತಿ ಹೆಗಡೆ', },
                { name: 'ಸಂಸ್ಕೃತ ಗುರುಕುಲಮ್-4 ಸುಭಾಷಿತಮ್', title: 'sg_part4.jpg', author: 'ಡಾ.ಗಣಪತಿ ಹೆಗಡೆ', },
                { name: 'ಸಂಸ್ಕೃತ ಗುರುಕುಲಮ್-5 ಸಂಖ್ಯಾವಿಶೇಷ ಪದಕೋಶಃ', title: 'padakosha.jpg', author: 'ಡಾ.ಗಣಪತಿ ಹೆಗಡೆ', },
                { name: 'ರಸಬಿಂದು', title: 'rasabindu.jpeg', author: 'ಡಾ.ಗಣಪತಿ ಹೆಗಡೆ', },
                { name: 'ನಿತ್ಯವ್ಯವಹಾರ ಪದಕೋಶಃ', title: 'NOT_FOUND.jpg', author: 'ಡಾ.ಗಣಪತಿ ಹೆಗಡೆ', },
                { name: 'ಗೀತಾಮೃತಮ್', title: 'geetamritam.jpg', author: 'ಡಾ.ಗಣಪತಿ ಹೆಗಡೆ', },
                { name: 'ಅಮರಕೋಶಃ', title: 'amarakosha.jpg', author: 'ಡಾ.ಗಣಪತಿ ಹೆಗಡೆ', },
                { name: 'ನೀತಿಶತಕಮ್', title: 'NOT_FOUND.jpg', author: 'ಡಾ.ಗಣಪತಿ ಹೆಗಡೆ', },
                { name: 'ಸುವರ್ಣಮಾಲಾ', title: 'suvarnamala.jpeg', author: 'ಡಾ.ಗಣಪತಿ ಹೆಗಡೆ', },
                { name: 'ವಿಭಕ್ತಿಕೋಶಃ', title: 'vibaktikosha.jpg', author: 'ಕು.ವರ್ಷಿತಾ ಜನಕರಾಜು', },
                { name: 'ಸುವಚನಮ್', title: 'suvachanam.jpg', author: 'ಶ್ರೀಮತಿ.ಬಿ.ಎನ್. ವೈದೇಹಿ ಕುಮಾರ್', },
                { name: 'ಲಘುಕ್ರಿಯಾಪದಸಂಗ್ರಹಃ', title: 'kriyapada.jpg', author: 'ಡಾ.ತಿರುಮಲ', },
            ]
        };
    }
};

</script>

<template>
    <header class="w3-container w3-teal w3-center" style="padding:128px 16px">
        <h3 class="w3-margin w3-jumbo">ಪ್ರಕಟಣೆಗಳು</h3>
        <p class="w3-xlarge">Template by w3.css</p>
    </header>

    <div class="w3-row-padding w3-padding-64 w3-container">
        <div class="flex-container">
            <div v-for="book in books" style="padding: 20px;">

                <div :style="`display: inline-block; margin: 2px; box-shadow: 5px 5px 5px gray; width: 200px;`">
                    <img :src="`${publicPath}./books/${book.title}`" :alt="`${book.title}`" :style="`max-height: 250px;
    max-width: 200px; width: 100%;height: ${imageSizePx}px;object-fit: fill;`">

                    <!-- <p>{{ book.name }}</p> -->
                    <!-- <p>{{ book.author }}</p> -->
                </div>

            </div>
        </div>



        <div class="iframe-container">
            <iframe class="responsive-iframe"
                src="https://docs.google.com/forms/d/e/1FAIpQLSfx3c5267Pc-emHYswdDSmoKC7PUgB9MB6tcWZZ9jA1-zYvGg/viewform?embedded=true"
                width="750" height="1685" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
    </div>
</template>


<style scoped>
p {
    font-size: 12px;
}
</style>