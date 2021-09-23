<template>
  <div>
    <Header :pageTitle="title" />
    <PageHeader :pageTitle="title" />

    <main>
      <Products :productsData="productsData" />
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Products',
    }
  },
  head() {
    return {
      title: 'Alphachem - ' + this.title,
    }
  },
  async asyncData(context) {
    const productsData = await context.app.$axios.$get(`/api/products/`)

    return { productsData }
  },
}
</script>
