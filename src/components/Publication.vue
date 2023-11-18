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
                    title: doc.data.title,
                    orderId: doc.data.orderId
                })
            })
        })

        await readCollection(BooksBucket).then(_books => {

            _books.map((doc) => {
                this.books.push({
                    description: doc.data.description,
                    id: doc.id,
                    imageName: getFullUrlPath(BooksBucket + "/", doc.data.imageName, this.TOKEN),
                    name: doc.data.name,
                    author: doc.data.author,
                    groupId: doc.data.groupId,
                    publishedDate: doc.data.publishedDate
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
    <header class="w3-container w3-teal gradient w3-center header-padding">

        <div class="w3-container header">
            <img src="@/assets/logo/sun-book-logo.png" alt="Logo Left" class="w3-hide-small"/>
            <h3 class="w3-margin w3-xxlarge">ನಮ್ಮ ಪ್ರಕಟಣೆಗಳು</h3>
            <img class="right w3-hide-small" src="@/assets/logo/ebook-icon.png" alt="Logo Right" />
        </div>

        <p class="w3-xlarge">ಯಾವುದೇ ವಯೋಮಾನದವರಿಗೂ ಸುಲಭವಾಗಿ ಸಂಸ್ಕೃತ ಕಲಿಯಲು
            ಮೈತ್ರೀ ಸಂಸ್ಕೃತ ಸಂಸ್ಕೃತಿ ಪ್ರತಿಷ್ಠಾನವು ಈ ಪುಸ್ತಕಗಳನ್ನು ಪ್ರಕಟಿಸಿದೆ</p>
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
                    <!-- <p>{{ book.description }}</p> -->
                </div>
            </div>
        </div>

    </div>

    <div class="w3-container w3-center w3-padding-16" style="background-color: #fef102;">
        <h1 class="w3-margin" style="color: #8a5241;">ಈ ಪುಸ್ತಕಗಳು ನಿಮಗೆ ಬೇಕಾದಲ್ಲಿ,
            <!-- <router-link :to="{ name: 'purchase' }" class="">ಇಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿ</router-link> -->
            <a href="https://forms.gle/cXQCc6hWP7sQH6KC8" target="_blank">ಇಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿ</a></h1>
    </div>

    <div class="w3-row-padding w3-padding-8 w3-container w3-margin-bottom">
        <h2 class="w3-text-black w3-center">ಸ್ವಯಂ ಅಧ್ಯಯನಕ್ಕೆ ಕೆಲವು ಸೂಚನೆಗಳು</h2>

        <li class="w3-center">ನಿತ್ಯಪ್ರಾರ್ಥನೆಯನ್ನು ದಿನವೂ ಮಾಡಿಕೊಳ್ಳಿ</li>
        <li class="w3-center">ದಿನಕ್ಕೊಂದೇ ಪಾಠ ಕಲಿಯಿರಿ</li>
        <li class="w3-center">ಪಾಠವನ್ನು ಕನಿಷ್ಠ 5 ಸಲ ಜೋರಾಗಿ ಓದಿಕೊಳ್ಳಿ</li>
        <li class="w3-center">ಒಮ್ಮೆ ಆರಂಭಿಸಿದರೆ 100 ದಿನಗಳ, ನಿರಂತರ ಅಧ್ಯಯನಮಾಡಿ</li>
        <li class="w3-center">3-4 ಜನರ ಗುಂಪು ಮಾಡಿಕೊಂಡು ಅಭ್ಯಾಸಮಾಡಿ</li>
        <li class="w3-center">ನಿಮ್ಮ ಸುತ್ತ ಸಂಸ್ಕೃತದ ವಾತಾವರಣ ನಿರ್ಮಿಸಿ</li>
        <li class="w3-center">ದೂರದರ್ಶನ, ಆಕಾಶವಾಣಿಗಳ ಸಂಸ್ಕೃತವಾರ್ತೆ, ಸಂಸ್ಕೃತ ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ನೋಡಿ</li>
        <li class="w3-center">ಸ೦ಸ್ಕೃತದ ಶಬ್ಧಕೋಶ ಜೊತೆಗಿರಲಿ, ಸಂಸ್ಕೃತ ಪುಸ್ತಕಗಳನ್ನು ಸಂಗ್ರಹಿಸಿ, ಓದಿ</li>
        <li class="w3-center">ಸ೦ಸ್ಕೃತ ಕಾರ್ಯಕ್ರಮಗಳಲ್ಲಿ ಭಾಗವಹಿಸಿ</li>
        <li class="w3-center">ನಿತ್ಯವೂ ಬಳಸುವ ಆಂಗ್ಲ ಪದಗಳ ಬದಲಿಗೆ ಸಂಸ್ಕೃತ ಪದಗಳನ್ನೇ ಬಳಸಿ</li>
    </div>
</template>

<style>
.header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 10px;
    text-align: center;
}

.header img {
    width: 100px;
    height: 100px;
    margin-right: 10px;
}

/* .header h1 {
      font-size: 36px;
    } */
</style>