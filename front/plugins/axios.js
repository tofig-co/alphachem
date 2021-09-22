import { notification } from 'ant-design-vue'

export default function ({ $axios, store }) {
  if (process.client) {
    $axios.onError((error) => {
      notification.error({
        message: 'Error',
        description: error.response.data.message,
      })
    })
  }
}
