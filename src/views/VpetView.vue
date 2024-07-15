<template>
  <div class="vpet-project project-container">
    <div class="cover-image">
      <img src="/src/assets/vpet/vpet-mockup.png" alt="Vpet Mockup" />
    </div>
    <div class="content">
      <section class="project-overview">
        <h1>VPet Project | Digital Companion App</h1>
        <p><strong>Project Overview:</strong></p>
        <p>vPet is an innovative digital companion app designed to simulate pet ownership for individuals who cannot own
          live pets due to various constraints like housing rules, space limitations, or allergies. The app integrates
          interactive features allowing users to adopt, care for, and engage with a virtual pet through a mobile
          interface.</p>
      </section>

      <section class="development-process">
        <h2>Development Process</h2>
        <p>In collaboration with my teammate, we undertook the project from conceptualization to implementation. Our
          primary roles included:</p>
        <ul>
          <li><strong>Concept Development:</strong> Together, we brainstormed and defined the core idea of vPet, aiming
            to create a pet ownership experience that's both accessible and engaging.</li>
          <li><strong>UI/UX Design:</strong> I focused on designing a user-friendly interface that simplifies complex
            interactions. We ensured that the app's flow—from pet adoption to daily care tasks—was intuitive and
            seamless.</li>
          <li><strong>Feature Implementation:</strong> We jointly developed key features such as:
            <ul>
              <li>Account creation and pet adoption process.</li>
              <li>Interactions like feeding, grooming, and playing using in-app tools.</li>
              <li>Walking simulation with real-time tracking of walks, including route and duration.</li>
            </ul>
          </li>
        </ul>
      </section>

      <section class="challenges-solutions">
        <h2>Challenges and Solutions</h2>
        <p>One major challenge was creating an engaging yet realistic interaction system for pet care. We addressed this
          by implementing dynamic feedback mechanisms where the pet’s mood, satiety, and sanitary levels change based on
          user actions, enhancing the realism and engagement of the app.</p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "VpetProject",
};
</script>

<style scoped>
.oasis-project {
  background: white;
}

.cover-image {
  background-color: #15863d;
}
</style>
