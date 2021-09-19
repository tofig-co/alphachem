<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo">Alphachem Admin</div>
      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <a-menu-item key="1">
          <a-icon type="file" />
          <span>Slider</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="appstore" />
          <span>Products</span>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="info-circle" />
          <span>About</span>
        </a-menu-item>
        <a-menu-item key="4">
          <a-icon type="phone" />
          <span>Contacts</span>
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
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        Content
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
