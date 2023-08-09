<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './views/Header.vue'
import Footer from './views/Footer.vue'
import { defineComponent } from 'vue';

</script>

<script lang="ts">
export default defineComponent({
  data() {
    return {
      message: 'Hello World!',
    };
  },
});

</script>

<template>
  <Header></Header>
  <router-view />
  <Footer></Footer>


</template>