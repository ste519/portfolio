<template>
  <footer class="footer">
    <div class="container">
      <p>&copy; {{ currentYear }} Qianzi Li. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
.footer {
  background: #ffffff30;
  padding: 1rem 2rem;
}
</style>
