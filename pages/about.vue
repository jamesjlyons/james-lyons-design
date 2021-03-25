<template>
  <section class="about-me">
    <h3>About me</h3>
    <h6>What I do and what I've done</h6>
    <br /><br />
    <p>
      I am a Sr. Product Designer and Front-End Developer at
      <a href="https://soberlink.com" target="_blank">Soberlink</a> in Southern
      California.<br />
      <br />
      I also currently design and code stuff like
      <nuxt-link to="/projects/subdivide">Subdivide</nuxt-link> and
      <nuxt-link to="/projects/lio">Lio</nuxt-link> with
      <a href="https://tapfive.io" target="_blank">Tap Five</a>, a team of two
      who like to make things that don't suck. <br />
      <br />

      Before this was a Product Designer at
      <a href="https://liferay.com" target="_blank">Liferay</a>. I worked on the
      Analytics Cloud product team. In my spare time, I made a handy
      <a
        href="https://github.com/jamesjlyons/figma-liferay-text-style-switcher"
        target="_blank"
        >Figma plugin</a
      >
      to help our process there. <br />
      <br />
      I previously worked as the Lead Designer at
      <a href="https://grandpad.net" target="_blank">GrandPad</a>. I was the
      first designer the startup had hired in its three years of existence, and
      I did much of the front-end development for the main website and checkout.
      During my time there, I established a UX design process within the company
      by encouraging user research, idea validation, and interactive prototype
      testing. I helped raise the quality of product designs by establishing
      cohesive visual patterns across websites and mobile apps. I led the
      process of two different website redesigns, launched iOS and Android app
      redesigns, set up A/B tests, designed and coded emails, and did some minor
      branding work. <br /><br />
      I graduated from Cal State Fullerton with a BFA in Graphic Design.<br /><br />
      You can find me on
      <a href="https://dribbble.com/jamesjlyons" target="_blank">Dribbble</a>
      and <a href="https://github.com/jamesjlyons" target="_blank">GitHub</a>,
      or you can reach out and
      <a href="mailto:hello@jameslyons.design" target="_blank">say hello</a>.
    </p>
    <br />
    <br />
  </section>
</template>

<script>
export default {
  metaInfo: {
    title: 'About Me',
  },
}
</script>

<style lang="postcss">
.about-me {
  max-width: 980px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 62px;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

  & h6 {
    color: var(--medium);
  }
}

@media (min-width: 640px) {
  .about-me {
    padding-top: 80px;
  }
}
</style>
