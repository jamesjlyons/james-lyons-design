<template>
  <a :href="project.website" class="project-list-item">
    <div class="project-list-frame">
      <g-image :src="project.thumbnail" />
    </div>
    <div class="project-list-info">
      <div class="project-list-text">
        <h3 class="title" v-html="project.title" />
        <p class="description" v-html="project.description" />
        <!-- <g-link :to="project.path" class="read">Read More...</g-link> -->
      </div>
      <g-image
        class="project-list-arrow"
        src="~/assets/icon-arrow-right.svg"
        width="24"
        immediate="true"
      />
    </div>
  </a>
</template>

<script>
export default {
  props: {
    project: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="postcss">
.project-list-item {
  /* padding: 56px 44px 56px 0px;
  display: flex; */
  display: grid;
  grid-template-columns: repeat(2, 160px) 1fr;
  grid-template-rows: 240px;
  grid-column-gap: 0;
  grid-row-gap: 0;
  margin: 40px 0 40px 0;
  text-decoration: none;
  color: unset;
  & .project-list-info {
    /* margin-left: 44px; */
    background-color: #fafafa;
    grid-area: 1 / 2 / 2 / 4;
    margin-top: 16px;
    margin-bottom: 16px;
    padding-right: 24px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: calc(160px + 44px);
    border-radius: 16px;
    box-shadow: 0 12px 8px -9px rgba(0, 0, 0, 0);
    transition-property: box-shadow background-color;
    transition-duration: 0.1s;
    transition-timing-function: ease-in-out;

    & .project-list-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      & .title {
        margin: 0;
      }
    }
  }
  & .project-list-frame {
    grid-area: 1 / 1 / 2 / 3;
    z-index: 1;
    overflow: hidden;
    background: rgb(255, 255, 255);
    border: 4px solid rgb(235, 235, 235);
    box-shadow: 0 8px 16px -9px rgba(0, 0, 0, 0.5);
    border-radius: 42px;
    transition-property: box-shadow;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
  }
}

.project-list-item:hover {
  & .project-list-info {
    background-color: white;
    box-shadow: 0 12px 8px -9px rgba(0, 0, 0, 0.2);
  }
  & .project-list-frame {
    box-shadow: 0 12px 24px -9px rgba(0, 0, 0, 0.5);
  }
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
      box-shadow: 0 12px 8px -9px rgba(0, 0, 0, 0.2);

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
      box-shadow: 0 12px 24px -9px rgba(0, 0, 0, 0.5);
    }
  }
}
</style>
