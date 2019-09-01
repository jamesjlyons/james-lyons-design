<template>
  <div class="sidebar">
      <div class="profile"></div>
      <h5>Sidebar</h5>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
//   data () {
//     return {
//       message: 'Try change me!'
//     }
//   },
//   methods: {
//     onClick () {
//       this.message = 'Here you go :)'
//     }
//   }
}
</script>

<style lang="postcss">
.sidebar {
  padding: 48px 16px;
  background: #000;
  width: 100%;
  height: calc(100vh - 148px);
  grid-area: 1 / 1 / 5 / 2;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
  border-radius: 24px 0px 0px 24px;
}

.profile {
    background: var( --gradient);
    width: 80px;
    height: 80px;
    border-radius: 80px;
}
</style>