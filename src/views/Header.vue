<script lang="ts">
export default {
    data() {
        return {
            pages: [
                { name: 'Events', href: 'events' },
                { name: 'Publications', href: 'books' }
            ]
        }
    }
}
</script>

<template>
    <div class="w3-top">
        <div class="w3-bar w3-teal w3-card w3-left-align w3-large">
            <a class="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-teal"
                href="javascript:void(0);" onclick="myFunction()" title="Navigation"><i class="fa fa-bars"></i></a>

            <router-link :to="{ name: 'home' }" class="w3-bar-item w3-button w3-padding-large w3-white">Home</router-link>
            <router-link v-for="page in pages" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"
                :to="{ name: page.href }">{{ page.name }}</router-link>

        </div>

        <!-- Navbar on small screens -->
        <div id="navDemo" class="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium w3-large">
            <router-link v-for="page in pages" class="w3-bar-item w3-button w3-padding-large" :to="{ name: page.href }">{{
                page.name }}</router-link>
        </div>
    </div>
</template>