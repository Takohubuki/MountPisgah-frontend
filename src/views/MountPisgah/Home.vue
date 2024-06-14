<template>
 <div class="banner">
    <p>直到我在毗斯迦山，发现我家极目一看，脱下帐篷，安静等候，信心变见，盼望成就</p>
 </div>
 <div class="section" id="section1">
    <div class="container section-content">
      <!-- <v-carousel hide-delimiters>
        <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover></v-carousel-item>

        <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg" cover></v-carousel-item>

        <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover></v-carousel-item>
      </v-carousel> -->
      <video-player
        class="video-player vjs-custom-skin"
        ref="videoPlayer"
        :playsinline="true"
        :options="playerOptions"/>
    </div>
  </div>

  <div class="section" id="section2">
    <div class="container section-content">
      <div class="text-h3">回顾</div>
      <div class="text-body-1" id="backward-content">
        回顾过去，我们不禁感慨万千。在过去的一年中，我们经历了许多挑战和成就。我们团结一心，克服了种种困难，取得了令人瞩目的进展。无论是在技术研发上的突破，还是在团队合作上的默契配合，
        都展现出了我们的实力和创造力。
      </div>
    </div>
  </div>

  <div class="section" id="section3">
    <div class="container section-content">
      <div class="text-h3">展望</div>
      <div class="text-body-1" id="forward-content">
        回顾过去，我们不禁感慨万千。在过去的一年中，我们经历了许多挑战和成就。我们团结一心，克服了种种困难，取得了令人瞩目的进展。无论是在技术研发上的突破，还是在团队合作上的默契配合，
        都展现出了我们的实力和创造力。
      </div>
    </div>
  </div>

  <div class="section" id="section4">
    <div class="container section-content">
      <div class="text-h3">最后的寄语</div>
      <div class="text-body-1" id="wishes">
        回顾过去，我们不禁感慨万千。在过去的一年中，我们经历了许多挑战和成就。我们团结一心，克服了种种困难，取得了令人瞩目的进展。无论是在技术研发上的突破，还是在团队合作上的默契配合，
        都展现出了我们的实力和创造力。
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      playerOptions: {
        preload: 'auto',
        autoplay: true,
        loop: true,
        controls: true,
        sources: [{
          src: 'http://localhost:8000/xiashafellowship.mp4',
          // 使用OSS的情况需要公开权限
          // src: 'https://sgp1.vultrobjects.com/videos/xiashafellowship.mp4',
          type: 'video/mp4'
        }]
      }
    }
  }
}
</script>

<style scoped>
.home {
  padding: 20px;
}

.banner {
  text-align: center;
  background-color: rgb(187, 171, 148);
  color: black;
  height: 9vh;
  padding-top: 3vh;
  margin-top: 64px;
}

/* #section1 {
  display: flex;
  justify-content: center;
} */
 .video-player {
  width: 800px;
  margin: 0 auto;
  margin-top: 50px;
  max-height: 450px;
 }

#section2 {
  color: black;
  /* background-image: url('../assets/img/image2.jpg'); */
  padding-left: 10vw;
  padding-top: 5vw;
  padding-bottom: 5vw;
}

#section3 {
  background-image: url('../../assets/img/image1.jpg');
  padding-left: calc(40%);
  padding-top: 5vw;
  padding-bottom: 5vw;
  padding-right: 10vw;
}

#section4 {
  color: black;
  background-color: white;
  padding-left: 10vw;
  padding-top: 5vw;
  padding-bottom: 5vw;
}

#backward-content {
  margin-top: 20px;
  width: 60%;
}

#forward-content {
  margin-top: 20px;
  /* width: 60%; */
}

#wishes {
  margin-top: 20px;
  padding-right: 10vw;
}

.section {
  color: white;
  width: 100%;
  position: relative;
  height: fit-content;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
}

</style>
