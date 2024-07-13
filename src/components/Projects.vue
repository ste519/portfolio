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
export default {
  name: "Projects",
  data() {
    return {
      projects: [
        { id: 'nurse-friend', path: '/nurse-friend', image: '/src/assets/nurse-friend/nf_mockup.png' },
        { id: 'fim', path: '/fim', image: 'src/assets/fim-mockup.png' },
        { id: 'airs', path: '/airs', image: '/src/assets/airs/airs-mockup.png' },
        { id: 'oasis', path: '/oasis', image: '/src/assets/oasis/oasis-mockup.png' },
        { id: 'informed', path: '/informed', image: '/src/assets/informed/informed-mockup.png' },
        { id: 'vpet', path: '/vpet', image: '/src/assets/vpet/vpet-mockup.png' },
        { id: 'glansis', path: '/glansis', image: '/src/assets/glansis/glansis-mockup.png', position: 'center center' },
        { id: 'ibiogram', path: '/ibiogram', image: '/src/assets/ibiogram/ibiogram-mockup.png' }
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
  height: 500px;
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
