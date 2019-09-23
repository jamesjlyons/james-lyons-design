<template>
  <Layout>
    <section class="project-intro">
      <h2 v-if="$page.project">{{ $page.project.title }}</h2>
      <h4 v-if="$page.project">{{ $page.project.description }}</h4>
      <!-- <g-image v-if="$page.project" :src="$page.project.thumbnail" /> -->
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
    content
    thumbnail
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
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.project-content {
  max-width: 980px;
  margin: auto;
  & p {
    max-width: 80ch;
  }
  & ul {
    max-width: 80ch;
  }

  & iframe {
    box-shadow: 0px 12px 24px -9px rgba(0, 0, 0, 0.5);
  }

}
</style>