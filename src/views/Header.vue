<script lang="ts">
export default {
    data() {
        return {
            pages: [
                { name: 'Events', href: 'events' },
                { name: 'Publications', href: 'books' },
                { name: 'Mitrarashmi', href: 'mitrarashmi' },
                { name: 'Arogya Subashitagalu', href: 'arogyasubashita' },
                { name: 'Nitya Subashitagalu', href: 'nityasubashita' },
            ]
        }
    }
}
</script>

<template>
    <div class="w3-top">
        <div class="w3-bar w3-teal w3-card w3-left-align w3-large">
            <a id="toggleNavigation" class="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-teal"
                href="javascript:void(0);" onclick="myFunction()"><i class="fa fa-bars"></i></a>

            <router-link :to="{ name: 'home' }" class="w3-bar-item w3-button w3-padding-large w3-white">Home</router-link>
            <router-link v-for="page in pages" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"
                :to="{ name: page.href }">{{ page.name }}</router-link>

            <!-- <div class="w3-dropdown-click w3-mobile w3-hide-small">
                <button class="w3-button w3-padding-large" onclick="dropdownFunction()">
                    Dropdown <i class="fa fa-caret-down"></i>
                </button>
                <div id="demo" class="w3-dropdown-content w3-bar-block w3-white">
                    <a href="#" class="w3-bar-item w3-button w3-mobile">Link 1</a>
                    <a href="#" class="w3-bar-item w3-button w3-mobile">Link 2</a>
                    <a href="#" class="w3-bar-item w3-button w3-mobile">Link 3</a>
                </div>
            </div> -->

        </div>

        <!-- Navbar on small screens -->
        <div id="navDemo" class="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium w3-large">
            <router-link v-for="page in pages" class="w3-bar-item w3-button w3-padding-large" :to="{ name: page.href }">{{
                page.name }}</router-link>
        </div>
    </div>
</template>