<template>
  <section id="intro" class="intro">
    <div class="container">
      <h1>Hi, I am <strong>Qianzi(Stella) Li,</strong></h1>
      <h2>a UX <strong>Designer</strong> and <strong>Developer</strong></h2>
      <h2>who like to design and build clean user interfaces.</h2>
      <download-resume />
      <download-resume-chinese />
      <download-portfolio />
    </div>
  </section>
</template>

<script>
import DownloadPortfolio from './DownloadPortfolio.vue';
import DownloadResume from "./DownloadResume.vue";
import DownloadResumeChinese from './DownloadResumeChinese.vue';

export default {
  name: "Intro",
  components: { DownloadResume, DownloadPortfolio, DownloadResumeChinese },
};
</script>

<style scoped>
.intro .container {
  height: 100%;
  display: flex;
  justify-content: center;
  gap: 2rem;
  font-size: 36px;
  margin: auto;
  flex-direction: column;
  max-width: 800px;
  padding: 2rem 0;
}

strong {
  font-size: 48px;
  font-weight: 900;
}
</style>
