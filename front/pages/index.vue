<template>
  <div><Header :pageTitle="'test'" /><Slider :sliderData="sliderData" /></div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Home',
    }
  },
  head() {
    return {
      title: 'Alphachem - ' + this.title,
    }
  },
  async asyncData({ app: { $axios } }) {
    const sliderData = await $axios.$get('/api/slider')
    return sliderData
  },
}
</script>
