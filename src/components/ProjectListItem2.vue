<template>
  <a :href="project.website" class="project-list-item">
    <div class="project-list-frame">
      <!-- <g-image :src="project.thumbnail" /> -->
      <div v-if="project.mockuptype === 'mobile'">
        <DeviceFrameMobile/>
      </div>
      <div v-if="project.mockuptype === 'desktop'">
        <DeviceFrameDesktop :imagepath="project.mockupimage"/>
      </div>
    </div>
   
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
import DeviceFrameDesktop from "~/components/DeviceFrameDesktop.vue";
export default {
  props: ["project", "imagepath"],
  components: {
    DeviceFrameMobile,
    DeviceFrameDesktop
  }
};
</script>

<style lang="postcss">
.project-list-item {
  width: 100%;
  min-height: 100vh;
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
   /* ... */
}
</style>