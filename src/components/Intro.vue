<script setup>
import AboutMe from './AboutMe.vue'
</script>

<template>
  <div id="intro">
    <div class="tagline">
      <h1>Hi, I am <strong>Qianzi/Stella Li,</strong></h1>
      <h2>a <strong>Front-End Developer</strong></h2>
      <h2>and <strong>UX Designer</strong> who love to</h2>
      <h2> design and build clean user interfaces.</h2>
    </div>
    <about-me />
  </div>
</template>

<style scoped>
#intro {
  display: flex;
  justify-content: center;
  font-size: 32px;
}

.tagline {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 4rem 2rem 5%;
  gap: 1rem;
  flex: 1 0 50%;
  background: linear-gradient(271deg, #f7e4b3, #d0edb3, #afd2f6, #f6c1dd);
  background-size: 800% 800%;

  -webkit-animation: AnimationName 37s ease infinite;
  -moz-animation: AnimationName 37s ease infinite;
  animation: AnimationName 37s ease infinite;
}

@-webkit-keyframes AnimationName {
  0% {
    background-position: 0% 50%
  }

  50% {
    background-position: 100% 50%
  }

  100% {
    background-position: 0% 50%
  }
}

@-moz-keyframes AnimationName {
  0% {
    background-position: 0% 50%
  }

  50% {
    background-position: 100% 50%
  }

  100% {
    background-position: 0% 50%
  }
}

@keyframes AnimationName {
  0% {
    background-position: 0% 50%
  }

  50% {
    background-position: 100% 50%
  }

  100% {
    background-position: 0% 50%
  }
}

strong {
  font-size: 48px;
  font-weight: 900;
}
</style>
