<template>
  <div class="auth-holder">
    <div class="auth">
      <a-form :form="form" @submit="handleSubmit">
        <a-form-item
          :validate-status="userNameError() ? 'error' : ''"
          :help="userNameError() || ''"
        >
          <a-input
            v-decorator="[
              'username',
              {
                rules: [
                  { required: true, message: 'Please input your username!' },
                ],
              },
            ]"
            placeholder="Username"
          >
            <a-icon
              slot="prefix"
              type="user"
              style="color: rgba(0, 0, 0, 0.25)"
            />
          </a-input>
        </a-form-item>
        <a-form-item
          :validate-status="passwordError() ? 'error' : ''"
          :help="passwordError() || ''"
        >
          <a-input-password
            v-decorator="[
              'password',
              {
                rules: [
                  { required: true, message: 'Please input your Password!' },
                ],
              },
            ]"
            type="password"
            placeholder="Password"
          >
            <a-icon
              slot="prefix"
              type="lock"
              style="color: rgba(0, 0, 0, 0.25)"
            />
          </a-input-password>
        </a-form-item>
        <a-form-item>
          <a-button
            type="primary"
            html-type="submit"
            :disabled="hasErrors(form.getFieldsError())"
          >
            Log in
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
<style scoped>
.auth-holder {
  width: 100vw;
  height: 100vh;
  background: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
}
.auth {
  background: #fff;
  padding: 20px;
  width: 100%;
  max-width: 470px;
  padding-bottom: 0;
}
</style>
<script>
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some((field) => fieldsError[field])
}
export default {
  data() {
    return {
      hasErrors,
      form: this.$form.createForm(this, { name: 'auth_login' }),
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.form.validateFields()
    })
  },
  methods: {
    userNameError() {
      const { getFieldError, isFieldTouched } = this.form
      return isFieldTouched('username') && getFieldError('username')
    },
    passwordError() {
      const { getFieldError, isFieldTouched } = this.form
      return isFieldTouched('password') && getFieldError('password')
    },
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          this.$store
            .dispatch('authenticateUser', {
              username: values.username,
              password: values.password,
            })
            .then((v) => {
              if (!v.error) {
                this.$router.push('/admin/slider')
              }
            })
        }
      })
    },
  },
}
</script>
