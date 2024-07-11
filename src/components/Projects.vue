<template>
  <section id="projects" class="projects">
    <div class="container">
      <a v-for="project in projects" :key="project.id" class="project" :id="project.id"
        @click="goToProjectView(project.path)" :style="{
        backgroundImage: `url(${project.image})`,
        backgroundPosition: project.position
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
        { id: 'nurse-friend', path: '/nurse-friend', image: null, position: null },
        { id: 'fim', path: '/fim', image: null, position: null },
        { id: 'airs', path: '/airs', image: '/src/assets/airs_mockup.svg', position: 'right bottom' },
        { id: 'oasis', path: '/oasis', image: '/src/assets/oasis_mockup.svg', position: 'left top' },
        { id: 'vpet', path: '/vpet', image: null, position: null },
        { id: 'glansis', path: '/glansis', image: null, position: null },
        { id: 'informed', path: '/informed', image: '/src/assets/informed_mockup.svg', position: 'top right' },
        { id: 'ibiogram', path: '/ibiogram', image: '/src/assets/ibiogram_mockup.svg', position: 'left bottom' }
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
