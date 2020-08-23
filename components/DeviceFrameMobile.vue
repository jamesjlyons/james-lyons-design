<template>
  <div class="frame">
    <g-image :src="imagepath" />
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: String,
      required: true,
    },
    imagepath: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped lang="postcss">
.frame {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--body-background);
  box-shadow: 0 8px 24px -9px rgba(0, 0, 0, 0.5),
    inset 0 0 8px rgba(0, 0, 0, 0.1);
  border-radius: 24px;
  padding: 22px 10px;
}

.frame > img,
.frame > video {
  width: 240px;
  height: 480px;
  object-fit: cover;
  border: 1px solid rgba(0, 0, 0, 0.03);
  border-radius: 16px;
}
</style>
