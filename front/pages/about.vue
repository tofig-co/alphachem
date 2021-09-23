<template>
  <div>
    <Header :pageTitle="title" />
    <PageHeader :pageTitle="'/about'" />

    <main>
      <About :aboutData="aboutData" />
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'About',
    }
  },
  async asyncData(context) {
    const aboutData = await context.app.$axios.$get(`/api/about/`)
    return { aboutData }
  },
  head() {
    return {
      title: 'Alphachem - ' + this.title,
    }
  },
}
</script>
