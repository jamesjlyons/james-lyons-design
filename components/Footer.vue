<template>
  <footer>
    <small>{{ new Date().getFullYear() }} JAMES LYONS</small>
    <small class="backToTop" @click.prevent="backToTop()">☝️ BACK TO TOP</small>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    backToTop() {
      const topHtml = document.querySelector('html')
      topHtml.scrollIntoView({ behavior: 'smooth' })
    },
  },
}
</script>

<style lang="postcss">
footer {
  color: var(--medium);
  max-width: 980px;
  width: auto;
  margin: 0 auto;
  padding-top: 40px;
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  justify-content: space-between;
  & .backToTop {
    cursor: pointer;
    color: var(--font-main);
    text-decoration: underline var(--background);
    text-decoration-skip-ink: auto;
    transition-property: text-decoration, color;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
  }
  & .backToTop:hover {
    color: var(--font-main);
    text-decoration: underline var(--green);
  }
}
</style>
