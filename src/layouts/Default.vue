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

<style>
@import url("https://fonts.googleapis.com/css?family=Barlow:400,500,600,700&display=swap");
html {
  font-size: 18px;
}

@media (width: 360px) {
  html {
  font-size: 16px;
}
}

body {
  font-family: "Barlow", -apple-system, system-ui, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-weight: 400;
  line-height: 1.45;
  color: hsla(0, 0%, 0%, 100%);
  overflow: visible;
  margin: 12px;
  border: 12px solid hsla(0, 0%, 0%, 100%);
  border-radius: 24px;
  min-height: calc(100vh - 48px);
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

a {
  color: hsla(0, 0%, 0%, 100%);
  text-decoration: underline black;
  position: relative;
  z-index: 1;
}

a::before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0em;
  right: 0em;
  background-color: hsla(156, 100%, 50%, 1);
  transform-origin: center right;
  transform: scaleX(0);
  transition: transform 0.2s ease-in-out;
}

a:hover::before {
  transform: scaleX(1);
  transform-origin: center left;
}

.layout {
  /* max-width: 760px; */
  margin-top: 96px;
  margin-bottom: 96px;
  padding-left: 48px;
  padding-right: 48px;
}
</style>
