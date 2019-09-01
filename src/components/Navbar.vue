<template>
  <nav class="nav">
    <div class="nav-items">
      <!-- <g-link class="nav__link" to="/">/home</g-link> -->
      <g-link class="nav__link" to="/work">/work</g-link>
      <g-link class="nav__link" to="/writing">/writing</g-link>
      <g-link class="nav__link" to="/about">/about</g-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style lang="postcss">
nav {
  max-width: 980px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
}

.nav-items {
  display: flex;
  align-items: flex-end;
  & .nav__link {
    color: var(--dark);
    text-decoration: none;
    margin-left: 24px;
  }
}
</style>