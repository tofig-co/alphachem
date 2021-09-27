<template>
  <div>
    <Header :pageTitle="title" />
    <PageHeader
      :pageTitle="'/products'"
      :productName="product['title' + this.lang]"
    />

    <main>
      <section id="mu-about" style="margin: 30px 0">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="row">
                <div class="col-md-6">
                  <div class="mu-about-left">
                    <img
                      :src="'/api/products/image/' + product.imageUrl"
                      alt="img"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mu-about-right">
                    <h2 style="color: #0091ea">
                      {{ product['title' + this.lang] }}
                    </h2>
                    <span>{{ $t(product.category) }}</span>
                    <p style="margin-top: 20px">
                      {{ product['description' + this.lang] }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
  computed: {
    lang() {
      return this.$store.state.i18n.locale.toUpperCase()
    },
  },
  head() {
    return {
      title: 'Alphachem - ' + this.title,
    }
  },
  async asyncData(context) {
    const product = await context.app.$axios.$get(
      `/api/products/${context.params.productId}`
    )

    return { product }
  },
}
</script>
