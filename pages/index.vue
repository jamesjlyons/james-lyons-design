<template>
  <div>
    <section class="intro">
      <transition name="fade" appear>
        <div class="intro-hero">
          <div class="intro-graphic">
            <div id="intro-frame" class="intro-frame">
              <div class="frame-wave">
                <span class="wave" @mouseenter="wavetrack">👋</span>
              </div>
              <div class="frame-soberlink">
                <img
                  src="~/assets/soberlink-logo.svg"
                  width="104"
                  immediate="true"
                />
              </div>
              <div class="frame-liferay">
                <img
                  src="~/assets/liferay-icon-white.svg"
                  width="88"
                  immediate="true"
                />
              </div>
              <div class="frame-tapfive">
                <img
                  src="~/assets/tap5-logo.svg"
                  width="120"
                  immediate="true"
                />
              </div>
              <div class="frame-grandpad">
                <img
                  src="~/assets/grandpad-logo.svg"
                  width="96"
                  immediate="true"
                />
              </div>
            </div>
            <div class="intro-links">
              <a
                href="https://dribbble.com/jamesjlyons"
                target="_blank"
                class="button-link"
              >
                <img
                  src="~/assets/icon-dribbble.svg"
                  width="24"
                  immediate="true"
                />
              </a>
              <a
                href="https://www.figma.com/@jameslyons"
                target="_blank"
                class="button-link"
              >
                <img
                  src="~/assets/icon-figma.svg"
                  width="24"
                  immediate="true"
                />
              </a>
              <a
                href="https://github.com/jamesjlyons"
                target="_blank"
                class="button-link"
              >
                <img
                  src="~/assets/icon-github.svg"
                  width="24"
                  immediate="true"
                />
              </a>
              <a
                href="mailto:hello@jameslyons.design"
                target="_blank"
                class="button-link"
              >
                <img
                  src="~/assets/icon-email.svg"
                  width="24"
                  immediate="true"
                />
              </a>
            </div>
          </div>
          <div class="intro-type">
            <h5 class="small-margin">Hello, I'm</h5>
            <h2 class="small-margin">James Lyons</h2>
            <h4 class="small-margin">
              Sr. Product Designer at
              <a
                href="https://soberlink.com"
                target="_blank"
                @mouseenter="soberlink"
                @mouseleave="wave"
                >Soberlink</a
              >.
            </h4>
            <h4 class="small-margin">
              Making things with
              <a
                href="http://tapfive.io/"
                target="_blank"
                @mouseenter="tapfive"
                @mouseleave="wave"
                >Tap&nbsp;Five</a
              >.
            </h4>
            <h5 class="small-margin previous">
              Previously at
              <a
                href="https://liferay.design"
                target="_blank"
                @mouseenter="liferay"
                @mouseleave="wave"
                >Liferay</a
              >,
              <a
                href="https://www.grandpad.net"
                target="_blank"
                @mouseenter="grandpad"
                @mouseleave="wave"
                >GrandPad</a
              >.
            </h5>
          </div>
        </div>
      </transition>
    </section>
    <section class="projects">
      <div class="project-list">
        <h5>Selected Work</h5>
        <ProjectListItem
          v-for="project in projects"
          :key="project.slug"
          v-bind="project"
        />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Plausible from 'plausible-tracker'

const { trackEvent } = Plausible()

export default {
  transition: 'home',
  async asyncData({ $content, params }) {
    const projects = await $content('projects', params.slug, { deep: true })
      .only([
        'slug',
        'title',
        'description',
        'mockuptype',
        'mockupimage',
        'mockupimagetwo',
        'casestudy',
        'path',
        'website',
      ])
      .sortBy('order', 'asc')
      .fetch()
    return {
      projects,
    }
  },
  methods: {
    wavetrack() {
      trackEvent('Wave')
      console.log('👋 Hello')
    },
    wave() {
      document.getElementById('intro-frame')!.classList.remove('soberlink')
      document.getElementById('intro-frame')!.classList.remove('liferay')
      document.getElementById('intro-frame')!.classList.remove('tapfive')
      document.getElementById('intro-frame')!.classList.remove('grandpad')
    },
    soberlink() {
      document.getElementById('intro-frame')!.classList.add('soberlink')
    },
    liferay() {
      document.getElementById('intro-frame')!.classList.add('liferay')
    },
    tapfive() {
      document.getElementById('intro-frame')!.classList.add('tapfive')
    },
    grandpad() {
      document.getElementById('intro-frame')!.classList.add('grandpad')
    },
  },
}
</script>

<style lang="postcss">
span.wave {
  animation-name: wave-animation;
  animation-delay: 0.6s;
  animation-duration: 2s;
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
  padding-right: 16px;
  padding-left: 16px;
}

