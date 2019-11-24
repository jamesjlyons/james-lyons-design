<template>
  <div class="layout">
    <header class="header">
      <Navbar></Navbar>
    </header>
    <slot />
    <Footer></Footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";
export default {
  components: {
    Navbar,
    Footer
  }
};

// Add dark / light detection that runs before Vue.js load. Borrowed from overreacted.io
      (function() {
        window.__onThemeChange = function() {};
        function setTheme(newTheme) {
          window.__theme = newTheme;
          preferredTheme = newTheme;
          document.body.setAttribute('data-theme', newTheme);
          window.__onThemeChange(newTheme);
        }
        var preferredTheme;
        try {
          preferredTheme = localStorage.getItem('theme');
        } catch (err) { }
        window.__setPreferredTheme = function(newTheme) {
          setTheme(newTheme);
          try {
            localStorage.setItem('theme', newTheme);
          } catch (err) {}
        }
        var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
        darkQuery.addListener(function(e) {
          window.__setPreferredTheme(e.matches ? 'dark' : 'light');
        });
        setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
      })();
</script>

<style>
.layout {
  margin: 40px 0px;
  /* padding-right: 16px;
  padding-left: 16px; */
}

.layout > * {
  padding-right: 16px;
  padding-left: 16px;
}
/* Small (sm) */
@media (max-width: 640px) { 
  .layout {
  margin: 24px 0px;
}
 }
</style>
