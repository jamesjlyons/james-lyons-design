<template>
  <main>
    <div class="thought-intro">
      <h3>I Have No Idea What I'm Doing</h3>
      <h6>Some thoughts about design and life</h6>
    </div>
    <div class="thought-index">
      <div v-for="post in blog" :key="post.slug" v-bind="post">
        <h5>{{ post.title }}</h5>
        <h6>{{ new Date(post.createdAt).toDateString() }}</h6>
        <p>{{ post.description }}</p>
        <nuxt-link :to="`/thoughts/${post.slug}`" class="button"
          >Read
        </nuxt-link>
      </div>
      <div class="empty-state">
        <h4>Doesn't look like anything to me.</h4>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const blog = await $content('blog', params.slug, {
      deep: true,
    })
      .sortBy('createdAt', 'asc')
      .fetch()
    return {
      blog,
    }
  },
}
</script>

<style lang="postcss">
.thought-intro {
  max-width: 980px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 62px;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & img {
    margin-top: 80px;
    margin-bottom: 80px;
  }
  & h6 {
    color: var(--medium);
  }
}

.thought-index {
  /* max-width: 65ch;
  margin-left: auto;
  margin-right: auto;
  margin-top: 80px; */
  max-width: 980px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.empty-state {
  opacity: 0.3;
}

/* media queries */

/* Extra Large (xl) */
@media (max-width: 1280px) {
  /* doesn't look like anything to me */
}

/* Large (lg) */
@media (max-width: 1024px) {
  /* doesn't look like anything to me */
}

/* Medium (md) */
@media (max-width: 768px) {
  .thought-intro {
    padding-top: 40px;
  }
}

/* Small (sm) */
@media (max-width: 640px) {
  /* doesn't look like anything to me */
}

/* XSmall (xsm) */
@media (max-width: 320px) {
  /* doesn't look like anything to me */
}
</style>
