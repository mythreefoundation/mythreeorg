<script lang="ts">
import { fetchImageURL, getFullUrlPath, getTokenFromUrl, groupBy, readCollection } from '../utils/utils';
import { EventsBucket, type Book, BooksBucket } from '../utils/models';

export default {
    data() {
        return {
            TOKEN: '',
            publicPath: import.meta.env.BASE_URL,
            groups: [
                { id: '1', title: 'ಕಳೆದ ಏಳು ವರ್ಷಗಳಿಂದ ವಿಜಯವಾಣಿ ದಿನಪತ್ರಿಕೆಯಲ್ಲಿ ಪ್ರಕಟವಾದ ಸಂಸ್ಕೃತಪಾಠಗಳ ಸಂಗ್ರಹ. ಪ್ರತಿಭಾಗದಲ್ಲಿಯೂ 100 ಪಾಠಗಳಿರುತ್ತವೆ' },
                { id: '2', title: 'ಸಂಸ್ಕೃತ ಕಲಿಕೆಗೆ ಅತ್ಯಂತ ಉಪಯೋಗಿಯಾದ ಪುಸ್ತಕಗಳು. ಇವುಗಳ ಸ್ವಯಂ ಅಧ್ಯಯನದಿಂದ ಆರಂಭಿಕ ಸಂಸ್ಕೃತದ ಜ್ಞಾನವನ್ನು ಗಳಿಸಬಹುದು' }
            ],
            // books: [
            //     { name: 'ಸಂಸ್ಕಾರ ಸುಗಂಧಃ', groupId: '2', title: 'samskara_suganda.jpeg', description: 'ನಿತ್ಯ ಸಂಸ್ಕಾರಗಳನ್ನು ಪರಿಚಯಿಸುವ ಪುಸ್ತಕ. ವಿಶೇಷವಾಗಿ ಮಕ್ಕಳಿಗೆ ಉಪಯೋಗಿಯಾದುದು. ನಿತ್ಯಸಂಸ್ಕಾರಶ್ಲೋಕಗಳು, ನಿತ್ಯದೇವತಾ ಪ್ರಾರ್ಥನೆಗಳು, ನಿತ್ಯಸುಭಾಷಿತಗಳು, ನೀತಿಕಥೆಗಳು, ಪವಿತ್ರ ನದಿಗಳು, ಪದಿತ್ರಕ್ಷೇತ್ರಗಳು ಹೀಗೆ ಹತ್ತು ಹಲವು ವಿಷಯಗಳಿರುವ ಸಂಸ್ಕಾರಪ್ರದಾನ ಮಾಡುವ ಪುಸ್ತಕ.', author: 'ಡಾ.ಗಣಪತಿ ಹೆಗಡೆ', },
            //     { name: 'ಸಂಸ್ಕೃತ ಬಿಂದುಃ', groupId: '', title: 'samskrita_bindu.jpg', description: '', author: 'ಡಾ.ಗಣಪತಿ ಹೆಗಡೆ', },
            //     { name: 'ಸಂಸ್ಕೃತ ಗುರುಕುಲಮ್-1', groupId: '1', title: 'sg_part1.jpg', description: '', author: 'ಡಾ.ಗಣಪತಿ ಹೆಗಡೆ', },
            //     { name: 'ಸಂಸ್ಕೃತ ಗುರುಕುಲಮ್-2', groupId: '1', title: 'sg_part2.jpg', description: '', author: 'ಡಾ.ಗಣಪತಿ ಹೆಗಡೆ', },
            //     { name: 'ಸಂಸ್ಕೃತ ಗುರುಕುಲಮ್-3', groupId: '1', title: 'sg_part3.jpg', description: '', author: 'ಡಾ.ಗಣಪತಿ ಹೆಗಡೆ', },
            //     { name: 'ಸಂಸ್ಕೃತ ಗುರುಕುಲಮ್-4 ಸುಭಾಷಿತಮ್', groupId: '1', title: 'sg_part4.jpg', description: '', author: 'ಡಾ.ಗಣಪತಿ ಹೆಗಡೆ', },
            //     { name: 'ಸಂಸ್ಕೃತ ಗುರುಕುಲಮ್-5 ಸಂಖ್ಯಾವಿಶೇಷ ಪದಕೋಶಃ', groupId: '1', title: 'padakosha.jpg', description: '', author: 'ಡಾ.ಗಣಪತಿ ಹೆಗಡೆ', },
            //     { name: 'ರಸಬಿಂದು', groupId: '2', title: 'rasabindu.jpeg', description: 'ವೇದಗಳ ಕಾಲದಿಂದ ಆರಂಭಿಸಿ ಇಂದಿನವರೆಗೆ ನಮ್ಮ ಸನಾತನ ಸಂಸ್ಕತಿಯ ವಿಚಾರಗಳನ್ನು ಸರಳವಾದ ಪ್ರಶ್ನೋತ್ತರಗಳ ಮೂಲಕ ತಿಳಿಯಲು ಈ ಪುಸ್ತಕವು ಬಹಳ ಸಹಕಾರಿಯಾಗಿದೆ. ವೇದಗಳು, ರಾಮಾಯಣ, ಮಹಾಭಾರತ, ಪುರಾಣಗಳು, ಸಾಮಾನ್ಯಜ್ಞಾನ, ಸಂಖ್ಯಾವಿಶೇಷ ಹೀಗೆ ಹತ್ತು ವಿಭಾಗಗಳಿರುವ ಈ ಪುಸ್ತಕದಲ್ಲಿ ಸಾವಿರಕ್ಕೂ ಹೆಚ್ಚು ಪ್ರಶ್ನೋತ್ತರಗಳಿವೆ. ತನ್ಮೂಲಕ ನಮ್ಮ ಸನಾತನ ಸಂಸ್ಕೃತಿಯನ್ನು ಪರಂಪರೆಯನ್ನು ಅರಿಯಬಹುದು.', author: 'ಡಾ.ಗಣಪತಿ ಹೆಗಡೆ', },
            //     { name: 'ನಿತ್ಯವ್ಯವಹಾರ ಪದಕೋಶಃ', groupId: '', title: 'NOT_FOUND.jpg', description: '', author: 'ಡಾ.ಗಣಪತಿ ಹೆಗಡೆ', },
            //     { name: 'ಗೀತಾಮೃತಮ್', groupId: '2', title: 'geetamritam.jpg', description: 'ವ್ಯಕ್ತಿತ್ತ್ವ ವಿಕಸನಕ್ಕಾಗಿ, ಜೀವನದ ಧ್ಯೇಯೋದ್ದೇಶಗಳ ಅರಿವಿಗಾಗಿ, ವಿದ್ಯಾರ್ಥಿಗಳ ಹಿತಕ್ಕಾಗಿ, ಮನಸ್ಸಿನ ಏಕಾಗ್ರತೆಗಾಗಿ, ಬದುಕಿನ ಪರಿಪೂರ್ಣತೆಯ ಜ್ಞಾನಕ್ಕಾಗಿ, ಸುಂದರ, ಸುದೃಢ ಬದುಕಿನ ನಿರ್ಮಾಣಕ್ಕಾಗಿ, ಧರ್ಮ, ಸಂಸ್ಥತಿ, ಸದಾಚಾರಗಳ ಪರಿಚಯಕ್ಕಾಗಿ, ರಾಷ್ಟ್ರದ ಸಮಗ್ರತೆಯ ಅರಿವು ಮೂಡಿಸಲು ಭಗವದ್ಗೀತೆಯಲ್ಲಿ ಸೂಚಿಸಿದ ಅಂಶಗಳ ಸಂಗ್ರಹದ ಕೃತಿ.', author: 'ಡಾ.ಗಣಪತಿ ಹೆಗಡೆ', },
            //     { name: 'ಅಮರಕೋಶಃ', groupId: '', title: 'amarakosha.jpg', description: '', author: 'ಡಾ.ಗಣಪತಿ ಹೆಗಡೆ', },
            //     { name: 'ನೀತಿಶತಕಮ್', groupId: '2', title: 'NOT_FOUND.jpg', description: 'ಶತಕತ್ರಯ ಗ್ರಂಥದ ಕರ್ತೃವಾದ ರಾಜಾ ಭರ್ತೃಹರಿಯು ರಚಿಸಿದ ನೀತಿಪರವಾದ 100 ಸುಭಾಷಿತಗಳ ಸಂಗ್ರಹ ಮತ್ತು ವಿವರಣೆ.', author: 'ಡಾ.ಗಣಪತಿ ಹೆಗಡೆ', },
            //     { name: 'ಸುವರ್ಣಮಾಲಾ', groupId: '', title: 'suvarnamala.jpeg', description: '', author: 'ಡಾ.ಗಣಪತಿ ಹೆಗಡೆ', },
            //     { name: 'ವಿಭಕ್ತಿಕೋಶಃ', groupId: '2', title: 'vibaktikosha.jpg', description: 'ನಿತ್ಯಬಳಕೆಯಲ್ಲಿರುವ, ವ್ಯವಹಾರಕ್ಕೆ ಬೇಕಾದ 100 ಪುಲ್ಲಿಂಗ, ಸ್ತ್ರೀಲಿಂಗ,ನಪುಂಸಕಲಿಂಗ ಶಬ್ದಗಳ ಸಂಗ್ರಹವಿದ್ದು ಸಂಸ್ಕತಕಲಿಕೆಯಲ್ಲಿ ಸಹಕಾರಿ', author: 'ಕು.ವರ್ಷಿತಾ ಜನಕರಾಜು', },
            //     { name: 'ಸುವಚನಮ್', groupId: '', title: 'suvachanam.jpg', description: '', author: 'ಶ್ರೀಮತಿ.ಬಿ.ಎನ್. ವೈದೇಹಿ ಕುಮಾರ್', },
            //     { name: 'ಲಘುಕ್ರಿಯಾಪದಸಂಗ್ರಹಃ', groupId: '2', title: 'kriyapada.jpg', description: 'ವಾಕ್ಕರಚನೆಯಲ್ಲಿ ಸರಿಯಾದ ಸಂದರ್ಭದಲ್ಲಿ ಯೋಗ್ಯವಾದ ಪುರುಷ, ವಚನಗಳನ್ನು ಪ್ರಯೋಗಿಸಲು ಈ ಪುಸ್ತಕವು ಮಾರ್ಗದರ್ಶನ ಮಾಡಿಸುತ್ತದೆ. ನಿತ್ಯ ಬಳಕೆಯಾಗುವ ಕ್ರಿಯಾರೂಪಗಳ ಪರಿಚಯ ಪಡೆಯಬಹುದು.', author: 'ಡಾ.ತಿರುಮಲ', },
            // ] as Array<Book>,
            books: [] as Array<Book>,
            imageUrl: '',
            images: [] as string[],
            array: [] as Array<string>,
        };
    },
    async created() {
        await fetchImageURL("logo.png").then(img => {
            this.TOKEN = getTokenFromUrl(img);
        })

        await readCollection(BooksBucket).then(_books => {

            _books.map((doc) => {
                this.books.push({
                    description: doc.data.description,
                    id: doc.id,
                    imageName: getFullUrlPath(BooksBucket, doc.data.imageName, this.TOKEN),
                    name: doc.data.name,
                    author: doc.data.author,
                    groupId: "2"
                })
            })
        })
    },
    methods: {
        groupBooks() {
            return groupBy("groupId")(this.books);
        },
        getGroupName(id: string) {
            return this.groups.find(g => g.id == id)?.title;
        }
    }
}

