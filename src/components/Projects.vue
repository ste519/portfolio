<template>
  <section id="projects" class="projects">
    <div class="container">
      <a class="project" @click=goToOasis id="oasis">
        <span>Learn More</span>
      </a>
      <a class="project" href="/informed" id="informed">
        <span>Learn More</span>
      </a>
          <a class="project" href="/ibiogram" id="ibiogram">
        <span>Learn More</span>
      </a>
          <a class="project" href="/airs" id="airs">
        <span>Learn More</span>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: "Projects",
    methods: {
    goToOasis() {
      this.$router.push('/oasis'); 
    },
    goToEdit() {
      this.$router.push('/updatepackage'); 
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

.project:hover {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
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

#oasis {
  background-image: url(/src/assets/oasis_mockup.svg);
  background-position: left top;
}

#informed {
  background-image: url(/src/assets/informed_mockup.svg);
  background-position: right center;
}

#airs {
  background-image: url(/src/assets/airs_mockup.svg);
  background-position: right bottom;
}

#ibiogram {
  background-image: url(/src/assets/ibiogram_mockup.svg);
  background-position: left bottom;
}
</style>
