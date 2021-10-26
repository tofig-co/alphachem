import { notification } from 'ant-design-vue'

export default function ({ $axios, redirect }) {
  if (process.client) {
    $axios.onError((error) => {
      notification.error({
        message: 'Error',
        description: error.response.data.message,
      })
      if (error.response.status === 401) {
        localStorage.removeItem('token')
        redirect('/login')
      }
    })
  }
}
