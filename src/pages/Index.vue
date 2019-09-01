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
            <a href="https://dribbble.com/jamesjlyons" target="_blank" class="button-link">
              <g-image src="~/assets/icon-dribbble.svg" width="24"/>
            </a>
            <a href="https://github.com/jamesjlyons" target="_blank" class="button-link">
              <g-image src="~/assets/icon-github.svg" width="24"/>
            </a>
            <a href="mailto:jamesjlyons29@gmail.com" target="_blank" class="button-link">
              <g-image src="~/assets/icon-email.svg" width="24"/>
            </a>
          </div>
        </div>
        <transition name="fade" appear>
          <div class="intro-type">
            <h5 class="small-margin">Hello, I'm</h5>
            <h2 class="small-margin">James Lyons</h2>
            <h4 class="small-margin">
              Product Designer at
              <a
                href="https://liferay.design"
                target="_blank"
                v-on:mouseenter="liferay"
                v-on:mouseleave="wave"
              >Liferay</a>.
            </h4>
            <h4 class="small-margin">
              Making things with
              <a href="http://tapfive.io/" target="_blank">Tap&nbsp;Five</a>.
            </h4>
            <h5 class="small-margin previous">
              Previously Lead Designer at
              <a href="https://www.grandpad.net" target="_blank">GrandPad</a>.
            </h5>
          </div>
        </transition>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: ""
  },
  methods: {
    wave: function(event) {
      console.log("wave");
    },
    liferay: function(event) {
      // const frame = document.getElementsByClassName('intro-frame');
      // document.getElementsByClassName('intro-frame').classList.add('liferay');
      console.log("liferay");
    }
  }
};
</script>

<style lang="postcss">
.fade-enter-active {
  transition: opacity 1s;
}

.fade-enter {
  opacity: 0;
}

span.wave {
  animation-name: wave-animation;
  animation-duration: 2.5s;
  animation-iteration-count: 1;
  transform-origin: 70% 70%;
  display: inline-block;
  cursor: grab;
}

span.wave:hover {
  animation-name: wave-animation;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
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
  flex-direction: row;
}

.intro-graphic {
  margin-right: 24px;
  /* background: rgb(243, 243, 243);
  border-radius: 16px;
  height: 208px;
  width: 196px; */
  display: grid;
  grid-template-columns: 196px;
  grid-template-rows: 140px repeat(2, 56px);
  grid-column-gap: 0px;
  grid-row-gap: 0px; 
}

.intro-frame {
  grid-area: 1 / 1 / 3 / 2;
  z-index: 1;
  /* width: 196px;
  height: 196px; */
  background: rgb(255, 255, 255);
  border: 4px solid rgb(235, 235, 235);
  box-shadow: 0px 12px 24px -9px rgba(0, 0, 0, 0.5);
  border-radius: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.intro-frame.liferay {
  background: blue;
}

.frame-wave {
  font-size: 72px;
  transform: translateX(-5%);
}

.intro-links {
  grid-area:  2 / 1 / 4 / 2;
  width: 196px;
  padding-bottom: 12px;
  background: rgb(243, 243, 243);
  border-radius: 0 0 16px 16px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: flex-end;
  & a {
    text-decoration: none;
    transition-property: transform;
    transition-duration: 0.1s;
    transition-timing-function: ease-in-out;
  }
  & a:hover {
    transform: scale(1.1);
  }
}

.intro-type {
  & a {
    color: var(--dark);
    text-decoration: underline var(--medium);
    text-decoration-skip-ink: auto;
    transition-property: text-decoration color;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
  }
  & a:hover {
    color: var(--dark);
    text-decoration: underline var(--green);
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

/* media queries */

/* Small (sm) */
@media (min-width: 640px) {
  /* ... */
}

/* Medium (md) */
@media (max-width: 768px) {
  .intro-hero {
    flex-direction: column;
    align-items: center;
  }
}

/* Large (lg) */
@media (min-width: 1024px) {
  /* ... */
}

/* Extra Large (xl) */
@media (min-width: 1280px) {
  /* ... */
}
</style>
