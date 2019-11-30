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
  metadata {
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
  margin: 40px 0px;
  /* padding-right: 16px;
  padding-left: 16px; */
}

.layout > * {
  padding-right: 16px;
  padding-left: 16px;
}
/* Small (sm) */
@media (max-width: 640px) { 
  .layout {
  margin: 24px 0px;
}
.layout > * {
  padding-right: 24px;
  padding-left: 24px;
}
 }
</style>
