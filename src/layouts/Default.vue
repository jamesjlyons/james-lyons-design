<template>
  <div class="layout">
    <header class="header">
      <Navbar></Navbar>
    </header>
    <slot />
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
export default {
  components: {
    Navbar
  }
};
</script>

<style>
.layout {
  margin: 40px 16px;
}
</style>
