<template>
  <a
    role="button"
    title="Cycle system/light/dark color modes"
    class="toggle-theme"
    @click="setCurrentTheme"
  >
    <transition name="from-bottom-to-bottom" mode="out-in">
      <svg
        v-if="$colorMode.preference === 'system'"
        key="system"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="currentColor"
      >
        <path
          d="M22.783,11.116l-2.46-2.46a.249.249,0,0,1-.074-.176V5A1.251,1.251,0,0,0,19,3.75H15.52a.251.251,0,0,1-.177-.073l-2.46-2.46a1.251,1.251,0,0,0-1.767,0l-2.46,2.46a.251.251,0,0,1-.177.073H5A1.252,1.252,0,0,0,3.749,5V8.48a.248.248,0,0,1-.073.176l-2.46,2.46a1.252,1.252,0,0,0,0,1.768l2.46,2.46a.249.249,0,0,1,.073.177V19A1.251,1.251,0,0,0,5,20.25h3.48a.251.251,0,0,1,.177.073l2.46,2.46a1.25,1.25,0,0,0,1.767,0l2.46-2.46a.251.251,0,0,1,.177-.073H19A1.25,1.25,0,0,0,20.249,19V15.521a.25.25,0,0,1,.074-.177l2.46-2.46A1.25,1.25,0,0,0,22.783,11.116ZM10.172,7.773a.25.25,0,0,1,.044-.445,5,5,0,1,1,0,9.344.25.25,0,0,1-.044-.444,5,5,0,0,0,0-8.455Z"
        ></path>
      </svg>

      <svg
        v-if="$colorMode.preference === 'dark'"
        key="dark"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <g clip-path="url(#clip0)">
          <path
            d="M3.695 19.45a.833.833 0 010-1.583 8.286 8.286 0 000-15.732.833.833 0 010-1.583 9.642 9.642 0 018.907 1.268A10.291 10.291 0 0116.875 10a10.26 10.26 0 01-4.262 8.158A9.531 9.531 0 016.99 20a10.404 10.404 0 01-3.294-.55zm7.943-2.644A8.564 8.564 0 0015.208 10a8.597 8.597 0 00-3.583-6.833 7.817 7.817 0 00-4.617-1.5.15.15 0 00-.088.27 9.948 9.948 0 01.154 16.01.208.208 0 00.131.375 7.887 7.887 0 004.433-1.516z"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <path d="M0 0h20v20H0z" transform="matrix(-1 0 0 1 20 0)" />
          </clipPath>
        </defs>
      </svg>

      <svg
        v-if="$colorMode.preference === 'light'"
        key="light"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          d="M12 4.645A7.355 7.355 0 1019.355 12 7.363 7.363 0 0012 4.645zm0 12.71A5.355 5.355 0 1117.355 12 5.361 5.361 0 0112 17.355zM12 3.467a1 1 0 001-1V1a1 1 0 00-2 0v1.467a1 1 0 001 1zM4.552 5.966a1 1 0 101.414-1.414L4.929 3.515a1 1 0 00-1.414 1.414l1.037 1.037zM2.467 11H1a1 1 0 000 2h1.467a1 1 0 000-2zM4.552 18.034l-1.037 1.037a1 1 0 101.414 1.414l1.037-1.037a1 1 0 10-1.414-1.414z"
        />
        <path
          d="M12 20.533a1 1 0 00-1 1V23a1 1 0 002 0v-1.467a1 1 0 00-1-1zM19.448 18.034a1 1 0 00-1.414 1.414l1.037 1.037a1 1 0 001.414-1.414l-1.037-1.037zM23 11h-1.467a1 1 0 000 2H23a1 1 0 000-2zM18.741 6.259a1 1 0 00.707-.293l1.037-1.037a1 1 0 00-1.414-1.414l-1.037 1.037a1 1 0 00.707 1.707z"
        />
      </svg>
    </transition>
  </a>
</template>

<script>
export default {
  // components: {
  //   SunIcon,
  //   MoonIcon,
  //   SystemIcon
  // },
  props: [],
  data() {
    return {
      //
    }
  },
  methods: {
    setCurrentTheme() {
      plausible('ThemeToggle')
      this.$colorMode.preference =
        this.$colorMode.preference === 'system'
          ? 'light'
          : this.$colorMode.preference === 'light'
          ? 'dark'
          : 'system'
    },
  },
}
</script>

<style lang="postcss">
.toggle-theme {
  display: flex;
  min-width: 24px;
  align-items: center;
  background-color: transparent;
  border: 0;
  color: currentColor;
  cursor: pointer;
  margin-left: 24px;
  transition-property: color;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  &:hover {
    color: var(--green);
  }
  &:focus {
    outline: none;
  }
}

.show {
  animation: show-icon 300ms forwards;
}

.hide {
  animation: hide-icon 300ms forwards;
}

@keyframes show-icon {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes hide-icon {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

.from-bottom-to-bottom-enter-active {
  opacity: 1;
  transition: opacity 300ms ease-in-out;
}

.from-bottom-to-bottom-leave-active {
  opacity: 1;
  transition: opacity 300ms ease-in-out;
}

.from-bottom-to-bottom-enter {
  opacity: 0;
}

.from-bottom-to-bottom-leave {
  opacity: 0;
}
</style>
