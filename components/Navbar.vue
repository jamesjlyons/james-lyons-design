<template>
  <nav class="nav">
    <div class="nav-items">
      <nuxt-link class="nav__link" to="/">Work</nuxt-link>
      <!-- <nuxt-link class="nav__link" to="/some-thoughts">Thoughts</nuxt-link> -->
      <nuxt-link class="nav__link" to="/playground">Play</nuxt-link>
      <nuxt-link class="nav__link" to="/about">About</nuxt-link>
      <ToggleTheme />
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style lang="postcss">
nav {
  max-width: 980px;
  height: 80px;
  margin: 0 auto;

  /* padding-bottom: 40px; */
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.nav-items {
  display: flex;
  & .nav__link {
    color: var(--font-main);
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
  & .nuxt-link-exact-active {
    font-weight: 600;
    text-decoration: underline var(--medium);
  }
}
</style>
