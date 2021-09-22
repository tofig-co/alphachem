<template>
  <div id="mu-slider">
    <div class="mu-slide">
      <div class="mu-single-slide" v-for="sliderItem in sliderData">
        <img
          :src="'/api/slider/image/' + sliderItem.imageUrl"
          alt="slider img"
        />
        <div class="mu-single-slide-content-area">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="mu-single-slide-content">
                  <h1>{{ sliderItem.titleAZ }}</h1>
                  <p>{{ sliderItem.descriptionAZ }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    sliderData() {
      return this.$store.state.slider
    },
  },
  mounted() {
    $('.mu-slide').slick({
      arrows: true,
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      cssEase: 'linear',
    })
  },
}
</script>
