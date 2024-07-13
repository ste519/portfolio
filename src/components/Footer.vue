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
  background-color: #fff;
  color: #000;
  display: flex;
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: center;
}
</style>
