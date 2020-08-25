<template>
  <div>
    <nuxt-link v-for="project in projects" :key="project.slug" to="/test"
      >{{ project.title }}
    </nuxt-link>
    <project-list-item
      v-for="project in projects"
      :key="project.slug"
      v-bind="project"
    />
    <!-- <ul></ul>
    <li v-for="project in projects" :key="project.slug">
      no <span v-if="project.mockuptype === 'mobile'">yes</span>
    </li>
    <p>pppp</p> -->
    <!-- <nuxt-content :document="page" /> -->
    <!-- <ProjectList /> -->
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const projects = await $content('projects', { deep: true })
      .only([
        'title',
        'description',
        'mockuptype',
        'mockupimage',
        'mockupimagetwo',
        'casestudy',
        'path',
        'website',
      ])
      .sortBy('order', 'asc')
      .fetch()
    return {
      projects,
    }
  },
}
</script>
