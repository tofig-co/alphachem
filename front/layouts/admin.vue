<template>
  <a-layout id="components-layout-demo-custom-trigger" v-if="token">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo"><span v-if="!collapsed">Alphachem Admin</span></div>
      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <a-menu-item key="1">
          <nuxt-link :to="'/admin/slider'">
            <a-icon type="file" />
            <span>Slider</span>
          </nuxt-link>
        </a-menu-item>

        <a-menu-item key="2">
          <nuxt-link :to="'/admin/products'">
            <a-icon type="appstore" />
            <span>Products</span>
          </nuxt-link>
        </a-menu-item>
        <a-menu-item key="3">
          <nuxt-link :to="'/admin/about'">
            <a-icon type="info-circle" />
            <span>About</span>
          </nuxt-link>
        </a-menu-item>
        <a-menu-item key="4">
          <nuxt-link :to="'/admin/contacts'">
            <a-icon type="phone" />
            <span>Contacts</span>
          </nuxt-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
        <a-icon class="trigger logout" :type="'logout'" @click="logout" />
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        <nuxt />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false,
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout').then((v) => {
        window.location.reload()
      })
    },
  },
  name: 'admin-layout',
  computed: {
    token() {
      return this.$store.state.token
    },
  },
  watch: {
    $route() {
      this.$store.dispatch('initAuth').then()
      if (!this.token) {
        this.$router.push('/login')
      }
    },
  },
  mounted() {
    this.$store.dispatch('initAuth').then((v) => {
      this.$axios.setToken(this.$store.state.token, 'Bearer', [
        'post',
        'delete',
        'patch',
      ])
    })
    if (!this.token) {
      this.$router.push('/login')
    }
  },
}
</script>
<style>
#components-layout-demo-custom-trigger {
  min-height: 100vh;
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}
#components-layout-demo-custom-trigger .trigger.logout {
  float: right;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  margin: 27px 0;
  color: #fff;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 23px;
}
</style>
