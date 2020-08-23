<template>
  <nav class="nav">
    <div class="nav-items">
      <nuxt-link class="nav__link" to="/">Work</nuxt-link>
      <nuxt-link class="nav__link" to="/about">About Me</nuxt-link>
      <!-- <ToggleTheme /> -->
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
  margin: 0 auto;
  padding-bottom: 40px;
  display: flex;
  justify-content: flex-end;
}

.nav-items {
  display: flex;
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
  & .active--exact {
    text-decoration: underline var(--green);
  }
}
</style>
