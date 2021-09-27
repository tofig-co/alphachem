<template>
  <main>
    <a class="scrollToTop" href="#">
      <i class="fa fa-angle-up"></i>
    </a>
    <nuxt />
    <footer id="mu-footer">
      <div class="mu-footer-bottom">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="mu-footer-bottom-area">
                <p class="mu-copy-right">
                  &copy;&nbsp;{{ new Date().getFullYear() }} Copyright &nbsp;
                  <a rel="nofollow" href="/"> Alphachem </a>
                  . All right reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </main>
</template>
<script>
export default {
  head() {
    return {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css',
        },
        {
          rel: 'stylesheet',
          href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css',
        },
        {
          rel: 'stylesheet',
          href: '/css/slick.css',
        },
        {
          rel: 'stylesheet',
          href: 'https://unpkg.com/circlebars@1.0.3/dist/circle.css',
        },
        {
          rel: 'stylesheet',
          href: '/style.css',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Raleway:300,400,400i,500,500i,600,700',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,700,800',
        },
      ],
      script: [
        {
          src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js',
        },
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js',
          integrity:
            'sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4',
          crossOrigin: 'anonymous',
        },
        {
          src: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js',
          integrity:
            'sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1',
          crossOrigin: 'anonymous',
        },
        {
          src: '/js/slick.min.js',
          type: 'text/javascript',
        },

        {
          src: '/js/app.js',
          type: 'text/javascript',
        },
        {
          src: '/js/custom.js',
          type: 'text/javascript',
        },
      ],
    }
  },
}
</script>
<style scoped>
main {
  width: 100vw;
  min-height: 100vh;
}
</style>
