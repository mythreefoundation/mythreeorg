<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {}
    }
})
</script>

<template>
    <div class="container">
        <iframe class="responsive-iframe"
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FKolkata&title=Calendar%20of%20events&showTz=1&showTabs=0&showPrint=0&showCalendars=0&showNav=1&src=a2FydGhpa2FkaXR5YTE0N0BnbWFpbC5jb20&color=%234285F4"
            style="padding: 20px;" width="800" height="600" frameborder="0" scrolling="no"></iframe>
    </div>
</template>

<style>
.container {
    position: relative;
    overflow: hidden;
    width: 100%;
    padding-top: 100%;
}

.responsive-iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
}
</style>