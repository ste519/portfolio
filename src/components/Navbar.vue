<script setup>
import DownloadButton from './DownloadButton.vue';
</script>

<template>
  <nav class="navbar">
    <div class="container">

      <a class="navbar-brand" aria-label="home" href="/portfolio/"><img src="/src/assets/logo.svg"></a>
      <ul class="navbar-menu">
        <li>
          <a href="mailto: qianzi@umich.edu" target="_blank"><font-awesome-icon icon="fa-solid fa-envelope" />Email</a>
        </li>
        <li>
          <a href="https://github.com/ste519" target="_blank"><font-awesome-icon icon="fa-brands fa-github" />Github</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/qianzi-li/" target="_blank"><font-awesome-icon
              icon="fa-brands fa-linkedin" />LinkedIn</a>
        </li>
        <li>
          <font-awesome-icon :icon="['fas', 'file-arrow-down']" />
          <DownloadButton text="Resume" path="qianzili_resume_0125.pdf" filename="qianzi_resume.pdf" />
        </li>
        <li>
          <font-awesome-icon :icon="['fas', 'file-arrow-down']" />
          <DownloadButton text="简历" path="李芊姿简历.pdf" filename="李芊姿简历.pdf" />
        </li>
        <li>
          <font-awesome-icon :icon="['fas', 'file-arrow-down']" />
          <DownloadButton text="作品集" path="李芊姿作品集中文.pdf" filename="李芊姿作品集中文.pdf" />
        </li>
      </ul>
    </div>
  </nav>
</template>


<style scoped>
.navbar {
  font-size: 18px;
  background: white;
  height: 60px;
}

.navbar ul,
.navbar div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2rem;
  align-items: center;
  padding: 0 1rem 0 2rem;
  height: 100%;
}

img {
  width: 50px;
}

.navbar a {
  text-decoration: none;
  color: inherit;
  font-weight: 600;
}

.navbar svg {
  margin-right: 5px;
}
</style>
