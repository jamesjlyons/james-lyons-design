<template>
  <a role="button" @click.prevent="toggleTheme()"
      class="toggle-theme"
    >

    <svg v-if="theme === 'light'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M22.783,11.116l-2.46-2.46a.249.249,0,0,1-.074-.176V5A1.251,1.251,0,0,0,19,3.75H15.52a.251.251,0,0,1-.177-.073l-2.46-2.46a1.251,1.251,0,0,0-1.767,0l-2.46,2.46a.251.251,0,0,1-.177.073H5A1.252,1.252,0,0,0,3.749,5V8.48a.248.248,0,0,1-.073.176l-2.46,2.46a1.252,1.252,0,0,0,0,1.768l2.46,2.46a.249.249,0,0,1,.073.177V19A1.251,1.251,0,0,0,5,20.25h3.48a.251.251,0,0,1,.177.073l2.46,2.46a1.25,1.25,0,0,0,1.767,0l2.46-2.46a.251.251,0,0,1,.177-.073H19A1.25,1.25,0,0,0,20.249,19V15.521a.25.25,0,0,1,.074-.177l2.46-2.46A1.25,1.25,0,0,0,22.783,11.116ZM10.172,7.773a.25.25,0,0,1,.044-.445,5,5,0,1,1,0,9.344.25.25,0,0,1-.044-.444,5,5,0,0,0,0-8.455Z"></path>
    </svg>

    <svg v-if="theme === 'dark'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M22.783,11.116l-2.46-2.46a.249.249,0,0,1-.074-.176V5A1.251,1.251,0,0,0,19,3.75H15.52a.251.251,0,0,1-.177-.073l-2.46-2.46a1.251,1.251,0,0,0-1.767,0l-2.46,2.46a.251.251,0,0,1-.177.073H5A1.252,1.252,0,0,0,3.749,5V8.48a.248.248,0,0,1-.073.176l-2.46,2.46a1.252,1.252,0,0,0,0,1.768l2.46,2.46a.249.249,0,0,1,.073.177V19A1.251,1.251,0,0,0,5,20.25h3.48a.251.251,0,0,1,.177.073l2.46,2.46a1.25,1.25,0,0,0,1.767,0l2.46-2.46a.251.251,0,0,1,.177-.073H19A1.25,1.25,0,0,0,20.249,19V15.521a.25.25,0,0,1,.074-.177l2.46-2.46A1.25,1.25,0,0,0,22.783,11.116ZM10.172,7.773a.25.25,0,0,1,.044-.445,5,5,0,1,1,0,9.344.25.25,0,0,1-.044-.444,5,5,0,0,0,0-8.455Z"></path>
    </svg>
  </a>
</template>

<script>
let themes = ['light', 'dark']
export default {
  data() {
    return {
      theme: 'light',
    }
  },
  methods: {
    toggleTheme() {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      if (currentTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      }
      else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
      }
    }
  },
  async mounted() {
    // set default
     const currentTheme = document.documentElement.getAttribute('data-theme');
     const localTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
     document.documentElement.setAttribute('data-theme', localTheme);
     if (currentTheme === null) {
      localStorage.setItem('theme', 'light');
      document.documentElement.setAttribute('data-theme', 'light');
     }
  }
};
</script>

<style lang="postcss">
.toggle-theme {
  background-color: transparent;
  border: 0;
  color: currentColor;
  cursor: pointer;
  margin-left: 24px;
  &:hover {
    color: var(--green);
  }
  &:focus {
    outline: none;
  }
}
</style>