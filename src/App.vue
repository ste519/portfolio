<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Navbar,
    Footer
  }
};
</script>

<style scoped>
#app {
  background: url(../assets/intro_bg.jpg) no-repeat center center;
  background-size: cover;
}
</style>