
<script setup>
import AboutMe from './AboutMe.vue'
</script>

<template>
  <div id="intro">
    <div class="tagline">
      <h1>Hi, I am <strong>Qianzi/Stella Li,</strong></h1>
      <h2>a <strong>Front-End Developer</strong></h2>
      <h2>and <strong>UX Designer</strong> who love to</h2>
      <h2> design and build clean user interfaces</h2>
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
  gap: 2rem;
  flex: 1 0 50%;
}

strong {
  font-size: 48px;
  font-weight: 900;
}
</style>
