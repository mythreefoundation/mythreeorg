<script lang="ts">
export default {
    data() {
        return {
            pages: [
                { name: 'ಕಾರ್ಯಕ್ರಮಗಳು', href: 'events' },
                { name: 'ಪ್ರಕಟಣೆಗಳು', href: 'books' },
                // { name: 'ಲೇಖನಗಳು', href: 'articles' },
                { name: 'ಮಿತ್ರರಶ್ಮಿ', href: 'mitrarashmi' },
                { name: 'ಆರೋಗ್ಯ ಸುಭಾಷಿತಗಳು', href: 'arogyasubashita' },
                { name: 'ನಿತ್ಯ ಸುಭಾಷಿತಗಳು', href: 'nityasubashita' },
                { name: 'ಸುವಚನಗಳು', href: 'suvachana' },
            ]
        }
    }
}
</script>

<template>
    <div class="w3-top">
        <div class="w3-bar w3-card w3-left-align w3-large page-block">
            <a id="toggleNavigation"
                class="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-brown w3-large w3-white"
                href="javascript:void(0);" onclick="myFunction()"><i class="fa fa-bars"></i></a>

            <router-link :to="{ name: 'home' }" class="w3-bar-item w3-button w3-padding-large w3-white">ಮುಖಪುಟ</router-link>
            <router-link v-for="page in pages" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-brown page-block"
                :to="{ name: page.href }">{{ page.name }}</router-link>

        </div>

        <!-- Navbar on small screens -->
        <div id="navDemo" class="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium w3-large">
            <router-link v-for="page in pages" class="w3-bar-item w3-button w3-padding-large w3-hover-brown" :to="{ name: page.href }">{{
                page.name }}</router-link>
        </div>
    </div>
</template>

<style>
.page-block{
    background-color: #fcf7c6;
    /* background-image: linear-gradient(to bottom right, #875433, #e5e3b3) */
}
</style>