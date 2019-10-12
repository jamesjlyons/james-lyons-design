<template>
  <Layout>
    <section class="project-intro">
      <h6>CASE STUDY 0{{ $page.project.order }}</h6>
      <h2 v-if="$page.project">{{ $page.project.title }}</h2>
      <h4 v-if="$page.project">{{ $page.project.description }}</h4>
      <h6>{{ $page.project.role }}</h6>
      <!-- <g-image v-if="$page.project" :src="$page.project.thumbnail" /> -->
    </section>
    <section class="project-hero">
      <g-image v-if="$page.project" :src="$page.project.hero" quality="100"/>
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

h2, h4, h6 {
    margin-top: 16px;
    margin-bottom: 16px;
  }

.project-hero {
  width: 100%;
  height: auto;
  & img {
    width: inherit;
  }
}

.project-content {
  max-width: 980px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 80px;
  & p {
    max-width: 80ch;
    line-height: 1.6;
    font-weight: 500;
  }
  & ul {
    max-width: 65ch;
  }
  & ol {
    max-width: 65ch;
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
    border-radius: 8px;
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
</style>