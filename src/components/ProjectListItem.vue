<template>
  <div class="project-list-item">
    <div class="project-list-frame">
      <g-image :src="project.thumbnail" />
    </div>
    <div class="project-list-text">
      <h3 class="title" v-html="project.title" />
      <p class="description" v-html="project.description" />
      <g-link :to="project.path" class="read">Read More...</g-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["project"]
};
</script>

<style lang="postcss">
.project-list-item {
  padding: 56px 44px 56px 0px;
  display: flex;
  & .project-list-text {
    margin-left: 44px;
  }
  & .project-list-frame {
    height: 300px;
    width: 400px;
    overflow: hidden;
    background: rgb(255, 255, 255);
    border: 4px solid rgb(235, 235, 235);
    box-shadow: 0px 12px 24px -9px rgba(0, 0, 0, 0.5);
    border-radius: 42px;
  }
}
</style>