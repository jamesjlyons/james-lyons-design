<template>
  <div class="layout">
    <header class="header">
      <Navbar></Navbar>
    </header>
    <main>
      <nuxt />
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
export default {
  components: {
    Navbar,
    Footer,
  },
}
</script>

<style>
.layout {
  margin: 40px 0;
}

.layout > header,
.layout > main > * {
  padding-right: 16px;
  padding-left: 16px;
}

.layout > main > div:first-of-type {
  padding-right: 0;
  padding-left: 0;
}

/* Small (sm) */
@media (max-width: 640px) {
  .layout {
    margin: 24px 0;
  }
  .layout > header,
  .layout > main > * {
    padding-right: 24px;
    padding-left: 24px;
  }
}
</style>
