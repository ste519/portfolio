<template>
  <div class="informed-project project-container">
    <div class="cover-image">
      <img src="/src/assets/informed/informed-mockup.png" alt="InforMed Mockup" />
    </div>
    <div class="content">
      <section class="project-overview">
        <h1>InforMED</h1>
        <p><strong>Duration:</strong> September 2022 – December 2022</p>
        <p>As a UX Designer at the University of Michigan, I was involved in designing and developing a high-fidelity
          prototype for InforMED, a post-surgical debriefing system aimed at improving communication between attending
          and resident surgeons. My work focused on creating an intuitive and effective interface based on extensive
          user experience (UX) research.</p>
      </section>

      <section class="user-research">
        <h2>User Research</h2>
        <p>Our research methods included user interviews, surveys, and literature reviews. We identified two primary
          user groups: attending surgeons and resident surgeons. Each group had distinct needs for post-surgical
          debriefing, which we documented and compared in a detailed table. This comparison helped us tailor the system
          to address specific user requirements effectively.</p>
        <img src="@/assets/informed/1.png" alt="User needs table">
      </section>

      <section class="user-personas">
        <h2>User Personas</h2>
        <p>Based on our research, we developed four detailed user personas. These personas were crucial in understanding
          the characteristics, needs, and preferences of our target user groups. This insight guided our design
          decisions and ensured the prototype met the users' real-world requirements.</p>
        <img src="@/assets/informed/2.png" alt="User personas 1">
        <img src="@/assets/informed/3.png" alt="User personas 2">
        <img src="@/assets/informed/4.png" alt="User personas 3">
        <img src="@/assets/informed/5.png" alt="User personas 4">
      </section>

      <section class="user-flow">
        <h2>User Flow Design</h2>
        <p>We designed a comprehensive user flow diagram that accounted for the different needs of attending and
          resident surgeons. The diagram included two distinct pathways with highlighted interaction points. This clear
          visualization of the user journey ensured that both user groups could navigate the system efficiently and
          achieve a personalized experience.</p>
        <img src="@/assets/informed/6.png" alt="User flow diagram">
      </section>

      <section class="outcome">
        <h2>Outcome and Impact</h2>
        <p>The high-fidelity prototype significantly improved user testing scenarios by providing a clear, user-centered
          design. This led to better communication and efficiency in post-surgical debriefings, meeting the specific
          needs of attending and resident surgeons.</p>
        <img src="@/assets/informed/7.png" alt="High-fidelity prototype">
      </section>

      <section class="project-showcase">
        <h2>Project Showcase</h2>
        <p>For a detailed view of the project's process and outcomes, you can access the following resources:</p>
        <ul>
          <li><a
              href="https://docs.google.com/presentation/d/1mblG8Py6ep6jlYW2Ajr0XGbIKA_AGUoHq330Kt6dZnQ/edit?usp=sharing"
              target="_blank">Presentation Link</a></li>
          <li><a
              href="https://www.figma.com/file/E2qlYKDZ3Co2DnTVhXm4cQ/Wireframes?type=design&node-id=144%3A16412&t=H6IaH3nkmEeLN3Lp-1"
              target="_blank">Figma Prototype Link</a></li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "InforMedProject",
};
</script>

<style scoped>
.oasis-project {
  background: white;
}

.cover-image {
  background-color: #00a4b3;
}
</style>
