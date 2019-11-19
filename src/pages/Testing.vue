<template>
  <Layout>
    <section>
      <transition name="fade-delay" appear>
        <div class="project-list">
          <h5>Latest Projects</h5>
          <ProjectListItem2
            v-for="project in $page.allProject.edges"
            :key="project.node.id"
            :project="project.node"
          />
        </div>
      </transition>
    </section>
    <section class="frames">
      <transition name="fade-delay" appear>
        <DeviceFrameMobile />
      </transition>
    </section>
    <section class="frames">
      <transition name="fade-delay" appear>
        <DeviceFrameDesktop />
      </transition>
    </section>
  </Layout>
</template>

<page-query>
query {
  allProject (sortBy: "order", order: ASC) {
    totalCount
    edges {
      node {
        id
        path
        title
        company
        website
        description
        role
        thumbnail
      }
    }
  }
}
</page-query>

<script>
import ProjectListItem2 from "~/components/ProjectListItem2.vue";
import DeviceFrameMobile from "~/components/DeviceFrameMobile.vue";
import DeviceFrameDesktop from "~/components/DeviceFrameDesktop.vue";
export default {
  metaInfo: {
    title: "test"
  },
  components: {
    ProjectListItem2,
    DeviceFrameMobile,
    DeviceFrameDesktop
  }
};
</script>

<style lang="postcss" scoped>
.frames {
 height: 100vh;
 display: flex;
 justify-content: center;
 align-items: center;
}
</style>