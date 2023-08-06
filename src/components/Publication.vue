<script lang="ts">
export default {
    data() {
        return {
            publicPath: import.meta.env.BASE_URL,
            books: [
                { name: 'ಸಂಸ್ಕಾರ ಸುಗಂದಃ', title: 'NOT_FOUND.jpg', author: 'ಡಾ.ಗಣಪತಿ ಹೆಗಡೆ', },
                { name: 'ಸಂಸ್ಕೃತಬಿಂದುಃ', title: 'samskrita_bindu.jpg', author: 'ಡಾ.ಗಣಪತಿ ಹೆಗಡೆ', },
                { name: 'ಸಂಸ್ಕ್ರತ ಗುರುಕುಲಮ್-1', title: 'sg_part1.jpg', author: 'ಡಾ.ಗಣಪತಿ ಹೆಗಡೆ', },
                { name: 'ಸಂಸ್ಕ್ರತ ಗುರುಕುಲಮ್-2', title: 'sg_part2.jpg', author: 'ಡಾ.ಗಣಪತಿ ಹೆಗಡೆ', },
                { name: 'ಸಂಸ್ಕ್ರತ ಗುರುಕುಲಮ್-3', title: 'sg_part3.jpg', author: 'ಡಾ.ಗಣಪತಿ ಹೆಗಡೆ', },
                { name: 'ಸಂಸ್ಕ್ರತ ಗುರುಕುಲಮ್-4 ಸುಭಾಷಿತಮ್', title: 'sg_part4.jpg', author: 'ಡಾ.ಗಣಪತಿ ಹೆಗಡೆ', },
                { name: 'ಸಂಸ್ಕ್ರತ ಗುರುಕುಲಮ್-5 ಸಂವಾದಶತಕಮ್', title: 'padakosha.jpg', author: 'ಡಾ.ಗಣಪತಿ ಹೆಗಡೆ', },
                { name: 'ರಸಬಿಂದು', title: 'NOT_FOUND.jpg', author: 'ಡಾ.ಗಣಪತಿ ಹೆಗಡೆ', },
                { name: 'ನಿತ್ಯವ್ಯವಹಾರ ಪದಕೋಶಃ', title: 'NOT_FOUND.jpg', author: 'ಡಾ.ಗಣಪತಿ ಹೆಗಡೆ', },
                { name: 'ಗೀತಾಮೃತಮ್', title: 'geetamritam.jpg', author: 'ಡಾ.ಗಣಪತಿ ಹೆಗಡೆ', },
                { name: 'ಅಮರಕೋಶಃ', title: 'amarakosha.jpg', author: 'ಡಾ.ಗಣಪತಿ ಹೆಗಡೆ', },
                { name: 'ನೀತಿಶತಕಮ್', title: 'NOT_FOUND.jpg', author: 'ಡಾ.ಗಣಪತಿ ಹೆಗಡೆ', },
                { name: 'ವಿಭಕ್ತಿ ಕೋಶಃ', title: 'vibaktikosha.jpg', author: 'ವರ್ಷಿತಾ ಜನಕರಾಜು', },
                { name: 'ಸುವಚನಮ್', title: 'suvachanam.jpg', author: 'ಬಿ.ಎನ್. ವೈದೇಹಿ ಕುಮಾರ್', },
                { name: 'ಕ್ರಿಯಾಪದಕೋಶಃ', title: 'kriyapada.jpg', author: 'ಡಾ.ತಿರುಮಲ', },
            ]
        };
    }
};

</script>

