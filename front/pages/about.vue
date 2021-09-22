<template>
  <div>
    <Header :pageTitle="title" />
    <PageHeader :pageTitle="title" />

    <main>
      <About />
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
  head() {
    return {
      title: 'Alphachem - ' + this.title,
    }
  },
}
</script>
