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
  display: flex;
  flex-direction: column;
  min-height: 99vh;
}

main {
  min-height: 100%;
  padding-bottom: 80px;
  flex-grow: 1;
}

footer {
  /* flex-shrink: 0; */
  margin-top: -80px;
}

header {
  position: sticky;
  top: 0;
  background-color: var(--nav-background);
  backdrop-filter: blur(8px);
  z-index: 9;
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
