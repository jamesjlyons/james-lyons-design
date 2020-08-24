<template>
  <a role="button" class="toggle-theme" @click="setCurrentTheme">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentColor"
    >
      <path
        d="M22.783,11.116l-2.46-2.46a.249.249,0,0,1-.074-.176V5A1.251,1.251,0,0,0,19,3.75H15.52a.251.251,0,0,1-.177-.073l-2.46-2.46a1.251,1.251,0,0,0-1.767,0l-2.46,2.46a.251.251,0,0,1-.177.073H5A1.252,1.252,0,0,0,3.749,5V8.48a.248.248,0,0,1-.073.176l-2.46,2.46a1.252,1.252,0,0,0,0,1.768l2.46,2.46a.249.249,0,0,1,.073.177V19A1.251,1.251,0,0,0,5,20.25h3.48a.251.251,0,0,1,.177.073l2.46,2.46a1.25,1.25,0,0,0,1.767,0l2.46-2.46a.251.251,0,0,1,.177-.073H19A1.25,1.25,0,0,0,20.249,19V15.521a.25.25,0,0,1,.074-.177l2.46-2.46A1.25,1.25,0,0,0,22.783,11.116ZM10.172,7.773a.25.25,0,0,1,.044-.445,5,5,0,1,1,0,9.344.25.25,0,0,1-.044-.444,5,5,0,0,0,0-8.455Z"
      ></path>
    </svg>
    <transition name="from-bottom-to-bottom" mode="out-in">
      <span
        v-if="$colorMode.preference === 'dark'"
        key="dark"
        class="inline-block font-medium mr-1"
      >
        Dark
      </span>
      <span
        v-if="$colorMode.preference === 'system'"
        key="system"
        class="inline-block font-medium mr-1"
      >
        System
      </span>
      <span
        v-else-if="$colorMode.preference === 'light'"
        key="light"
        class="inline-block font-medium mr-1"
      >
        Light
      </span>
    </transition>

    <!-- <svg
      v-if="theme === 'dark'"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentColor"
    >
      <path
        d="M22.783,11.116l-2.46-2.46a.249.249,0,0,1-.074-.176V5A1.251,1.251,0,0,0,19,3.75H15.52a.251.251,0,0,1-.177-.073l-2.46-2.46a1.251,1.251,0,0,0-1.767,0l-2.46,2.46a.251.251,0,0,1-.177.073H5A1.252,1.252,0,0,0,3.749,5V8.48a.248.248,0,0,1-.073.176l-2.46,2.46a1.252,1.252,0,0,0,0,1.768l2.46,2.46a.249.249,0,0,1,.073.177V19A1.251,1.251,0,0,0,5,20.25h3.48a.251.251,0,0,1,.177.073l2.46,2.46a1.25,1.25,0,0,0,1.767,0l2.46-2.46a.251.251,0,0,1,.177-.073H19A1.25,1.25,0,0,0,20.249,19V15.521a.25.25,0,0,1,.074-.177l2.46-2.46A1.25,1.25,0,0,0,22.783,11.116ZM10.172,7.773a.25.25,0,0,1,.044-.445,5,5,0,1,1,0,9.344.25.25,0,0,1-.044-.444,5,5,0,0,0,0-8.455Z"
      ></path>
    </svg> -->
  </a>
</template>

<script>
// let themes = ['light', 'dark']
export default {
  // components: {
  //   SunIcon,
  //   MoonIcon,
  //   SystemIcon
  // },
  props: [],
  data() {
    return {
      //
    }
  },
  methods: {
    setCurrentTheme() {
      this.$colorMode.preference =
        this.$colorMode.preference === 'system'
          ? 'light'
          : this.$colorMode.preference === 'light'
          ? 'dark'
          : 'system'
    },
  },
}
</script>

<style lang="postcss">
.toggle-theme {
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 0;
  color: currentColor;
  cursor: pointer;
  margin-left: 24px;
  transition-property: color;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  &:hover {
    color: var(--green);
  }
  &:focus {
    outline: none;
  }
}
</style>
