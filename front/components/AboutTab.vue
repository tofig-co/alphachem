<template>
  <a-card class="about-block" v-if="about">
    <a-form
      :form="form"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
      @submit="handleSubmit"
    >
      <a-form-item label="AZ Title">
        <a-input
          v-decorator="[
            'titleAZ',
            {
              rules: [
                {
                  required: true,
                  message: 'Please input your AZ Title!',
                },
              ],
            },
          ]"
        />
      </a-form-item>
      <a-form-item label="AZ Description">
        <a-input
          type="textarea"
          v-decorator="[
            'descriptionAZ',
            {
              rules: [
                {
                  required: true,
                  message: 'Please input your AZ Description!',
                },
              ],
            },
          ]"
        />
      </a-form-item>

      <hr />
      <a-form-item label="EN Title">
        <a-input
          v-decorator="[
            'titleEN',
            {
              rules: [
                {
                  required: true,
                  message: 'Please input your EN Title!',
                },
              ],
            },
          ]"
        />
      </a-form-item>
      <a-form-item label="EN Description">
        <a-input
          type="textarea"
          v-decorator="[
            'descriptionEN',
            {
              rules: [
                {
                  required: true,
                  message: 'Please input your EN Description!',
                },
              ],
            },
          ]"
        />
      </a-form-item>

      <hr />

      <a-form-item label="RU Title">
        <a-input
          v-decorator="[
            'titleRU',
            {
              rules: [
                {
                  required: true,
                  message: 'Please input your RU Title!',
                },
              ],
            },
          ]"
        />
      </a-form-item>
      <a-form-item label="RU Description">
        <a-input
          type="textarea"
          v-decorator="[
            'descriptionRU',
            {
              rules: [
                {
                  required: true,
                  message: 'Please input your RU Description!',
                },
              ],
            },
          ]"
        />
      </a-form-item>

      <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
        <a-button type="primary" html-type="submit"> Update </a-button>
      </a-form-item>
    </a-form>
  </a-card>
</template>

<script>
export default {
  props: {
    about: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
    }
  },
  mounted() {
    this.form.setFieldsValue({
      titleAZ: this.about.titleAZ,
      titleEN: this.about.titleEN,
      titleRU: this.about.titleRU,
      descriptionAZ: this.about.descriptionAZ,
      descriptionEN: this.about.descriptionEN,
      descriptionRU: this.about.descriptionRU,
    })
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
          this.$store.dispatch('editAbout', {
            about: values,
            id: this.about.id,
          })
        }
      })
    },
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
