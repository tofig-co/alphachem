<template>
  <div>
    <Header :pageTitle="title" />
    <PageHeader :pageTitle="title" />

    <main>
      <Products />
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
}
</script>
