<template>
  <div class="project-list">
    <hr class="line" />
    <h1 class="title" v-html="project.title" />
    <p class="description" v-html="project.description" />
    <g-link :to="project.path" class="read">Read More...</g-link>
  </div>
</template>

<script>
export default {
  props: ["project"],
};
</script>

<style lang="postcss">
.project-list{
  /* color: var(--medium);
  max-width: 980px;
  margin: 0 auto;
  padding-top: 40px;
  display: flex;
  justify-content: flex-end; */
}
</style>