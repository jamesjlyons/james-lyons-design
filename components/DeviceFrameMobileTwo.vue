<template>
  <div class="mockup-row">
    <div class="frame">
      <img :src="mockupimage" />
    </div>
    <div class="frame">
      <img :src="mockupimagetwo" />
    </div>
  </div>
</template>

<script>
export default {
  props: [
    // 'mockuptype',
    'mockupimage',
    'mockupimagetwo',
    // 'title',
    // 'description',
    // 'website',
    // 'casestudy',
    // 'project',
  ],
}
</script>

<style scoped lang="postcss">
.mockup-row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.frame {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--body-background);
  box-shadow: 0 8px 24px -9px rgba(0, 0, 0, 0.5),
    inset 0 0 8px rgba(0, 0, 0, 0.1);
  border-radius: 24px;
  padding: 22px 10px;
  margin-left: 40px;
  margin-right: 40px;
  margin-top: 40px;
}

.frame > img,
.frame > video {
  width: 249.75px;
  height: 541px;
  object-fit: cover;
  border: 1px solid rgba(0, 0, 0, 0.03);
  border-radius: 16px;
}

.frame:nth-of-type(2) > img,
.frame:nth-of-type(2) > video {
  width: 240px;
  height: 480px;
  object-fit: cover;
  border: 1px solid rgba(0, 0, 0, 0.03);
  border-radius: 16px;
}
</style>
