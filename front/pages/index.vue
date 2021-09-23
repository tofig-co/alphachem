<template>
  <div>
    <Header :pageTitle="'test'" />
    <Slider :sliderData="sliderData" />
    <main>
      <About :aboutData="aboutData" />
      <Products :productsData="productsData" />
    </main>
  </div>
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
  async asyncData(context) {
    const aboutData = await context.app.$axios.$get(`/api/about/`)
    const productsData = await context.app.$axios.$get(`/api/products/`)
    const sliderData = await context.app.$axios.$get(`/api/slider/`)
    return { aboutData, productsData, sliderData }
  },
}
</script>
