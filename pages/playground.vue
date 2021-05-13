<template>
  <section class="playground">
    <h3>Playground</h3>
    <h6>Stuff made for fun</h6>
    <br /><br />
    <div class="playground-list">
      <a href="https://etch.jameslyons.design" class="frame">
        <div class="frame-img frame-etch">
          <img src="~/assets/etch.svg" width="200" immediate="true" />
        </div>
        <div class="frame-link">Etch</div>
      </a>
      <a href="https://inkstream.jameslyons.design/" class="frame">
        <div class="frame-img frame-inkstream">
          <img src="~/assets/inkstream.svg" width="40" immediate="true" />
        </div>
        <div class="frame-link">InkStream</div>
      </a>
      <div class="frame more">
        <div class="frame-img"></div>
        <div class="frame-link">more to come</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  metaInfo: {
    title: 'Playground',
  },
}
</script>

<style lang="postcss" scoped>
.playground {
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

.playground-list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.frame {
  margin-right: 48px;
  margin-bottom: 48px;
  display: grid;
  grid-template-columns: 196px;
  grid-template-rows: 140px repeat(2, 56px);
  grid-column-gap: 0;
  grid-row-gap: 0;
}

.frame-img {
  grid-area: 1 / 1 / 3 / 2;
  z-index: 1;
  overflow: hidden;
  background: var(--body-background);
  border: 4px solid var(--border);
  box-shadow: 0 12px 24px -9px rgba(0, 0, 0, 0.5);
  border-radius: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: box-shadow 300ms ease, transform 300ms ease;
}

.frame-link {
  grid-area: 2 / 1 / 4 / 2;
  width: 196px;
  padding-left: 4px;
  padding-right: 4px;
  padding-bottom: 15px;
  background: var(--frame-links);
  border-radius: 0 0 16px 16px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: flex-end;
}

a.frame:hover {
  & .frame-img {
    box-shadow: 0 18px 32px -9px rgba(0, 0, 0, 0.9);
    transform: translateY(-1px);
  }
}

.more {
  opacity: 0.3;
}

.frame-etch {
  background: #363e4a;
}

.frame-inkstream {
  background: #121217;
}

/* Small (sm) */
@media (max-width: 640px) {
  .playground-list {
    justify-content: center;
  }
}

@media (min-width: 640px) {
  .about-me {
    padding-top: 80px;
  }
}
</style>
