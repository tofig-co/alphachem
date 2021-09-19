<template>
  <h1>Admin</h1>
</template>

<script>
export default {
  layout: 'admin',
  middleware({ store, redirect }) {
    return redirect('/admin/slider')
  },
}
</script>
