<template>
  <div>
    <Header :pageTitle="title" />
    <PageHeader :pageTitle="'/contact'" />

    <main>
      <section id="mu-contact">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="mu-contact-area">
                <div class="row">
                  <div class="col-md-12">
                    <div class="mu-title">
                      <h2>{{ $t('contact_say_hello') }}</h2>
                      <!-- <p>{{ $t('contact_description') }}</p> -->
                    </div>
                  </div>
                </div>
                <div class="mu-contact-content">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="mu-single-footer">
                        <h3>{{ $t('contact_info') }}</h3>
                        <ul class="list-unstyled">
                          <li class="media">
                            <span class="fa fa-home"></span>
                            <div class="media-body">
                              <p>{{ contactsData['adress' + lang] }}</p>
                            </div>
                          </li>
                          <li class="media">
                            <span class="fa fa-phone"></span>
                            <div class="media-body">
                              <p
                                v-for="phone in contactsData.phones.split(',')"
                              >
                                <a :href="'tel:' + phone">{{ phone }}</a>
                              </p>
                            </div>
                          </li>
                          <li class="media">
                            <span class="fa fa-envelope"></span>
                            <div class="media-body">
                              <p
                                v-for="email in contactsData.emails.split(',')"
                              >
                                <a :href="'mailto:' + email">{{ email }}</a>
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mapouter">
                        <div class="gmap_canvas">
                          <iframe
                            width="100%"
                            height="500"
                            id="gmap_canvas"
                            src="https://maps.google.com/maps?ll=40.4736823,49.9491262&t=&z=14&ie=UTF8&iwloc=&output=embed"
                            frameBorder="0"
                            scrolling="no"
                            marginHeight="0"
                            marginWidth="0"
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Contact us',
    }
  },
  computed: {
    lang() {
      return this.$store.state.i18n.locale.toUpperCase()
    },
  },
  head() {
    return {
      title: 'Alphachem - ' + this.title,
    }
  },

  async asyncData(context) {
    const contactsData = await context.app.$axios.$get(`/api/contacts/`)
    return { contactsData }
  },
}
</script>
<style scoped>
.mu-contact-content {
  padding: 0;
}
.mu-single-footer .list-unstyled li {
  justify-content: center;
}
.media-body {
  flex: inherit;
}
.mapouter {
  position: relative;
  text-align: right;
  height: 500px;
  width: 600px;
}
.gmap_canvas {
  overflow: hidden;
  background: none !important;
  height: 500px;
  width: 600px;
}
.mu-single-footer .list-unstyled li.media a {
  font-size: 14px;
  text-decoration: underline;
}
</style>
