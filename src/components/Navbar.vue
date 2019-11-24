<template>
  <nav class="nav">
    <div class="nav-items">
      <!-- <g-link class="nav__link" to="/">/home</g-link> -->
      <g-link class="nav__link" to="/">/work</g-link>
      <ToggleTheme />
      <!-- <g-link class="nav__link" to="/writing">/writing</g-link>
      <g-link class="nav__link" to="/about">/about</g-link> -->
    </div>
  </nav>
</template>

<script>
import ToggleTheme from "~/components/ToggleTheme.vue";

export default {
  name: "Navbar",
   components: {
    ToggleTheme
  }
};
</script>

<style lang="postcss">
nav {
  max-width: 980px;
  margin: 0 auto;
  padding-bottom: 40px;
  display: flex;
  justify-content: flex-end;
}

.nav-items {
  display: flex;
  /* align-items: flex-end; */
  & .nav__link {
    color: var(---font-main);
    margin-left: 24px;
    text-decoration: underline var(--body-background);
    text-decoration-skip-ink: auto;
    transition-property: text-decoration, color;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
  }
  & .nav__link:hover {
    text-decoration: underline var(--green);
  }
}
</style>