<template>
  <div>
    <h1>Slider</h1>
    <a-table :columns="columns" :data-source="slides" rowKey="id">
      <span slot="imageUrl" slot-scope="imageUrl">
        <img :src="'/api/slider/image/' + imageUrl"
      /></span>
    </a-table>
  </div>
</template>
<script>
const columns = [
  {
    title: 'Image',
    dataIndex: 'imageUrl',
    key: 'imageUrl',
    scopedSlots: { customRender: 'imageUrl' },
  },
  {
    title: 'Title AZ',
    dataIndex: 'titleAZ',
    key: 'titleAZ',
  },
  {
    title: 'Title EN',
    dataIndex: 'titleEN',
    key: 'titleEN',
  },
  {
    title: 'Title RU',
    dataIndex: 'titleRU',
    key: 'titleRU',
  },
  {
    title: 'Description AZ',
    dataIndex: 'descriptionAZ',
    key: 'descriptionAZ',
  },
  {
    title: 'Description EN',
    dataIndex: 'descriptionEN',
    key: 'descriptionEN',
  },
  {
    title: 'Description RU',
    dataIndex: 'descriptionRU',
    key: 'descriptionRU',
  },
]

export default {
  layout: 'admin',
  computed: {
    slider() {
      return this.$store.state.slider
    },
  },
  data() {
    return {
      columns,
    }
  },
  computed: {
    slides() {
      return this.$store.state.slider
    },
  },
  mounted() {
    this.$store.dispatch('getSlider')
  },
}
</script>
<style scoped>
img {
  max-width: 150px;
}
</style>
