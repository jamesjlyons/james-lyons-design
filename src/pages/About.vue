<template>
  <Layout>
    <section>
      <h2>About me</h2>
      <h5>A brief history of my design career</h5>
      <p>
        I am a Product Designer at
        <a href="https://liferay.com" target="_blank">Liferay</a> in Southern
        California. I'm currently designing on the Analytics Cloud product team.
        In my spare time, I made a handy
        <a
          href="https://github.com/jamesjlyons/figma-liferay-text-style-switcher"
          target="_blank"
          >Figma plugin</a
        >
        to help our process. <br />
        <br />
        I also currently design and code stuff like
        <g-link to="/project/subdivide-metronome">Subdivide</g-link> and
        <g-link to="/project/lio">Lio</g-link> with
        <a href="https://tapfive.io" target="_blank">Tap Five</a>, a team of two
        who likes to make things that don't suck. <br />
        <br />
        I previously worked as the Lead Designer at
        <a href="https://grandpad.net" target="_blank">GrandPad</a>. I was the
        first designer the startup had hired in its three years of existence,
        and I did much of the front-end development for the main website and
        checkout. During my time there, I established a UX design process within
        the company by encouraging user research, idea validation, and
        interactive prototype testing. I helped raise the quality of product
        designs by establishing cohesive visual patterns across websites and
        mobile apps. I led the process of two different website redesigns,
        launched iOS and Android app redesigns, set up A/B tests, designed and
        coded emails, and did some minor branding work.
      </p>
      <br />
      <br />
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "About Me"
  }
};
</script>

<style lang="postcss">
section {
  max-width: 980px;
  margin: auto;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
a {
  color: var(--font-main);
  text-decoration: underline var(--medium);
  text-decoration-skip-ink: auto;
  transition-property: text-decoration, color;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
}
a:hover {
  color: var(--font-main);
  text-decoration: underline var(--green);
}
</style>
