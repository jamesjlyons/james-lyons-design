<template>
  <div>
    <div class="post-intro">
      <h6>{{ new Date(post.createdAt).toDateString() }}</h6>
      <h2>{{ post.title }}</h2>
      <h4>{{ post.subtitle }}</h4>
    </div>
    <article class="post-content">
      <nuxt-content :document="post" />
      <p class="last-updated">
        Last updated: {{ new Date(post.updatedAt).toDateString() }}
      </p>
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const post = await $content('blog', params.slug, {
      deep: true,
    }).fetch()
    return {
      post,
    }
  },
}
</script>

<style lang="postcss">
/* TODO refactor to avoid decending specificity in nested :hover selectors */

/* stylelint-disable no-descending-specificity */
.post-intro {
  max-width: 980px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 62px;
  padding-top: 80px;
  min-height: 60vh;
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

h2,
h4,
h6 {
  margin-top: 16px;
  margin-bottom: 16px;
}

.post-content {
  max-width: 65ch;
  margin-left: auto;
  margin-right: auto;
  margin-top: 80px;
  & p {
    max-width: 65ch;
    line-height: 1.6;
    font-weight: 500;
  }
  & ul {
    color: var(--font-p);
    max-width: 65ch;
  }
  & ol {
    color: var(--font-p);
    max-width: 65ch;
  }
  & strong {
    font-weight: 700;
    color: var(--font-main);
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
  & img {
    width: 100%;
    max-width: 980px;
  }
  & .center {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }

  & iframe {
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: 18px;
    box-shadow: 0 12px 24px -9px rgba(0, 0, 0, 0.5);
  }
}

.last-updated {
  color: var(--medium);
}

/* media queries */

/* Extra Large (xl) */
@media (max-width: 1280px) {
  /* ... */
}

/* Large (lg) */
@media (max-width: 1024px) {
  .post-intro {
    padding-top: 40px;
    min-height: 60vh;
  }
}

/* Medium (md) */
@media (max-width: 768px) {
  .post-intro {
    padding-top: 24px;
    min-height: 60vh;
  }
}

/* Small (sm) */
@media (max-width: 640px) {
  .post-intro {
    padding-top: 8px;
    min-height: 60vh;
  }
}

/* XSmall (xsm) */
@media (max-width: 320px) {
  /* ... */
}
</style>
