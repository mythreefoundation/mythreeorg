<script lang="ts">
import { fetchImageURL, getFullUrlPath, getTokenFromUrl, groupBy, readCollection } from '../utils/utils';
import { EventsBucket, type Book, BooksBucket, type Group, GroupsBucket } from '../utils/models';

export default {
    data() {
        return {
            TOKEN: '',
            publicPath: import.meta.env.BASE_URL,
            groups: [] as Array<Group>,
            books: [] as Array<Book>,
            imageUrl: '',
            images: [] as string[],
            array: [] as Array<string>,
            groupedBooks: {} as Record<string, any[]>,
        };
    },
    async created() {
        await fetchImageURL("logo.png").then(img => {
            this.TOKEN = getTokenFromUrl(img);
        })
        await readCollection(GroupsBucket).then(_grp => {

            _grp.map((doc) => {
                this.groups.push({
                    id: doc.data.groupId,
                    title: doc.data.title
                })
            })
        })

        await readCollection(BooksBucket).then(_books => {

            _books.map((doc) => {
                this.books.push({
                    description: doc.data.description,
                    id: doc.id,
                    imageName: getFullUrlPath(BooksBucket, doc.data.imageName, this.TOKEN),
                    name: doc.data.name,
                    author: doc.data.author,
                    groupId: doc.data.groupId
                })
            })
        }).then(() => {
            this.groupedBooks = groupBy("groupId")(this.books);

        })
    },
    methods: {
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
        <div v-for="(_groupedBooks, title) in groupedBooks" class="w3-container w3-margin-bottom">
            <h3 class="w3-center">{{ getGroupName(title) }}</h3>
            <div v-for="book in _groupedBooks" class="w3-third w3-container w3-margin-bottom"
                style="box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                <div class="w3-image-container"
                    style="height: 300px; display: flex; align-items: center; justify-content: center;">

                    <img :src="`${book.imageName}`" :alt="`${book.title}`" style="max-width: 100%; max-height: 100%;">

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