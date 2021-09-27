<template>
  <div>
    <h1>
      Products
      <a-button type="primary" class="add-btn" @click="() => showModal('add')">
        Add
      </a-button>
    </h1>

    <a-table :columns="columns" :data-source="products" rowKey="id">
      <span slot="imageUrl" slot-scope="imageUrl">
        <img :src="'/api/products/image/' + imageUrl"
      /></span>
      <span slot="actions" slot-scope="text, id">
        <a-icon
          class="action-btn"
          :type="'edit'"
          @click="() => showModal('edit', id.id)"
        />
        <a-popconfirm
          style="cursor: pointer"
          v-if="products.length"
          title="Sure to delete?"
          @confirm="() => deleteProductConfirm(id.id)"
        >
          <a-icon class="action-btn" :type="'delete'" />
        </a-popconfirm>
      </span>
    </a-table>

    <a-modal
      title="Add product"
      :visible="visible"
      :confirm-loading="confirmLoading"
      width="750px"
      @ok="handleSubmit"
      @cancel="handleCancel"
    >
      <a-form :form="form" @submit="handleSubmit">
        <a-form-item label="Categories">
          <a-select
            mode="multiple"
            style="width: 100%"
            placeholder="Please select"
            v-decorator="[
              'category',
              {
                rules: [
                  {
                    required: true,
                    message: `Please select Category!`,
                  },
                ],
              },
            ]"
          >
            <a-select-option v-for="cat in categories" :key="cat">
              {{ cat }}
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item
          v-for="item in addFields"
          :key="item.key"
          :label="item.placeholder"
        >
          <a-input
            v-decorator="[
              item.key,
              {
                rules: [
                  {
                    required: true,
                    message: `Please input ${item.placeholder}!`,
                  },
                ],
              },
            ]"
          >
          </a-input>
        </a-form-item>
        <a-form-item
          :validate-status="fieldError('photo') ? 'error' : ''"
          :help="fieldError('photo') || ''"
        >
          <a-input
            v-if="actionType === 'add'"
            type="file"
            class="file"
            v-decorator="[
              'photo',
              {
                rules: [
                  {
                    required: true,
                    message: `Please upload a photo!`,
                  },
                ],
              },
            ]"
            placeholder="Photo"
          >
          </a-input>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>
<script>
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some((field) => fieldsError[field])
}
const columns = [
  {
    title: 'Image',
    dataIndex: 'imageUrl',
    key: 'imageUrl',
    scopedSlots: { customRender: 'imageUrl' },
  },
  {
    title: 'Categories',
    dataIndex: 'category',
    key: 'category',
    ellipsis: true,
  },
  {
    title: 'Title AZ',
    dataIndex: 'titleAZ',
    key: 'titleAZ',
    ellipsis: true,
  },
  {
    title: 'Title EN',
    dataIndex: 'titleEN',
    key: 'titleEN',
    ellipsis: true,
  },
  {
    title: 'Title RU',
    dataIndex: 'titleRU',
    key: 'titleRU',
    ellipsis: true,
  },
  {
    title: 'Description AZ',
    dataIndex: 'descriptionAZ',
    key: 'descriptionAZ',
    ellipsis: true,
  },
  {
    title: 'Description EN',
    dataIndex: 'descriptionEN',
    key: 'descriptionEN',
    ellipsis: true,
  },
  {
    title: 'Description RU',
    dataIndex: 'descriptionRU',
    key: 'descriptionRU',
    ellipsis: true,
  },
  {
    title: 'Action',
    key: 'action',
    scopedSlots: { customRender: 'actions' },
  },
]

export default {
  layout: 'admin',
  data() {
    return {
      columns,
      visible: false,
      confirmLoading: false,
      hasErrors,
      form: this.$form.createForm(this, { name: 'add_product' }),
      addFields: [
        {
          key: 'titleAZ',
          placeholder: 'Title AZ',
        },
        {
          key: 'titleEN',
          placeholder: 'Title EN',
        },
        {
          key: 'titleRU',
          placeholder: 'Title RU',
        },
        {
          key: 'descriptionAZ',
          placeholder: 'Description AZ',
        },
        {
          key: 'descriptionEN',
          placeholder: 'Description EN',
        },
        {
          key: 'descriptionRU',
          placeholder: 'Description RU',
        },
      ],
      actionType: 'add',
      itemId: 0,
    }
  },
  computed: {
    products() {
      return this.$store.state.products
    },
    categories() {
      return this.$store.state.categories
    },
  },
  mounted() {
    this.$store.dispatch('getProducts')
    this.$store.dispatch('getProductCategories')
    this.$nextTick(() => {
      this.form.validateFields()
    })
  },
  methods: {
    showModal(type = 'add', id = 0) {
      this.visible = true
      this.actionType = type
      this.itemId = id
      if (id) {
        this.$axios
          .$get('/api/products/' + id)
          .then((res) => {
            this.form.setFieldsValue({
              titleAZ: res.titleAZ,
              titleEN: res.titleEN,
              titleRU: res.titleRU,
              descriptionAZ: res.descriptionAZ,
              descriptionEN: res.descriptionEN,
              descriptionRU: res.descriptionRU,
              category: res.category.split(','),
            })
          })
          .catch((e) => console.log(e))
      }
    },
    deleteProductConfirm(id) {
      this.$store.dispatch('deleteProduct', id)
    },
    handleCancel(e) {
      this.visible = false
      this.confirmLoading = false
      this.actionType = 'add'
      this.itemId = 0
      this.form.resetFields()
    },
    fieldError(key) {
      const { getFieldError, isFieldTouched } = this.form
      return isFieldTouched(key) && getFieldError(key)
    },
    handleSubmit(e) {
      e.preventDefault()
      let file
      if (this.actionType === 'add') {
        file = document.querySelector('.file').files[0]
      }

      this.confirmLoading = true

      this.form.validateFields((err, values) => {
        if (!err) {
          const formData = new FormData()

          for (const [key, value] of Object.entries(values)) {
            if (key !== 'photo') {
              formData.append(key, value)
            }
          }
          formData.append('photo', file)

          const type = this.actionType === 'add' ? 'addProduct' : 'editProduct'
          const payload = this.actionType === 'add' ? formData : values
          this.$store
            .dispatch(type, { product: payload, id: this.itemId })
            .then((v) => {
              this.handleCancel(null)
            })
            .catch((err) => console.log(err))
        }
      })
    },
  },
}
</script>
<style scoped>
img {
  max-width: 150px;
}
.add-btn {
  float: right;
  margin-bottom: 10px;
}
.action-btn {
  margin-right: 5px;
}
</style>
