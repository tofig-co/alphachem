<template>
  <section id="mu-about">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="mu-about-area">
            <div class="row">
              <div class="col-md-12">
                <div class="mu-title">
                  <h2>{{ $t('about_title') }}</h2>
                  <p>{{ $t('about_description') }}</p>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="mu-about-left">
                  <img class="" src="/images/about.jpg" alt="img" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="mu-about-right">
                  <ul>
                    <li v-for="about in aboutData">
                      <h3>{{ about['title' + lang] }}</h3>
                      <p>{{ about['description' + lang] }}</p>
                    </li>
                  </ul>
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
  computed: {
    lang() {
      return this.$store.state.i18n.locale.toUpperCase()
    },
  },
  props: {
    aboutData: {
      type: Array,
      required: true,
    },
  },
}
</script>
<style scoped>
li {
  float: none !important;
}
</style>
