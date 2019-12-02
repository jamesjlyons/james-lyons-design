<template>
  <div class="project-list-item">
    <div class="project-list-frame">
      <!-- <g-image :src="project.thumbnail" /> -->
      <div v-if="project.mockuptype === 'mobile'">
        <DeviceFrameMobile :imagepath="project.mockupimage"/>
      </div>
       <div v-if="project.mockuptype === 'mobile-two'">
        <DeviceFrameMobileTwo :imagepath="project.mockupimage" :imagepathtwo='project.mockupimagetwo' />
      </div>
      <div v-if="project.mockuptype === 'desktop'">
        <DeviceFrameDesktop :imagepath="project.mockupimage"/>
      </div>
    </div>
   
    <div class="project-list-info">
      <div class="project-list-text">
        <h3 class="title" v-html="project.title" />
        <p class="description" v-html="project.description" />
        <!-- <h6 class="roles" v-html="project.role"/> -->
        <div class="project-links">
          <g-link v-if="project.casestudy === 'yes'" :to="project.path" class="button">View Case Study</g-link>
          <g-link v-if="project.website != 'no'" :to="project.website" class="button secondary">View Website</g-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DeviceFrameMobile from "~/components/DeviceFrameMobile.vue";
import DeviceFrameMobileTwo from "~/components/DeviceFrameMobileTwo.vue";
import DeviceFrameDesktop from "~/components/DeviceFrameDesktop.vue";
export default {
  props: ["project", "imagepath", "imagepathtwo"],
  components: {
    DeviceFrameMobile,
    DeviceFrameMobileTwo,
    DeviceFrameDesktop
  }
};
</script>

<style lang="postcss" scoped>
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
    & .project-list-info {
      text-align: center;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
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
      & .project-links {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 24px;
        & .button {
          background-color: var(--green);
          color: var(--dark);
          border-radius: 8px;
          text-decoration: none;
          display: flex;
          justify-content: center;
          text-align: center;
          padding: 8px 24px;
          width: fit-content;
          margin: 8px 0px;
          box-shadow:  0px 8px 8px -8px rgba(0, 0, 0, 0.4);
          transform: translateY(0px);
          transition: transform .3s, box-shadow .3s;
        }
         & .button.secondary {
            background-color: var(--body-background);
            color: var(--font-main);
          }
          & .button:hover {
             box-shadow: 0px 8px 16px -8px rgba(0, 0, 0, 0.3);
             transform: translateY(-1px);
          }
      }
    }
    & .roles {
      margin-top: 24px;
    }
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