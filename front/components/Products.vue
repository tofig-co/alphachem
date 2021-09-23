<template>
  <section id="mu-portfolio">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="mu-portfolio-area">
            <div class="row">
              <div class="col-md-12">
                <div class="mu-title">
                  <h2>t('products_title')}</h2>
                  <p>t('products_description')}</p>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="mu-portfolio-content">
                <div class="filtr-container">
                  <div
                    class="col-xs-6 col-sm-6 col-md-4 filtr-item"
                    v-for="product in productsData"
                  >
                    <a
                      class="mu-imglink"
                      :href="'/api/products/image/' + product.imageUrl"
                      :title="product.titleAZ"
                    >
                      <img
                        class="img-responsive"
                        :src="'/api/products/image/' + product.imageUrl"
                        alt="image"
                      />
                      <div class="mu-filter-item-content">
                        <h4 class="mu-filter-item-title">
                          {{ product.titleAZ }}
                        </h4>
                        <span class="fa fa-long-arrow-right"></span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  mounted() {
    $('.mu-imglink').magnificPopup({
      type: 'image',
      mainClass: 'mfp-fade',
      gallery: {
        enabled: true,
      },
    })
  },
  props: {
    productsData: {
      type: Array,
      required: true,
    },
  },
}
</script>
