<template>
 <div class="device-border">
     <div class="frame" >
         <g-image :src="imagepath" />
     </div>
 </div>
</template>

<script>
export default {
  props: ['project', 'imagepath']
};
</script>

<style scoped lang="postcss">
.device-border {
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: var(--light);
   box-shadow: 0px 8px 24px -9px rgba(0, 0, 0, 0.5), inset 0px 0px 8px rgba(0, 0, 0, 0.1);
   border-radius: 24px;
   padding: 22px 22px;
   max-width:720px;
   width: 80vw;
  /* height: 512px; */
   /* transform: rotateZ(16deg); */
}
/* .screen {
    width:720px; 
    height: 512px;
    background: var(--gradient);
    border: 1px solid rgba(0, 0, 0, 0.03);
    border-radius:16px;
} */

.frame {
  --n: 32;
  --d: 45;
  padding-bottom: calc(var(--n) / var(--d) * 100%);
  position: relative;
  width: 100%;
  height: 100%;
}

.frame > * {
  overflow: hidden;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.frame > img,
.frame > video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 1px solid rgba(0, 0, 0, 0.03);
  border-radius:16px;
}
    
</style>