.intro-hero {
  display: flex;
  flex-direction: row;
  padding-bottom: 8vh;
}

.intro-graphic {
  margin-right: 24px;
  display: grid;
  grid-template-columns: 196px;
  grid-template-rows: 140px repeat(2, 56px);
  grid-column-gap: 0;
  grid-row-gap: 0;
}

.frame-wave,
.frame-soberlink,
.frame-liferay,
.frame-tapfive,
.frame-grandpad {
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  align-items: center;
  justify-content: center;
}

.intro-frame {
  grid-area: 1 / 1 / 3 / 2;
  z-index: 1;
  overflow: hidden;
  background: var(--body-background);
  border: 4px solid var(--border);
  box-shadow: 0 12px 24px -9px rgba(0, 0, 0, 0.5);
  border-radius: 42px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

  /* grid-column-gap: 0;
  grid-row-gap: 0; */
  & .frame-wave {
    font-size: 72px;
    transform: translateX(-5%);
    z-index: 2;
    opacity: 1;
    transition: opacity 0.5s ease-in-out;
  }
  & .frame-soberlink {
    opacity: 0;
    background: linear-gradient(180deg, #f4faff 0%, #cde8ff 100%);
    transition: opacity 0.5s ease-in-out;
  }
  & .frame-liferay {
    opacity: 0;
    background: #0d63ce;
    transition: opacity 0.5s ease-in-out;
  }
  & .frame-tapfive {
    opacity: 0;
    background: linear-gradient(136deg, #b721ff 10%, #21d4fd 100%);
    transition: opacity 0.5s ease-in-out;
  }
  & .frame-grandpad {
    opacity: 0;
    background: linear-gradient(-135deg, #64b4f0 0%, #55acee 50%, #2795e9 100%);
    transition: opacity 0.5s ease-in-out;
  }
}

.intro-frame.soberlink {
  & .frame-wave {
    opacity: 0;
  }
  & .frame-soberlink {
    opacity: 1;
  }
}

.intro-frame.liferay {
  & .frame-wave {
    opacity: 0;
  }
  & .frame-liferay {
    opacity: 1;
  }
}

.intro-frame.tapfive {
  & .frame-wave {
    opacity: 0;
  }
  & .frame-tapfive {
    opacity: 1;
  }
}

.intro-frame.grandpad {
  & .frame-wave {
    opacity: 0;
  }
  & .frame-grandpad {
    opacity: 1;
  }
}

.intro-links {
  grid-area: 2 / 1 / 4 / 2;
  width: 196px;
  padding-left: 4px;
  padding-right: 4px;
  padding-bottom: 15px;
  background: var(--frame-links);
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
    filter: var(--invert);
  }
  & a:hover {
    transform: scale(1.1);
  }
}

/* TODO refactor .intro-links and .intro-type to avoid decending specificity in nested :hover selectors */

/* stylelint-disable no-descending-specificity */
.intro-type {
  & a {
    color: var(--font-main);
    text-decoration: underline var(--medium);
    text-decoration-skip-ink: auto;
    transition-property: text-decoration, color;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
  }
  & a:hover {
    color: var(--font-main);
    text-decoration: underline var(--green);
  }
  & h4 {
    font-weight: 500;
  }
  & h5 {
    font-weight: 500;
  }
}

.small-margin {
  margin: 12px 0;
}

.previous {
  color: var(--medium);
  & a {
    color: var(--medium);
  }
}

.projects {
  background-color: var(--body-foreground);
  padding-bottom: 80px;
  & .project-list {
    max-width: 980px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    & h5 {
      text-align: center;
    }
  }
}

/* media queries */

/* Extra Large (xl) */
@media (min-width: 1280px) {
  /* ... */
}

/* Large (lg) */
@media (min-width: 1024px) {
  /* ... */
}

/* Medium (md) */
@media (max-width: 768px) {
  .intro-hero {
    flex-direction: column-reverse;
    align-items: center;
  }
  .intro-graphic {
    margin-right: 0;
    margin-bottom: 40px;
    margin-top: 40px;
    display: grid;
    grid-template-columns: 196px;
    grid-template-rows: 140px repeat(2, 56px);
    grid-column-gap: 0;
    grid-row-gap: 0;
  }

  .projects {
    /* padding-bottom: 80px; */
    & .project-list {
      align-items: center;
    }
  }
}

/* Small (sm) */
@media (min-width: 640px) {
  .small-margin {
    margin: 4px 0;
  }
}

/* intro type only */
@media (max-width: 420px) {
  .intro-type {
    & h2 {
      font-size: calc(44px + (64 - 44) * ((100vw - 320px) / (440 - 320)));
    }
    & h4 {
      font-size: calc(28px + (36 - 28) * ((100vw - 320px) / (440 - 320)));
    }
  }
}
</style>
