<template>
  <section id="intro" class="intro">
    <div class="container">
      <h1>Hi, I am <strong>Qianzi Li,</strong></h1>
      <h2>a UX <strong>Designer</strong> and <strong>Developer</strong></h2>
      <h2>who like to design and build clean user interfaces.</h2>
      <download-resume />
    </div>
  </section>
</template>

<script>
import DownloadResume from "./DownloadResume.vue";

export default {
  name: "Intro",
  components: { DownloadResume },
};
</script>

<style scoped>
.intro .container {
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: left;
  gap: 2rem;
  font-size: 36px;
  margin: auto;
  flex-direction: column;
  width: 60%;
}

strong {
  font-size: 48px;
  font-weight: 900;
}
</style>
