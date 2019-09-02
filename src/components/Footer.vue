<template>
  <footer>
    <small>©{{ new Date().getFullYear() }}</small>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="postcss">
footer {
  color: var(--medium);
  max-width: 980px;
  margin: 0 auto;
  padding-top: 40px;
  display: flex;
  justify-content: flex-end;
}
</style>