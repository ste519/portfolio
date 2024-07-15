<template>
  <div class="ibiogram-project project-container">
    <div class="cover-image">
      <img src="/src/assets/ibiogram/ibiogram-mockup.png" alt="IBiogram Mockup" />
    </div>
    <div class="content">
      <section class="overview">
        <h1>Ibiogram</h1>
        <p><b>Role: </b>UX Designer and UI developer</p>
        <p><b>Technologies Used: </b>Svelte, CSS, JavaScript, Figma </p>
        <p><b>Project Duration: </b>July 2019 - December 2021</p>
        <p><b>Association: </b>The Design Lab @ University of California, San Diego</p>
      </section>
      <section class="description">
        <h2>Project Description</h2>
        <p>
          Ibiogram is an innovative web tool designed to assist healthcare professionals by visualizing complex pathogen
          and antimicrobial data. This tool aims to enhance the diagnosis and treatment of infectious diseases by
          providing clear, actionable insights through intuitive user interfaces.
        </p>
        <img src="@/assets/ibiogram/1.png" alt="Ibiogram Dashboard">
      </section>
      <section class="challenges">
        <h2>Challenges</h2>
        <p>
          The primary challenge in the Ibiogram project was handling the intricate and counterintuitive dataset.
          Presenting such complex information in an understandable and accessible manner required a careful blend of
          design principles, robust programming, and comprehensive user testing. Additionally, the need to integrate
          domain-specific knowledge of infectious diseases posed a unique interdisciplinary challenge.
        </p>
      </section>
      <section class="contribution">
        <h2>Key Contribution</h2>
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
      </section>
      <section class="solutions">
        <h2>Solutions and Innovations</h2>
        <p>
          <b>Interactive Elements:</b> To minimize user errors and enhance navigation, I incorporated subtle design
          elements
          such as borders and box shadows on interactive buttons. These visual cues significantly reduced confusion
          and miss-clicks, making the tool more user-friendly.
        </p>
        <p>
          <b>Iterative Design:</b> Each iteration of the interface brought improvements in interactivity and
          intuitiveness.
          We
          continuously integrated user feedback into the design process, ensuring that each version of the tool
          better
          met
          the needs of its users.
        </p>
      </section>
      <section class="results">
        <h2>Results</h2>
        <p>
          The enhancements made to Ibiogram resulted in a more engaging and intuitive tool, as evidenced by positive
          feedback from users during subsequent testing phases. The project not only improved the diagnosis and
          treatment
          processes for healthcare professionals but also demonstrated the power of multidisciplinary collaboration in
          solving real-world problems.
        </p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "IbiogramProject",
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

.cover-image {
  background-color: #076a6f;
}
</style>
