<script setup lang="ts">
import CalendarView from '../views/CalendarView.vue'

</script>

<script lang="ts">
export default {
  data() {
    return {
      publicPath: import.meta.env.BASE_URL,
      events: [
        { name: 'ಕಿಶೋರ ಸಂಸ್ಕೃತಮ್', detail: 'ಮಕ್ಕಳಿಗಾಗಿ 30 ದಿನಗಳ ಸಂಸ್ಕ್ರತ ತರಗತಿ ಪ್ರತಿದಿನ ಸಂಜೆ 5-6', title: 'indian_kids.jpg' },
        { name: 'ಸಂಸ್ಕ್ರತ ಭಾಷಾ ಪ್ರವೇಶ:', detail: 'ಹಿರಿಯರಿಗಾಗಿ 30 ದಿನಗಳ ಸಂಸ್ಕ್ರತಭಾಷಾಪರಿಚಯ ತರಗತಿ ನಿತ್ಯ ಸಂಜೆ 6-7', title: 'seniors.jpg' },
        { name: 'ಗೀತಾನು ಸಂಧಾನಮ್', detail: 'ಗೀತಾಕಲಿಕೆಗೆ ತರಗತಿಗಳು ಪ್ರತಿಭಾನುವಾರ ಬೆಳಗ್ಗೆ 8-9', title: 'bhagavadgita01.jpg' },
        { name: 'ಅಮರಕೋಶ', detail: 'ಅಮರಕೋಶದ ಕಲಿಕೆಗೆ ತರಗತಿ ಪ್ರತಿಭಾನುವಾರ ಸಂಜೆ 6-7', title: 'subashita.jpg' },
        { name: 'ಭಗವದ್ಗೀತಾ ಪಾರಾಯಣಮ್', detail: 'ನಿತ್ಯ ಬೆಳಗ್ಗೆ 7-7.30', title: 'bhagavadgita01.jpg' },
        { name: 'ಸುಭಾಷಿತ ಚಿಂತನಮ್', detail: ' ಸುಭಾಷಿತಗಳ  ಅರ್ಥಾವಲೋಕನ ಪ್ರತಿ ಶನಿವಾರ ಸಂಜೆ 6-7', title: 'subashita.jpg' },

      ]
    }
  }
}

</script>

<template>
  <section class="u-align-center u-clearfix u-image u-shading u-section-1" src="" data-image-width="256"
    data-image-height="256" id="sec-53aa">
    <div class="u-clearfix u-sheet u-valign-middle u-sheet-1">
      <h1 class="u-text u-text-default u-title u-text-1">ಮೈತ್ರಿ ಚಟುವಟಿಕೆಗಳು</h1>
      <p class="u-large-text u-text u-text-variant u-text-2">Sample text. Click to select the text box. Click again or
        double click to start editing the text.</p>
    </div>
  </section>
  <section class="u-clearfix u-section-2" id="sec-8dc4">
    <div class="u-clearfix u-sheet u-valign-middle u-sheet-1">
      <div class="u-expanded-width u-list u-list-1">
        <div class="u-repeater u-repeater-1">
          <div v-for="event in events" class="u-container-style u-list-item u-repeater-item u-list-item-1">
            <div class="u-container-layout u-similar-container u-valign-top u-container-layout-1">
              <img class="u-image u-image-1" :src="`${publicPath}./events/${event.title}`" data-image-width="612"
                data-image-height="408">
              <h3 class="u-align-center u-text u-text-default u-text-1"> {{ event.name }}
              </h3>
              <p class="u-align-center u-text u-text-default u-text-2">{{ event.detail }}</p>
            </div>
          </div>
        </div>



      </div>
    </div>
  </section>

  <CalendarView />
</template>

