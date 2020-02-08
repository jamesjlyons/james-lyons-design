<template>
  <Layout>
    <section class="intro">
      <div class="intro-hero">
        <div class="intro-graphic">
          <!-- <transition name="fade" appear> -->
          <div id="intro-frame" class="intro-frame">
            <div class="frame-wave">
              <span class="wave">👋</span>
            </div>
            <div class="frame-liferay">
              <g-image
                src="~/assets/liferay-icon-white.svg"
                width="88"
                immediate="true"
              />
            </div>
            <div class="frame-tapfive">
              <g-image
                src="~/assets/tap5-logo.svg"
                width="120"
                immediate="true"
              />
            </div>
            <div class="frame-grandpad">
              <g-image
                src="~/assets/grandpad-logo.svg"
                width="96"
                immediate="true"
              />
            </div>
          </div>
          <!-- </transition> -->
          <!-- <transition name="fade" appear> -->
          <div class="intro-links">
            <a
              href="https://dribbble.com/jamesjlyons"
              target="_blank"
              class="button-link"
            >
              <g-image
                src="~/assets/icon-dribbble.svg"
                width="24"
                immediate="true"
              />
            </a>
            <a
              href="https://github.com/jamesjlyons"
              target="_blank"
              class="button-link"
            >
              <g-image
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
              <g-image
                src="~/assets/icon-email.svg"
                width="24"
                immediate="true"
              />
            </a>
          </div>
          <!-- </transition> -->
        </div>
        <!-- <transition name="fade-delay" appear> -->
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
              >Liferay</a
            >.
          </h4>
          <h4 class="small-margin">
            Making things with
            <a
              href="http://tapfive.io/"
              target="_blank"
              v-on:mouseenter="tapfive"
              v-on:mouseleave="wave"
              >Tap&nbsp;Five</a
            >.
          </h4>
          <h5 class="small-margin previous">
            Previously Lead Designer at
            <a
              href="https://www.grandpad.net"
              target="_blank"
              v-on:mouseenter="grandpad"
              v-on:mouseleave="wave"
              >GrandPad</a
            >.
          </h5>
        </div>
        <!-- </transition> -->
      </div>
    </section>
    <section class="projects">
      <!-- <transition name="fade-delay" appear> -->
      <div class="project-list">
        <h5>Selected Work</h5>
        <ProjectListItem2
          v-for="project in $page.allProject.edges"
          :key="project.node.id"
          :project="project.node"
        />
      </div>
      <!-- </transition> -->
    </section>
  </Layout>
</template>

<page-query>
query {
  allProject (sortBy: "order", order: ASC) {
    totalCount
    edges {
      node {
        id
        path
        title
        company
        website
        description
        role
        thumbnail
        mockuptype
        mockupimage
        mockupimagetwo
        casestudy
      }
    }
  }
}
</page-query>

<script>
import ProjectListItem2 from "~/components/ProjectListItem2.vue";
export default {
  metaInfo: {
    title: ""
  },
  components: {
    ProjectListItem2
  },
  methods: {
    wave: function(event) {
      document.getElementById("intro-frame").classList.remove("liferay");
      document.getElementById("intro-frame").classList.remove("tapfive");
      document.getElementById("intro-frame").classList.remove("grandpad");
      // console.log("wave");
    },
    liferay: function(event) {
      document.getElementById("intro-frame").classList.add("liferay");
    },
    tapfive: function(event) {
      document.getElementById("intro-frame").classList.add("tapfive");
    },
    grandpad: function(event) {
      document.getElementById("intro-frame").classList.add("grandpad");
    }
  }
};
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
}

.intro-hero {
  display: flex;
  flex-direction: row;
}

.intro-graphic {
  margin-right: 24px;
  display: grid;
  grid-template-columns: 196px;
  grid-template-rows: 140px repeat(2, 56px);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.intro-frame {
  grid-area: 1 / 1 / 3 / 2;
  z-index: 1;
  overflow: hidden;
  background: var(--body-background);
  border: 4px solid var(--border);
  box-shadow: 0px 12px 24px -9px rgba(0, 0, 0, 0.5);
  border-radius: 42px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  /* transition: all 0.5s ease-in-out; */
  & .frame-wave {
    font-size: 72px;
    transform: translateX(-5%);
    z-index: 2;
    opacity: 1;
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
    /* background: #55acee; */
    background: linear-gradient(-135deg, #64b4f0 0%, #55acee 50%, #2795e9 100%);
    transition: opacity 0.5s ease-in-out;
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

.frame-wave,
.frame-liferay,
.frame-tapfive,
.frame-grandpad {
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  align-items: center;
  justify-content: center;
}

.intro-links {
  grid-area: 2 / 1 / 4 / 2;
  width: 196px;
  padding-bottom: 12px;
  /* background: rgb(243, 243, 243); */
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
  margin: 4px 0px;
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
    margin-right: 0px;
    margin-bottom: 40px;
    margin-top: 40px;
    display: grid;
    grid-template-columns: 196px;
    grid-template-rows: 140px repeat(2, 56px);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
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
  /* ... */
}
</style>
