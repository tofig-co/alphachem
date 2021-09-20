<template>
  <a-card>
    <h1>Contacts</h1>
    <a-form
      :form="form"
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
      @submit="handleSubmit"
    >
      <a-form-item label="AZ Adress">
        <a-input
          v-decorator="[
            'adressAZ',
            {
              rules: [
                {
                  required: true,
                  message: 'Please input your AZ Adress!',
                },
              ],
            },
          ]"
        />
      </a-form-item>
      <a-form-item label="EN Adress">
        <a-input
          v-decorator="[
            'adressEN',
            {
              rules: [
                {
                  required: true,
                  message: 'Please input your EN Adress!',
                },
              ],
            },
          ]"
        />
      </a-form-item>
      <a-form-item label="RU Adress">
        <a-input
          v-decorator="[
            'adressRU',
            {
              rules: [
                {
                  required: true,
                  message: 'Please input your RU Adress!',
                },
              ],
            },
          ]"
        />
      </a-form-item>

      <hr />

      <a-form-item label="Latitude">
        <a-input
          v-decorator="[
            'locationLat',
            {
              rules: [
                {
                  required: true,
                  message: 'Please input your Latitude!',
                },
              ],
            },
          ]"
        />
      </a-form-item>
      <a-form-item label="Longitude">
        <a-input
          v-decorator="[
            'locationLong',
            {
              rules: [
                {
                  required: true,
                  message: 'Please input your Longitude!',
                },
              ],
            },
          ]"
        />
      </a-form-item>

      <hr />

      <a-form-item label="Phone">
        <a-input
          v-decorator="[
            'phone1',
            {
              rules: [
                {
                  required: true,
                  message: 'Please input your Phone!',
                },
              ],
            },
          ]"
        />
      </a-form-item>

      <a-form-item label="Phone 2">
        <a-input
          v-decorator="[
            'phone2',
            {
              rules: [
                {
                  required: true,
                  message: 'Please input your Phone 2!',
                },
              ],
            },
          ]"
        />
      </a-form-item>

      <hr />

      <a-form-item label="Email">
        <a-input
          v-decorator="[
            'email1',
            {
              rules: [
                {
                  required: true,
                  message: 'Please input your Email!',
                },
              ],
            },
          ]"
        />
      </a-form-item>

      <a-form-item label="Email 2">
        <a-input
          v-decorator="[
            'email2',
            {
              rules: [
                {
                  required: true,
                  message: 'Please input your Email 2!',
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
  layout: 'admin',
  computed: {
    contacts() {
      return this.$store.state.contacts
    },
  },
  mounted() {
    this.$store.dispatch('getContacts').then((v) => {
      const phones = this.contacts.phones.split(',')
      const emails = this.contacts.emails.split(',')
      this.form.setFieldsValue({
        adressAZ: this.contacts.adressAZ,
        adressEN: this.contacts.adressEN,
        adressRU: this.contacts.adressRU,
        locationLat: this.contacts.locationLat,
        locationLong: this.contacts.locationLong,
        phone1: phones[0],
        phone2: phones[1],
        email1: emails[0],
        email2: emails[1],
      })
    })
  },
  data() {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          const { adressAZ, adressEN, adressRU, locationLat, locationLong } =
            values
          const data = {
            adressAZ,
            adressEN,
            adressRU,
            locationLat,
            locationLong,
            phones: values.phone1 + ',' + values.phone1,
            emails: values.email1 + ',' + values.email1,
          }

          this.$store.dispatch('editContacts', data)
        }
      })
    },
  },
}
</script>
<style scoped>
hr {
  margin-bottom: 20px;
  border-color: #e8e8e8;
}
</style>