<style scoped>
.u-section-1 {
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJkZWZhdWx0LWltYWdlLXNvbGlkIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDAwIDI2NSIgc3R5bGU9IndpZHRoOiA0MDBweDsgaGVpZ2h0OiAyNjVweDsiPg0KPHJlY3QgZmlsbD0iI0M2RDhFMSIgd2lkdGg9IjQwMCIgaGVpZ2h0PSIyNjUiLz4NCjxwYXRoIGZpbGw9IiNEOUUzRTgiIGQ9Ik0zOTUuMyw5Ni4yYy01LTAuOC02LjEsMS4xLTguNSwyLjljLTEtMi4zLTIuNi02LjItNy43LTVjMS41LTUuMy0yLjYtOC40LTcuNy04LjRjLTAuNiwwLTEuMiwwLjEtMS44LDAuMg0KCWMtMS44LTQuMS02LTYuOS0xMC43LTYuOWMtNi41LDAtMTEuOCw1LjMtMTEuOCwxMS44YzAsMC40LDAsMC45LDAuMSwxLjNjLTEuMi0wLjgtMi41LTEuMy0zLjktMS4zYy00LjMsMC03LjksNC4yLTcuOSw5LjQNCgljMCwxLjIsMC4yLDIuNCwwLjYsMy41Yy0wLjUtMC4xLTEtMC4xLTEuNi0wLjFjLTYuOSwwLTEyLjUsNS41LTEyLjcsMTIuNGMtMC45LTAuMi0xLjktMC40LTIuOS0wLjRjLTYuNCwwLTExLjcsNS4yLTEyLjUsMTEuOA0KCWMtMS4yLTAuNC0yLjUtMC42LTMuOS0wLjZjLTUuOSwwLTEwLjgsMy44LTEyLjEsOC45Yy0yLjQtMi01LjUtMy4yLTguOS0zLjJjLTYsMC0xMS4xLDMuNy0xMi44LDguOGMtMS41LTEuNC0zLjgtMi4zLTYuMy0yLjMNCgljLTIuMSwwLTQuMSwwLjYtNS41LDEuN2gtMC4xYy0xLjMtNS41LTYuMi05LjUtMTIuMS05LjVjLTIuNCwwLTQuNywwLjctNi42LDEuOWMtMS40LTAuNy0zLTEuMi00LjgtMS4yYy0wLjMsMC0wLjUsMC0wLjgsMA0KCWMtMS41LTQuMS01LjItNy05LjUtN2MtMy4xLDAtNS45LDEuNS03LjgsMy45Yy0yLjItNC44LTYuOC04LjItMTIuMi04LjJjLTUuNiwwLTEwLjUsMy43LTEyLjUsOC44Yy0yLjEtMC45LTQuNC0xLjUtNi45LTEuNQ0KCWMtNi44LDAtMTIuNSwzLjktMTQuNSw5LjNjLTAuMiwwLTAuNSwwLTAuNywwYy01LjIsMC05LjYsMy4yLTExLjQsNy44Yy0yLjctMi44LTctNC41LTExLjgtNC41Yy0zLjMsMC02LjQsMC45LTguOSwyLjMNCgljLTIuMS02LjUtOC0xMi4yLTE4LjEtOS45Yy0yLjctMi4zLTYuMy0zLjctMTAuMS0zLjdjLTIuNSwwLTQuOCwwLjYtNi45LDEuNmMtMi4yLTUuOS03LjktMTAuMS0xNC42LTEwLjFjLTguNiwwLTE1LjYsNy0xNS42LDE1LjYNCgljMCwwLjksMC4xLDEuNywwLjIsMi41Yy0yLjYtNS03LjgtOC40LTEzLjgtOC40Yy04LjMsMC0xNS4xLDYuNS0xNS42LDE0LjZjLTIuOS0zLjItNy01LjMtMTEuNy01LjNjLTcuNCwwLTEzLjUsNS4xLTE1LjIsMTINCgljLTIuOS0zLjUtOS44LTYtMTQuNy02djExOS4yaDQwMFYxMDJDNDAwLDEwMiw0MDAsOTcsMzk1LjMsOTYuMnoiLz4NCjxwYXRoIGZpbGw9IiM4RUE4QkIiIGQ9Ik00MDAsMjA2LjJjMCwwLTI1LjMtMTkuMi0zMy42LTI1LjdjLTEzLjQtMTAuNi0yMy4xLTEyLjktMzEuNy03cy0yMy45LDE5LjctMjMuOSwxOS43cy01OC45LTYzLjktNjEuNS02Ni40DQoJYy0xLjUtMS40LTMuNi0xLjctNS41LTAuOWMtNS4yLDIuNC0xNy42LDkuNy0yNC41LDEyLjdjLTYuOSwyLjktNDEtNTAuNy00OS42LTUzcy04NC4zLDgzLjMtMTAxLjQsNzUuMXMtMjYuOS0yLjMtMzUuNCwzLjUNCgljLTguNiw1LjktMTEsNS45LTE1LjksOC4ycy0xNy4xLTUuOS0xNy4xLTUuOVYyNjVjMCwwLDQwMCwwLjIsNDAwLDB2LTU4LjhINDAweiIvPg0KPHBhdGggZmlsbD0iIzdFOTZBNiIgZD0iTTMzMy40LDE3OWMtMTMuMS05LjMtNDAsNC42LTU1LjEsMTAuN2MtMjMuNiw5LjYtOTQtNTQuNC0xMDcuMi01OS43YzAsMC00LjIsMy43LTkuNiw3LjYNCgljLTMuNS0wLjQtOC40LTUuNy05LjktNC43Yy00LjYsMy4xLTE3LjgsMTUuNC0yOC4zLDI2LjZjLTEwLjUsMTEuMy0xMS43LDAtMTUuOC0wLjZjLTIuNS0wLjQtNTQuMSw0Mi41LTU4LjcsNDMuMQ0KCUMyMi4zLDIwNS4zLDAsMTk3LjUsMCwxOTcuNVYyNjVsNDAwLTAuMXYtNTMuM0M0MDAsMjExLjYsMzQ0LjgsMTg3LjEsMzMzLjQsMTc5eiIvPg0KPHBhdGggZmlsbD0iIzc4OEY5RSIgZD0iTTAsMjY0Ljl2LTU4LjZjMCwwLDguMiwxLjgsMTEuMyw1LjNjMy4xLDMuNiwyNi4xLTQuMiwyNi4xLDQuN3MwLjUsNC4yLDAuNSwxNC44YzAsMTAuNywyMy00LjIsMzguMS0xOC40DQoJczM0LjktNDkuMiwzNi0zNWMxLDE0LjItMTUuMSwzOS4yLTI0LDU2LjRDNzkuMSwyNTEuNCw1MS43LDI2NSw1MS43LDI2NUwwLDI2NC45eiIvPg0KPHBhdGggZmlsbD0iIzc4OEY5RSIgZD0iTTEwMCwyNjVjMCwwLDY2LjctMTI1LjEsNjguMy0xMTYuOHMtNi44LDI5LjcsMi4xLDI2LjFjOC45LTMuNiwxNC42LTE2LDE4LjgtOS41czE2LjIsMzguNiwyMS45LDMzLjgNCgljNS43LTQuNywyMS40LTEzLjEsMjIuNC02LjVjMSw2LjUtMSw1LjMtNS43LDIwLjJDMjIzLjEsMjI3LjEsMjAwLDI2NSwyMDAsMjY1aC0xMGMwLDAsNi0yNC44LDguNi0zNC45YzIuNi0xMC4xLTMuNy0xOS0xMi04LjMNCglzLTIzLDIyLTI0LDE3LjhzLTUuNy0zMC4zLTE4LjgtMTQuMmMtMTMsMTYtMzMuOCwzOS43LTMzLjgsMzkuN2gtMTBWMjY1eiIvPg0KPHBhdGggZmlsbD0iIzc4OEY5RSIgZD0iTTI0NSwyNjVjMCwwLDE5LjgtNTQuNywzMy40LTY0LjJzNTMuNy0yNy45LDQ2LjktMTMuNmMtNi44LDE0LjItMTEsMzQuNC0yMC4zLDQ5LjgNCgljLTkuNCwxNS40LTE4LjgsMjYuMS0xNC4xLDEzLjZjNC43LTEyLjUsNi40LTIzLjMsMy43LTIzLjFDMjcxLjMsMjI5LjEsMjYwLDI2NSwyNjAsMjY1SDI0NXoiLz4NCjwvc3ZnPg0K");
  background-position: 50% 50%;
}

