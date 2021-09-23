<template>
  <header id="mu-hero">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light mu-navbar">
        <nuxt-link to="/" class="navbar-brand mu-logo">
          <img src="/alpha_logo_colored.svg" alt="" />
        </nuxt-link>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="fa fa-bars"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto mu-navbar-nav">
            <li class="nav-item" v-for="route in routes">
              <nuxt-link :to="route.path">{{
                $t('nav.' + route.path)
              }}</nuxt-link>
            </li>
          </ul>
        </div>
        <LanguageSwitcher />
      </nav>
    </div>
  </header>
</template>
<script>
export default {
  props: {
    pageTitle: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      routes: [
        {
          path: '/',
          title: 'Home',
        },
        {
          path: '/about',
          title: 'About us',
        },
        {
          path: '/products',
          title: 'Products',
        },
        {
          path: '/contact',
          title: 'Contact us',
        },
      ],
    }
  },
}
</script>
