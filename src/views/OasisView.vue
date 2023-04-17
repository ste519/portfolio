<template>
  <div class="oasis-project">
    <div class="image">
      <img src="/src/assets/oasis_home.svg" alt="Homepage of OASIS" />
    </div>
    <div class="container">
      <h1>Project: OASIS</h1>
      <h2>The Design Lab @ UCSD | 2020 – Now</h2>

      <div class="oasis-details">
        <ul>
          <li>
            Design and develop the user interface using Figma, React, MUI,
            Html/CSS, and JavaScript.
          </li>
          <li>Upgrade the user interface in response to user feedback.</li>
          <li>
            Collaborate with designers, developers, and scholars to deliver the
            prototype to potential clients including the RADx-rad team and the
            Lancet team.
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OasisProject",
};
</script>

<style scoped>
.oasis-project {
  background: white;
}

.container {
  padding: 2rem 20%;
  display: flex;
  gap: 2rem;
  flex-direction: column;
}
h1 {
  font-size: 24px;
  font-weight: bold;
}

.image {
  background: #212121;
  text-align: center;
  height: 500px;
  width: 100%;
}
img {
height: 100%;
}

.oasis-details ul {
  padding: 0;
  list-style-type: disc;
  list-style-position: inside;
}

.oasis-details li {
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 15px;
}
</style>
