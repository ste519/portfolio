<template>
  <div class="oasis-project project-container">
    <div class="cover-image">
      <img src="/src/assets/oasis/oasis-mockup.png" alt="OASIS Mockup" />
    </div>
    <div class="content">
      <section class="project-overview">
        <h1>OASIS 1.0 & 2.0 | The Design Lab at UCSD</h1>
        <p>OASIS 1.0 was conceived as a story-sharing platform aimed at increasing real-time geospatial and hyperlocal
          situational awareness to facilitate community-level action during the COVID-19 pandemic. The design and
          development were primarily focused on user-friendly visualizations and interaction models to simplify the
          communication of complex data.</p>
      </section>

      <section class="initial-design">
        <h2>Initial Design Features (OASIS 1.0)</h2>
        <p>The homepage featured red circles varying in size to represent the density of COVID-19 infections, making the
          data visualization both intuitive and striking. The design included a critical interaction element—a red
          button that, when clicked, displayed different user scenarios for COVID-19 status: positive, negative, and
          uncertain. This approach not only streamlined the user experience but also facilitated the generation of
          customized new pages for each scenario.</p>
        <img src="@/assets/image1.jpg" alt="Initial homepage design with red circles and red button interaction">
      </section>

      <section class="refined-design">
        <h2>Refined Design Proposal (OASIS 1.0)</h2>
        <ul>
          <li>Red dots were replaced by a heatmap to prevent overlap with story markers.</li>
          <li>Stories were geotagged, allowing content display upon mouse hover, enhancing user engagement.</li>
          <li>A direct story upload feature was integrated on the homepage, significantly reducing the user's effort to
            participate.</li>
        </ul>
        <img src="@/assets/image2.jpg" alt="Heatmap and story geotagging interaction on the homepage">
      </section>

      <section class="dashboard-implementation">
        <h2>Dashboard Implementation (OASIS 1.0)</h2>
        <p>A new dashboard feature was introduced to display global COVID-19 case information, which included
          functionalities to browse, update, and publish stories, and assess daily infection risks. This addition
          significantly enhanced user interaction by integrating educational resources directly within the platform.</p>
      </section>

      <section class="transition-to-oasis2">
        <h2>Transition to OASIS 2.0</h2>
        <p>As the pandemic waned, OASIS attracted attention from significant institutions like the Advanced Technology
          Plan in the USA and the Lancet journal. With this recognition, we pivoted the platform to focus on a new user
          base—scholars and experts—and transformed it into a micro-publication sharing forum.</p>
        <img src="@/assets/image3.jpg" alt="Updated homepage design for OASIS 2.0">
      </section>

      <section class="enhanced-features">
        <h2>Enhanced Features (OASIS 2.0)</h2>
        <ul>
          <li>The homepage was redesigned to be more academic, with a focus on micro-publications. Features such as
            article creation, formatting, and tagging were introduced to enhance scholarly collaboration and
            dissemination.</li>
          <li>A Q&A forum was added, serving as a unique platform for users to engage with content creators directly,
            fostering a dynamic academic community.</li>
        </ul>
        <img src="@/assets/image4.jpg" alt="New article creation and Q&A forum features">
      </section>

      <section class="impact-and-results">
        <h2>Impact and Results</h2>
        <p>The transformation from OASIS 1.0 to 2.0 significantly broadened the platform's scope and user base. It
          facilitated not just community-level action against COVID-19 but also promoted academic exchange and
          publication on a global scale. The engagement levels on the platform saw a substantial increase, with notable
          recognition from academic publications and technology leaders.</p>
      </section>

      <section class="contributions-and-technologies">
        <h2>Contributions and Technologies Used</h2>
        <p>Directed comprehensive redesign efforts to enhance user interaction and visual communication using tools like
          Figma and Mapbox. Led the design and implementation using advanced web technologies including React and MUI.
        </p>
      </section>
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

.cover-image {
  background-color: #373737;
}

.cover-image img {
  height: 350px;
}
</style>
