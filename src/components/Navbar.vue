<template>
  <nav class="navbar">
    <div class="container">
      <a class="navbar-brand" href="/porfolio">Qianzi Li</a>
      <ul class="navbar-menu">
        <li>
          <a href="mailto: qianzi@umich.edu" target="_blank"
            ><font-awesome-icon icon="fa-solid fa-envelope" />Email</a
          >
        </li>
        <li>
          <a href="https://github.com/ste519" target="_blank"
            ><font-awesome-icon icon="fa-brands fa-github" />Github</a
          >
        </li>
        <li>
          <a href="https://www.linkedin.com/in/qianzi-li/" target="_blank"
            ><font-awesome-icon icon="fa-brands fa-linkedin" />LinkedIn</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.navbar {
  background: #ffffff30;
  padding: 1rem 2rem;
  font-size: 18px;
}
.navbar ul,
.navbar div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2rem;
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
