import { notification } from 'ant-design-vue'

export default function ({ $axios, store }) {
  $axios.onError((error) => {
    notification.error({
      message: 'Error',
      description: error.response.data.message,
    })
  })
}