</script>

<template>
    <header class="w3-container w3-teal w3-center" style="padding:64px 16px">
        <h3 class="w3-margin w3-jumbo">ನಮ್ಮ ಪ್ರಕಟಣೆಗಳು</h3>
        <p class="w3-xlarge">ಯಾವುದೇ ವಯೋಮಾನದವರಿಗೂ ಸುಲಭವಾಗಿ ಸಂಸ್ಕೃತ ಕಲಿಯಲು
            ಮೈತ್ರೀ ಸಂಸ್ಕೃತ ಸಂಸ್ಕೃತಿ ಪ್ರತಿಷ್ಠಾನವು ಈ ಪುಸ್ತಕಗಳನ್ನು ಪ್ರಕಟಿಸಿದೆ.</p>
    </header>

    <div class="w3-row-padding w3-padding-32 w3-container">
        <div v-for="(groupedBooks, title) in groupBooks()" class="w3-container w3-margin-bottom">
            <h3 class="w3-center">{{ getGroupName(title) }}</h3>
            <div v-for="book in groupedBooks" class="w3-third w3-container w3-margin-bottom"
                style="box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                <div class="w3-image-container"
                    style="height: 300px; display: flex; align-items: center; justify-content: center;">

                    <img :src="`${publicPath}./books/${book.title}`" :alt="`${book.title}`"
                        style="max-width: 100%; max-height: 100%;">

                </div>
                <div class="w3-container w3-white w3-center">
                    <h4><b>{{ book.name }}</b></h4>
                    <p><b>{{ book.author }}</b></p>
                    <p>{{ book.description }}</p>
                </div>
            </div>
        </div>

    </div>

    <div class="w3-row-padding w3-padding-8 w3-container w3-margin-bottom">
        <h2 class="w3-text-teal w3-center">ಸ್ವಯಂ ಅಧ್ಯಯನಕ್ಕೆ ಕೆಲವು ಸೂಚನೆಗಳು</h2>

        <li>ನಿತ್ಯಪ್ರಾರ್ಥನೆಯನ್ನು ದಿನವೂ ಮಾಡಿಕೊಳ್ಳಿ</li>
        <li>ದಿನಕ್ಕೊಂದೇ ಪಾಠ ಕಲಿಯಿರಿ</li>
        <li>ಪಾಠವನ್ನು ಕನಿಷ್ಠ 5 ಸಲ ಜೋರಾಗಿ ಓದಿಕೊಳ್ಳಿ</li>
        <li>ಒಮ್ಮೆ ಆರಂಭಿಸಿದರೆ 100 ದಿನಗಳ, ನಿರಂತರ ಅಧ್ಯಯನಮಾಡಿ</li>
        <li>3-4 ಜನರ ಗುಂಪು ಮಾಡಿಕೊಂಡು ಅಭ್ಯಾಸಮಾಡಿ</li>
        <li>ನಿಮ್ಮ ಸುತ್ತ ಸಂಸ್ಕೃತದ ವಾತಾವರಣ ನಿರ್ಮಿಸಿ</li>
        <li>ದೂರದರ್ಶನ, ಆಕಾಶವಾಣಿಗಳ ಸಂಸ್ಕೃತವಾರ್ತೆ, ಸಂಸ್ಕೃತ ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ನೋಡಿ</li>
        <li>ಸ೦ಸ್ಕೃತದ ಶಬ್ಧಕೋಶ ಜೊತೆಗಿರಲಿ, ಸಂಸ್ಕೃತ ಪುಸ್ತಕಗಳನ್ನು ಸಂಗ್ರಹಿಸಿ, ಓದಿ</li>
        <li>ಸ೦ಸ್ಕೃತ ಕಾರ್ಯಕ್ರಮಗಳಲ್ಲಿ ಭಾಗವಹಿಸಿ</li>
        <li>ನಿತ್ಯವೂ ಬಳಸುವ ಆಂಗ್ಲ ಪದಗಳ ಬದಲಿಗೆ ಸಂಸ್ಕೃತ ಪದಗಳನ್ನೇ ಬಳಸಿ</li>
    </div>

    <div class="iframe-container">
        <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfx3c5267Pc-emHYswdDSmoKC7PUgB9MB6tcWZZ9jA1-zYvGg/viewform?embedded=true"
            width="750" height="1685" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    </div>

    <div class="w3-container w3-black w3-center w3-opacity w3-padding-64">
        <h1 class="w3-margin w3-xlarge">ಈ ಪುಸತಕಗಳು ನಿಮಗೆ ಬೇಕಾದಲ್ಲಿ ಆಯಾ ಪುಸತಕಗಳ ಒಟ್ಟು ಬಲೆ ಹಾಗೂ ಅಂಚೆವೆಚ್ಚ ರೂ. 50/- ನುು ಸೇರಿಸಿ
            94482
            43724 ಸಂಖ್ಯೆಗೆ PhonePay ಮುಖಾಂತರ ಕಳಿಸಬಹುದು</h1>
    </div>
</template>


<style scoped></style>