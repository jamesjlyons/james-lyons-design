<template>
  <div class="project-list-item">
    <div class="project-list-frame">
      <div v-if="mockuptype === 'mobile'">
        <DeviceFrameMobile :mockupimage="mockupimage" />
      </div>
      <div v-if="mockuptype === 'mobile-two'">
        <DeviceFrameMobileTwo
          :mockupimage="mockupimage"
          :mockupimagetwo="mockupimagetwo"
        />
      </div>
      <div v-if="mockuptype === 'desktop'">
        <DeviceFrameDesktop :mockupimage="mockupimage" />
      </div>
    </div>

    <div class="project-list-info">
      <div class="project-list-text">
        <h3 class="title">
          {{ title }}
        </h3>
        <p class="description">
          {{ description }}
        </p>
        <!-- <h6 class="roles" v-html="project.role"/> -->
        <div class="project-links">
          <nuxt-link
            v-if="casestudy === 'yes'"
            :to="`/projects/${slug}`"
            class="button"
            >View Case Study</nuxt-link
          >
          <a
            v-if="website != 'no'"
            :href="`${website}`"
            class="button secondary"
            >View Website</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'slug',
    'mockuptype',
    'mockupimage',
    'mockupimagetwo',
    'title',
    'description',
    'website',
    'casestudy',
    'project',
    // 'imagepath',
    // 'imagepathtwo',
  ],
  // data() {
  //   return {
  //     item: '',
  //   }
  // },
}
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
        margin: 8px 0;
        box-shadow: 0 8px 8px -8px rgba(0, 0, 0, 0.4);
        transform: translateY(0);
        transition: transform 0.3s, box-shadow 0.3s;
      }
      & .button.secondary {
        background-color: var(--body-background);
        color: var(--font-main);
      }
      & .button:hover {
        box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.3);
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
