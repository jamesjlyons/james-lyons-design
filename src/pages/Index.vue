<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <div class="intro">
      <h4 class="overline">Hello</h4>
      <h2>I'm James Lyons</h2>
      <h3>
        Currently working as a Product Designer at
        <a href="https://liferay.design">Liferay</a> and making things with
        <a href="http://tapfive.io/">Tap&nbsp;Five</a>.
      </h3>
      <h4>
        Previously lead designer at
        <a href="https://www.grandpad.net">GrandPad</a>
      </h4>

      <div class="links">
        <h5>
          <a href="mailto:jamesjlyons29@gmail.com" target="_blank" class="button-link">
            <span>✉️</span>&nbsp;Email
          </a>
        </h5>
        <h5>
          <a href="https://dribbble.com/jamesjlyons" target="_blank" class="button-link">
            <span>🏀</span>&nbsp;Dribbble
          </a>
        </h5>
        <h5>
          <a href="https://github.com/jamesjlyons" target="_blank" class="button-link">
            <span>👨‍💻</span>&nbsp;GitHub
          </a>
        </h5>
      </div>
      <br />
      <br />
      <br />
    </div>
    <div class="werk text_small">
      <g-image alt="party parrot construction" src="~/assets/fixparrot.gif" width="16" />Currently getting werk done on this site.
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: ""
  }
}
</script>

<style lang="postcss">
.intro {
  max-width: 1200px;
}

.links {
  display: flex;
  flex-wrap: wrap;
}

.werk {
  text-align: right;
}

h5 {
  margin-right: 48px;
  & a { 
    & span {
      text-decoration: underline white;
   }
  }
}
</style>
