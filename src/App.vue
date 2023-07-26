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

  <section class="u-backlink u-clearfix u-grey-80">
    <!-- <a class="u-link" href="https://nicepage.com/html-templates" target="_blank">
        <span>HTML Template</span>
      </a>
      <p class="u-text">
        <span>created with</span>
      </p>
      <a class="u-link" href="https://nicepage.studio" target="_blank">
        <span>Website Builder</span>
      </a>. -->
  </section>
</template>