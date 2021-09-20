<template>
  <div v-if="about.length">
    <a-tabs default-active-key="1">
      <a-tab-pane key="1" tab="About 1">
        <AboutTab :about="about[0]" />
      </a-tab-pane>
      <a-tab-pane key="2" tab="About 2">
        <AboutTab :about="about[1]" />
      </a-tab-pane>
      <a-tab-pane key="3" tab="About 3">
        <AboutTab :about="about[2]" />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import AboutTab from '@/components/AboutTab.vue'
export default {
  components: { AboutTab },
  layout: 'admin',
  computed: {
    about() {
      return this.$store.state.about
    },
  },
  mounted() {
    this.$store.dispatch('getAbout')
  },
}
</script>
<style scoped>
.about-block {
  width: 100%;
  margin-bottom: 20px;
}
hr {
  margin-bottom: 20px;
  border-color: #e8e8e8;
}
</style>