.u-section-1 .u-sheet-1 {
  min-height: 267px;
}

.u-section-1 .u-text-1 {
  margin: 53px auto 0;
}

.u-section-1 .u-text-2 {
  width: 826px;
  margin: 18px auto 53px;
}

@media (max-width: 1199px) {
  .u-section-1 .u-sheet-1 {
    min-height: 220px;
  }
}

@media (max-width: 991px) {
  .u-section-1 .u-sheet-1 {
    min-height: 169px;
  }

  .u-section-1 .u-text-2 {
    width: 720px;
  }
}

@media (max-width: 767px) {
  .u-section-1 .u-sheet-1 {
    min-height: 127px;
  }

  .u-section-1 .u-text-2 {
    width: 540px;
  }
}

@media (max-width: 575px) {
  .u-section-1 .u-sheet-1 {
    min-height: 80px;
  }

  .u-section-1 .u-text-2 {
    width: 340px;
  }
}

.u-section-2 .u-sheet-1 {
  min-height: 581px;
}

.u-section-2 .u-list-1 {
  margin-top: 60px;
  margin-bottom: 60px;
  grid-template-rows: auto;
}

.u-section-2 .u-repeater-1 {
  grid-template-columns: calc(33.3333% - 6.66667px) calc(33.3333% - 6.66667px) calc(33.3333% - 6.66667px);
  grid-gap: 10px 10px;
  min-height: 411px;
}

