<template>
  <div class="layout">
    <!-- <header class="header">
      <strong>
        <g-link to="/">{{ $static.metaData.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about">About</g-link>
      </nav>
    </header>-->
    <Sidebar>
    </Sidebar>
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
import Sidebar from '~/components/Sidebar.vue';
export default {
    components: {
    Sidebar
  }
}
</script>

<style>

body {
  color: hsla(0, 0%, 0%, 100%);

  font-family: "Barlow", -apple-system, system-ui, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-weight: 400;
  line-height: 1.45;
  /* overflow: visible; */
  /* margin: 12px;
  border: 12px solid hsla(0, 0%, 0%, 100%);
  border-radius: 24px;
  min-height: calc(100vh - 48px); */
}

p {
  margin-bottom: 1.25em;
}

h1,
h2,
h3,
h4,
h5 {
  margin: 2.75rem 0 1rem;

  font-family: "Barlow", sans-serif;
  font-weight: 700;
  line-height: 1.15;
}

h1 {
  margin-top: 0;

  font-size: 7.594em;
}

h2 {
  font-size: 5.063em;
}

h3 {
  font-size: 3.375em;
}

h4 {
  font-size: 2.25em;
}

h5 {
  font-size: 1.5em;
}

small,
.text_small {
  font-size: 0.667em;
}

.layout {
  /* max-width: 760px; */
  /* margin: 24px; */
  /* min-height: 100vh; */
  /* width: 100%; */
  display: grid;

  grid-template-columns: 200px 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-column-gap: 8px;
  grid-row-gap: 0px;
}


</style>
