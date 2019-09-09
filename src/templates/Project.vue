<template>
  <Layout>
    <h1 v-if="$page.project">{{ $page.project.title }}</h1>
    <div v-if="$page.project" v-html="$page.project.content"></div>
  </Layout>
</template>

<page-query>
query Project ($path: String!) {
  project: project (path: $path) {
    title
    description
    company
    content
  }
}
</page-query>

<script>
export default {};
</script>

<style lang="postcss">

</style>