<template>
    <section class="u-align-center u-clearfix u-section-1" id="sec-882c">
        <div class="u-clearfix u-sheet u-sheet-1">
            <h1 class="u-text u-text-default u-title u-text-1">ಮೈತ್ರಿ ಸಂಸ್ಕೃತ ಸಂಸ್ಕೃತಿ ಪ್ರತಿಷ್ಠಾನಮ್ ಪ್ರಕಟಣೆಗಳು</h1>
        </div>
    </section>
    <section class="u-clearfix u-section-2" id="sec-1ad4">
        <div class="u-clearfix u-sheet u-sheet-1">
            <p class="u-align-center u-large-text u-text u-text-default u-text-variant u-text-1">ಪುಸ್ತಕಗಳು ತಮಗೆ ಬೇಕಾದಲ್ಲಿ
                ದಯವಿಟ್ಟು 9740855248 ಸಂಖ್ಯೆಗೆ ವಾಟ್ಸಪ್ ಮೂಲಕ ನಿಮ್ಮ ವಿಳಾಸವನ್ನು ಕಳಿಸಿಕೊಡಿ</p>
            <div class="u-expanded-width u-list u-list-1">
                <div class="u-repeater u-repeater-1">
                    <div v-for="book in books" class="u-container-style u-list-item u-repeater-item">
                        <div class="u-container-layout u-similar-container u-container-layout-1">
                            <img alt="" class="u-expanded-width u-image u-image-contain u-image-default u-image-1"
                                data-image-width="2000" data-image-height="3000"
                                :src="`${publicPath}./books/${book.title}`">
                            <h3 class="u-align-center u-text u-text-default u-text-2">{{ book.name }}</h3>
                            <p class="u-align-center u-text u-text-3">{{ book.author }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <p class="u-align-center u-large-text u-text u-text-default u-text-variant u-text-8">ಪುಸ್ತಕಗಳು ತಮಗೆ ಬೇಕಾದಲ್ಲಿ
                ದಯವಿಟ್ಟು 9740855248 ಸಂಖ್ಯೆಗೆ ವಾಟ್ಸಪ್ ಮೂಲಕ ನಿಮ್ಮ ವಿಳಾಸವನ್ನು ಕಳಿಸಿಕೊಡಿ</p>
        </div>

    </section>
</template>


<style scoped>
.u-section-1 .u-sheet-1 {
    min-height: 203px;
}

.u-section-1 .u-text-1 {
    margin: 20px auto 0;
}

.u-section-1 .u-text-2 {
    margin: 20px 59px;
}

@media (max-width: 1199px) {
    .u-section-1 .u-text-2 {
        margin-left: 0;
        margin-right: 0;
    }
}

.u-section-2 .u-sheet-1 {
    min-height: 554px;
}

.u-section-2 .u-text-1 {
    font-weight: 700;
    margin: 18px 30px 0;
}

.u-section-2 .u-list-1 {
    grid-template-rows: auto;
    margin: 0;
}

.u-section-2 .u-repeater-1 {
    grid-template-columns: repeat(3, 33.3333%);
    min-height: 375px;
    grid-gap: 0px;
}

.u-section-2 .u-container-layout-1 {
    padding: 20px 30px;
}

.u-section-2 .u-image-1 {
    height: 213px;
    margin: 0 auto 0 0;
}

.u-section-2 .u-text-2 {
    margin: 20px 31px 0;
}

.u-section-2 .u-text-3 {
    margin: 20px 0 0;
}

.u-section-2 .u-container-layout-2 {
    padding: 20px 30px;
}

.u-section-2 .u-image-2 {
    height: 213px;
    margin: 0 auto 0 0;
}

.u-section-2 .u-text-4 {
    margin: 20px 31px 0;
}

.u-section-2 .u-text-5 {
    margin: 20px 0 0;
}

.u-section-2 .u-container-layout-3 {
    padding: 20px 30px;
}

.u-section-2 .u-image-3 {
    height: 213px;
    margin: 0 auto 0 0;
}

.u-section-2 .u-text-6 {
    margin: 20px 31px 0;
}

.u-section-2 .u-text-7 {
    margin: 20px 0 0;
}

.u-section-2 .u-text-8 {
    margin: 30px 30px 60px;
}

@media (max-width: 1199px) {
    .u-section-2 .u-text-1 {
        width: auto;
    }

    .u-section-2 .u-list-1 {
        margin-right: initial;
        margin-left: initial;
    }

    .u-section-2 .u-repeater-1 {
        grid-template-columns: repeat(3, 33.333333333333336%);
        min-height: 309px;
    }

    .u-section-2 .u-image-1 {
        height: 169px;
        margin-right: initial;
        margin-left: initial;
    }

    .u-section-2 .u-image-2 {
        height: 169px;
        margin-right: initial;
        margin-left: initial;
    }

    .u-section-2 .u-image-3 {
        height: 169px;
        margin-right: initial;
        margin-left: initial;
    }
}

@media (max-width: 991px) {
    .u-section-2 .u-repeater-1 {
        grid-template-columns: repeat(2, 50%);
        min-height: 710px;
    }

    .u-section-2 .u-image-1 {
        height: 200px;
        margin-right: initial;
        margin-left: initial;
    }

    .u-section-2 .u-image-2 {
        height: 200px;
        margin-right: initial;
        margin-left: initial;
    }

    .u-section-2 .u-image-3 {
        height: 200px;
        margin-right: initial;
        margin-left: initial;
    }
}

@media (max-width: 767px) {
    .u-section-2 .u-list-1 {
        margin-top: 20px;
        margin-right: initial;
        margin-left: initial;
    }

    .u-section-2 .u-repeater-1 {
        grid-template-columns: 100%;
    }

    .u-section-2 .u-container-layout-1 {
        padding-left: 10px;
        padding-right: 10px;
    }

    .u-section-2 .u-image-1 {
        height: 347px;
        margin-right: initial;
        margin-left: initial;
    }

    .u-section-2 .u-container-layout-2 {
        padding-left: 10px;
        padding-right: 10px;
    }

    .u-section-2 .u-image-2 {
        height: 347px;
        margin-right: initial;
        margin-left: initial;
    }

    .u-section-2 .u-container-layout-3 {
        padding-left: 10px;
        padding-right: 10px;
    }

    .u-section-2 .u-image-3 {
        height: 347px;
        margin-right: initial;
        margin-left: initial;
    }
}

@media (max-width: 575px) {
    .u-section-2 .u-image-1 {
        height: 214px;
        margin-right: initial;
        margin-left: initial;
    }

    .u-section-2 .u-image-2 {
        height: 214px;
        margin-right: initial;
        margin-left: initial;
    }

    .u-section-2 .u-image-3 {
        height: 214px;
        margin-right: initial;
        margin-left: initial;
    }
}
</style>