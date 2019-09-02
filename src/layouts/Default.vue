<template>
  <div class="layout">
    <header class="header">
      <Navbar></Navbar>
    </header>
    <slot />
    <Footer></Footer>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";
export default {
  components: {
    Navbar,
    Footer
  }
};
</script>

<style>
.layout {
  margin: 40px 16px;
}
/* Small (sm) */
@media (max-width: 640px) { 
  .layout {
  margin: 24px 16px;
}
 }
</style>
