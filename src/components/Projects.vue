<template>
  <section id="projects" class="projects">
    <div class="container">
      <a v-for="project in projects" :key="project.id" class="project" :id="project.id"
        @click="goToProjectView(project.path)" :style="{
        backgroundImage: `url(${project.image})`
      }">
        <span>Learn More</span>
      </a>
    </div>
  </section>
</template>

<script>
import nurseFriendImage from '@/assets/nurse-friend/nf_mockup.png';
import fimImage from '@/assets/fim/fim-mockup.png';
import airsImage from '@/assets/airs/airs-mockup.png';
import oasisImage from '@/assets/oasis/oasis-mockup.png';
import informedImage from '@/assets/informed/informed-mockup.png';
import vpetImage from '@/assets/vpet/vpet-mockup.png';
import glansisImage from '@/assets/glansis/glansis-mockup.png';
import ibiogramImage from '@/assets/ibiogram/ibiogram-mockup.png';

export default {
  name: "Projects",
  data() {
    return {
      projects: [
        { id: 'nurse-friend', path: '/nurse-friend', image: nurseFriendImage },
        { id: 'fim', path: '/fim', image: fimImage },
        { id: 'airs', path: '/airs', image: airsImage },
        { id: 'oasis', path: '/oasis', image: oasisImage },
        { id: 'informed', path: '/informed', image: informedImage },
        { id: 'vpet', path: '/vpet', image: vpetImage },
        { id: 'glansis', path: '/glansis', image: glansisImage },
        { id: 'ibiogram', path: '/ibiogram', image: ibiogramImage }
      ]
    };
  },
  methods: {
    goToProjectView(path) {
      this.$router.push(path);
    }
  }
};

</script>


<style scoped>
.projects .container {
  display: grid;
  grid-template-columns: 50% 50%;
}

.project {
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.project:hover,
.project:focus {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  z-index: 2;
}

a {
  text-decoration: none;
  color: inherit;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

a span {
  display: none;
  border-radius: 50px;
  padding: 20px 40px;
  font-size: 28px;
  background: white;
}

.project:hover span {
  display: inline-block;
}
</style>