.u-section-2 .u-list-item-1 {
  background-position: 50% 50%;
}

.u-section-2 .u-container-layout-1 {
  padding: 30px;
}

.u-section-2 .u-image-1 {
  filter: brightness(0.75);
  width: 187px;
  height: 250px;
  margin: 0 auto;
}

.u-section-2 .u-text-1 {
  font-weight: 700;
  margin: 21px auto 0;
}

.u-section-2 .u-text-2 {
  margin: 20px 0 0;
}

.u-section-2 .u-list-item-2 {
  background-position: 50% 50%;
}

.u-section-2 .u-container-layout-2 {
  padding: 30px;
}

.u-section-2 .u-image-2 {
  filter: brightness(0.75);
  width: 187px;
  height: 250px;
  margin: 0 auto;
}

.u-section-2 .u-text-3 {
  font-weight: 700;
  margin: 21px auto 0;
}

.u-section-2 .u-text-4 {
  margin: 20px 0 0;
}

.u-section-2 .u-list-item-3 {
  background-position: 50% 50%;
}

.u-section-2 .u-container-layout-3 {
  padding: 30px;
}

.u-section-2 .u-image-3 {
  filter: brightness(0.75);
  width: 187px;
  height: 250px;
  margin: 0 auto;
}

.u-section-2 .u-text-5 {
  font-weight: 700;
  margin: 21px auto 0;
}

.u-section-2 .u-text-6 {
  margin: 20px 0 0;
}

@media (max-width: 1199px) {
  .u-section-2 .u-sheet-1 {
    min-height: 515px;
  }

  .u-section-2 .u-repeater-1 {
    min-height: 338px;
  }

  .u-section-2 .u-image-1 {
    margin-top: 126px;
  }

  .u-section-2 .u-text-1 {
    margin-top: -105px;
  }

  .u-section-2 .u-image-2 {
    margin-top: 126px;
  }

  .u-section-2 .u-text-3 {
    margin-top: -105px;
  }

  .u-section-2 .u-image-3 {
    margin-top: 126px;
  }

  .u-section-2 .u-text-5 {
    margin-top: -105px;
  }
}

@media (max-width: 991px) {
  .u-section-2 .u-sheet-1 {
    min-height: 916px;
  }

  .u-section-2 .u-repeater-1 {
    grid-template-columns: calc(50% - 5px) calc(50% - 5px);
    min-height: 793px;
  }

  .u-section-2 .u-image-2 {
    margin-top: 90px;
  }

  .u-section-2 .u-text-3 {
    margin-top: -69px;
  }

  .u-section-2 .u-image-3 {
    margin-top: 90px;
  }

  .u-section-2 .u-text-5 {
    margin-top: -69px;
  }
}

@media (max-width: 767px) {
  .u-section-2 .u-repeater-1 {
    grid-template-columns: 100%;
  }

  .u-section-2 .u-image-1 {
    margin-top: 100px;
  }

  .u-section-2 .u-text-1 {
    margin-top: -80px;
  }

  .u-section-2 .u-image-2 {
    margin-top: 64px;
  }

  .u-section-2 .u-text-3 {
    margin-top: -44px;
  }

  .u-section-2 .u-image-3 {
    margin-top: 64px;
  }

  .u-section-2 .u-text-5 {
    margin-top: -44px;
  }
}

@media (max-width: 575px) {
  .u-section-2 .u-image-1 {
    margin-top: 111px;
  }

  .u-section-2 .u-text-1 {
    margin-top: -91px;
  }

  .u-section-2 .u-image-2 {
    margin-top: 83px;
  }

  .u-section-2 .u-text-3 {
    margin-top: -62px;
  }

  .u-section-2 .u-image-3 {
    margin-top: 83px;
  }

  .u-section-2 .u-text-5 {
    margin-top: -62px;
  }
}
</style>