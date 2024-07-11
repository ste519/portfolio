<template>
  <div class="ibiogram-project">
    <div class="image">
      <img src="/src/assets/Ibiogram_home.png" alt="Homepage of Ibiogram" />
    </div>
    <div class="container">
      <div class="flex-center">
        <h1>Ibiogram</h1>
      </div>
      <div>
        <h1>Project Overview</h1>
        <ul>
          <li><b>Role: </b>UX Designer and UI developer</li>
          <li><b>Technologies Used: </b>Svelte, CSS, JavaScript, Figma </li>
          <li><b>Project Duration: </b></li>
          <li><b>Team Size: </b>5+</li>
          <li><b>Association: </b>The Design Lab @ University of California, San Diego</li>
        </ul>
      </div>
      <div>
        <h1>Project Description</h1>
        <p>
          Ibiogram is an innovative web tool designed to assist healthcare professionals by visualizing complex pathogen
          and antimicrobial data. This tool aims to enhance the diagnosis and treatment of infectious diseases by
          providing clear, actionable insights through intuitive user interfaces.
        </p>
      </div>
      <div>
        <h1>Challenges</h1>
        <p>
          The primary challenge in the Ibiogram project was handling the intricate and counterintuitive dataset.
          Presenting such complex information in an understandable and accessible manner required a careful blend of
          design principles, robust programming, and comprehensive user testing. Additionally, the need to integrate
          domain-specific knowledge of infectious diseases posed a unique interdisciplinary challenge.
        </p>
      </div>
      <div class="list-wrapper">
        <h1>My Contribution</h1>
        <ul>
          As a key member of the UI/UX design team, my responsibilities included:
          <li>
            Interface Redesign: I led the redesign of the original interface to enhance usability and aesthetic appeal.
            This involved rethinking the layout and interaction design to make the tool more intuitive for users with
            varying levels of technical expertise.
          </li>
          <li>
            Front-End Development: I rebuilt the entire front-end using the Svelte framework. This development was aimed
            at creating a responsive, efficient, and scalable user interface that could handle dynamic data
            visualization with ease.
          </li>
          <li>
            User Testing: I coordinated multiple rounds of user testing to gather feedback and refine the user
            experience. This process was crucial in identifying usability issues and understanding user behavior.
          </li>
        </ul>
      </div>
      <div>
        <h1>Solutions and Innovations</h1>
        <p>
          Interactive Elements: To minimize user errors and enhance navigation, I incorporated subtle design
          elements
          such as borders and box shadows on interactive buttons. These visual cues significantly reduced confusion
          and miss-clicks, making the tool more user-friendly.
        </p>
        <p>
          Iterative Design: Each iteration of the interface brought improvements in interactivity and intuitiveness.
          We
          continuously integrated user feedback into the design process, ensuring that each version of the tool
          better
          met
          the needs of its users.
        </p>
      </div>
      <div>
        <h1>Results</h1>
        <p>
          The enhancements made to Ibiogram resulted in a more engaging and intuitive tool, as evidenced by positive
          feedback from users during subsequent testing phases. The project not only improved the diagnosis and
          treatment
          processes for healthcare professionals but also demonstrated the power of multidisciplinary collaboration in
          solving real-world problems.
        </p>
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
