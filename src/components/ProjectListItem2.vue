<template>
  <a :href="project.website" class="project-list-item">
    <div class="project-list-frame">
      <g-image :src="project.thumbnail" />
    </div>
    <DeviceFrameMobile/>
    <div class="project-list-info">
      <div class="project-list-text">
        <h3 class="title" v-html="project.title" />
        <p class="description" v-html="project.description" />
        <g-link :to="project.path" class="read">View Project</g-link>
      </div>
    </div>
  </a>
</template>

<script>
import DeviceFrameMobile from "~/components/DeviceFrameMobile.vue";
export default {
  props: ["project"]
};
</script>

<style lang="postcss">
.project-list-item {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px 0 40px 0;
  text-decoration: none;
  color: unset;
  }

/* Small (sm) */
@media (min-width: 640px) {
  /* ... */
}

/* Medium (md) */
@media (max-width: 768px) {
  .project-list-item {
    grid-template-columns: 320px;
    grid-template-rows: repeat(2, 120px) 1fr;
    /* margin: 40px 0 40px 0; */
    & .project-list-info {
      grid-area: 2 / 1 / 4 / 2;

      margin-top: 16px;
      margin-bottom: 16px;
      padding-left: 0;
      padding-right: 0;
      padding-bottom: 24px;
      padding-top: calc(120px + 24px);
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;

      background-color: white;
      box-shadow: 0px 12px 8px -9px rgba(0, 0, 0, 0.2);

      & .project-list-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-width: 240px;
        text-align: center;
        & .title {
          margin: 0;
        }
      }

      & .project-list-arrow {
        display: none;
      }
    }
    & .project-list-frame {
      grid-area: 1 / 1 / 3 / 2;
      box-shadow: 0px 12px 24px -9px rgba(0, 0, 0, 0.5);
    }
  }
}
</style>