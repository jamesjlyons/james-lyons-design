<template>
  <Layout>
    <section class="project-intro">
      <h6>CASE STUDY 0{{ $page.project.order }}</h6>
      <h2 v-if="$page.project">{{ $page.project.title }}</h2>
      <h4 v-if="$page.project">{{ $page.project.description }}</h4>
      <h6>Role: {{ $page.project.role }}</h6>
      <!-- <g-image v-if="$page.project" :src="$page.project.thumbnail" /> -->
    </section>
    <section class="project-hero">
      <g-image v-if="$page.project" :src="$page.project.hero" quality="100" />
    </section>
    <section class="project-content">
      <div v-if="$page.project" v-html="$page.project.content"></div>
    </section>
  </Layout>
</template>

<page-query>
query Project ($path: String!) {
  project: project (path: $path) {
    title
    description
    company
    role
    content
    thumbnail
    hero (quality: 100)
    order
  }
}
</page-query>

<script>
export default {};
</script>

<style lang="postcss">
.project-intro {
  max-width: 980px;
  margin: auto;
  padding-top: 80px;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & img {
    margin-top: 80px;
    margin-bottom: 80px;
  }
  & h6 {
    color: var(--medium);
  }
}

h2,
h4,
h6 {
  margin-top: 16px;
  margin-bottom: 16px;
}

.project-hero {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  & img {
    width: inherit;
    max-width: 960px;
  }
}

.project-content {
  max-width: 65ch;
  margin-left: auto;
  margin-right: auto;
  margin-top: 80px;
  & p {
    max-width: 65ch;
    line-height: 1.6;
    font-weight: 500;
  }
  & ul {
    color: var(--font-p);
    max-width: 65ch;
  }
  & ol {
    color: var(--font-p);
    max-width: 65ch;
  }
  & strong {
    font-weight: 700;
    color: var(--font-main);
  }
  & a {
    color: var(--font-main);
    font-weight: 600;
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
  & img {
    width: 100%;
    max-width: 980px;
  }
  & .center {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }

  & iframe {
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: 18px;
    /* border: 4px solid #fff; */
    box-shadow: 0px 12px 24px -9px rgba(0, 0, 0, 0.5);
    /* cursor: url('/assets/cursor.png') 39 39, auto;
    cursor: -webkit-image-set(
      url('/assets/cursor.png') 1x,
      url('/assets/cursor@2x.png') 2x
    ) 39 39, auto; */
    /* transform: rotate3d(.5,-.8661,0,15deg) rotateZ(1deg);
    box-shadow: 27.1px 62.5px 125px -25px
    rgba(50,50,93,.5),16.2px 37.5px 75px -37.5px rgba(0,0,0,.6); */
    /* margin: auto; */
  }
}

/* media queries */


/* Extra Large (xl) */
@media (max-width: 1280px) {
  /* ... */
}


/* Large (lg) */
@media (max-width: 1024px) {
.project-intro {
  padding-top: 40px;
  min-height: 60vh;
}
}

/* Medium (md) */
@media (max-width: 768px) {
 .project-intro {
  padding-top: 24px;
  min-height: 60vh;
}
}

/* Small (sm) */
@media (max-width: 640px) {
   .project-intro {
  padding-top: 8px;
  min-height: 60vh;
}
}

/* XSmall (xsm) */
@media (max-width: 320px) {
   iframe {
      transform: scale(0.85);
      transform-origin: left;
   }
}
</style>
