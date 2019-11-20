<template>
 <div class="frame">
    <g-image :src="imagepath" />
 </div>
</template>

<script>
export default {
  props: ['project', 'imagepath']
};
</script>

<style scoped lang="postcss">
.frame {
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: var(--light);
   box-shadow: 0px 8px 24px -9px rgba(0, 0, 0, 0.5), inset 0px 0px 8px rgba(0, 0, 0, 0.1);
   border-radius: 24px;
   padding: 22px 10px;
   /* transform: rotateZ(16deg); */
}
/* .screen {
    width:240px;
    height: 480px;
    /* background: var(--gradient);
    border: 1px solid rgba(0, 0, 0, 0.03);
    border-radius:16px;
} */

.frame > img,
.frame > video {
    width:240px;
    height: 480px;
  object-fit: cover;
  border: 1px solid rgba(0, 0, 0, 0.03);
  border-radius:16px;
}
    
</style>