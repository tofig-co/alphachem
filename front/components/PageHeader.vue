<template>
  <div id="mu-page-header">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="mu-page-header-area">
            <h1 class="mu-page-header-title">
              {{ $t('nav.' + pageTitle)
              }}<span v-if="productName"> - {{ productName }}</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    pageTitle: {
      type: String,
      required: true,
    },
    productName: {
      type: String,
      required: false,
    },
  },
}
</script>
