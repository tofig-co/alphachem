<template>
  <div class="lang-switcher">
    <button
      @click="
        (e) => {
          setOpen(!this.open)
        }
      "
      class="switch"
      v-bind:class="[open ? 'opened' : '']"
    >
      {{ $i18n.locale }}
    </button>
    <ul v-show="open">
      <li
        v-for="locale in availableLocales"
        :key="locale.code"
        @click="
          () => {
            set_locale(locale.code)
            setOpen(false)
          }
        "
      >
        {{ locale.name }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      open: false,
    }
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
  },
  methods: {
    set_locale(code) {
      this.$i18n.setLocale(code)
      window.location.reload()
    },
    setOpen(isOpened) {
      this.open = isOpened
    },
  },
}
</script>

<style scoped>
.switch {
  background: none;
  box-shadow: none;
  border: none;
  color: #0091ea;
  display: block;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  text-transform: uppercase;
}
.lang-switcher {
  position: relative;
  margin-left: 5px;
}
@media (max-width: 640px) {
  .lang-switcher {
    width: 100%;
    margin-left: 0px;
  }
}
.lang-switcher ul {
  position: absolute;
  top: 39px;
  z-index: 10;
  list-style: none;
  margin: 0;
  padding: 0;
  border-radius: 0 0 15px 15px;
  background: #fff;
  box-shadow: 0px 2px 2px 0px #000;
  z-index: 11;
}

.lang-switcher ul li {
  text-transform: uppercase;
  cursor: pointer;
  list-style: none;
  color: #0091ea;
  display: block;
  font-size: 14px;
  font-weight: 700;
  padding: 9px;
}
a {
  border-radius: 15px;
  background: #eee;
}
a.opened {
  border-radius: 15px 15px 0 0;
}
</style>
