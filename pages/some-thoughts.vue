<template>
  <main>
    <div class="thought-intro">
      <h3>I Have No Idea What I'm Doing</h3>
      <h6>Some thoughts about design and life</h6>
    </div>
    <div class="thought-index">
      <div
        v-for="post in blog"
        :key="post.slug"
        v-bind="post"
        class="thought-li"
      >
        <nuxt-link :to="`/thoughts/${post.slug}`" class="button"
          ><h5>{{ post.title }}</h5>
        </nuxt-link>
        <h6>{{ post.subtitle }}</h6>
        <p class="date">{{ new Date(post.createdAt).toDateString() }}</p>
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

.thought-li {
  padding: 16px 16px 16px 24px;
  margin-bottom: 48px;
  border-left: 1px solid var(--border);
  & h5 {
    margin-top: 0;
  }
  & h6 {
    color: var(--font-p);
  }
  & .date {
    color: var(--medium);
    margin-bottom: 0;
  }

  & a {
    color: var(--font-main);
    font-weight: 600;
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
