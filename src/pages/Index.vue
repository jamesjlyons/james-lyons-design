<template>
  <Layout>
    <section class="intro">
      <div class="intro-hero">
        <div class="intro-graphic">
          <div class="intro-frame">
            <div class="frame-wave">
              <span class="wave">👋</span>
            </div>
          </div>
          <div class="intro-links">

          </div>
        </div>
        <div class="intro-type">
          <h5 class="small-margin">Hello, I'm</h5>
          <h2 class="small-margin">James Lyons</h2>
          <h4 class="small-margin">
            Product Designer at
            <a href="https://liferay.design">Liferay</a>.
          </h4>
          <h4 class="small-margin">
            Making things with
            <a href="http://tapfive.io/">Tap&nbsp;Five</a>.
          </h4>
          <h5 class="small-margin previous">
            Previously Lead Designer at
            <a href="https://www.grandpad.net">GrandPad</a>.
          </h5>
        </div>
      </div>
    </section>
    <!-- <div class="links">
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
    </div>-->
    <!-- <br />
      <br />
      <br />
    </div>
    <div class="werk text_small">
      <g-image alt="party parrot construction" src="~/assets/fixparrot.gif" width="16" />Currently getting werk done on this site.
    </div>-->
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: ""
  }
};
</script>

<style lang="postcss">
span.wave {
  animation-name: wave-animation;
  animation-duration: 2.5s;
  animation-iteration-count: 1;
  transform-origin: 70% 70%;
  display: inline-block;
}
@keyframes wave-animation {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(-10deg);
  }
  20% {
    transform: rotate(12deg);
  }
  30% {
    transform: rotate(-10deg);
  }
  40% {
    transform: rotate(9deg);
  }
  50% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.intro {
  max-width: 980px;
  margin: auto;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.intro-hero {
  display: flex;
}

.intro-graphic {
  margin-right: 24px;
  /* background: rgb(243, 243, 243);
  border-radius: 16px;
  height: 208px;
  width: 196px; */
}

.intro-frame {
  width: 196px;
  height: 196px;
  background: rgb(255, 255, 255);
  border: 4px solid rgb(235, 235, 235);
  box-shadow: 0px 12px 24px -9px rgba(0, 0, 0, 0.5);
  border-radius: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.frame-wave {
  font-size: 72px;
  transform: translateX(-5%);
}

.intro-links {
  
}

.intro-type {
  & a {
    color: var(--dark);
    text-decoration: underline var(--medium);
    text-decoration-skip-ink: auto;
    transition-property: all;
    transition-duration: .3s;
    transition-timing-function: ease;
  }
   & a:hover {
    color: var(--dark);
    text-decoration: underline var(--green);
    text-decoration-skip-ink: auto;
  }
}

.small-margin {
  margin: 4px 0px;
}

.previous {
  color: var(--medium);
  & a {
    color: var(--medium);
  }
}
</style>
