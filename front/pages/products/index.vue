<template>
  <div>
    <Header :pageTitle="title" />
    <PageHeader :pageTitle="'/products'" />

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
  watchQuery: true,
  async asyncData(context) {
    const category = context.route.query.category
    const queryparams = category ? `?category=${category}` : ''
    const productsData = await context.app.$axios.$get(
      `/api/products${queryparams}`
    )

    return { productsData }
  },
}
</script>
