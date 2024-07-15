<template>
  <div class="airs-project project-container">
    <div class="cover-image">
      <img src="/src/assets/airs/airs-mockup.png" alt="AIRS Mockup" />
    </div>
    <div class="content">
      <div class="portfolio-page">
        <section class="introduction">
          <h1>AI Resource Search (AIRS)</h1>
          <p>AI Resource Search (AIRS) is an innovative Flask-based web API that serves as a gateway for exploring and
            engaging with AI-related content. Designed primarily for students, researchers, and academics, AIRS offers a
            comprehensive platform to access, analyze, and interact with AI-focused information.</p>
        </section>

        <section class="project-evolution">
          <h2>Project Evolution and Roles</h2>
          <p>The initial version of AIRS was a collaborative project where I played a pivotal role in developing the
            React frontend, ensuring a seamless and intuitive user experience. The backend, managed by my peers, was
            robust, involving complex data processing techniques to gather and recommend AI-related content.</p>
          <p>Building on this foundational work, I embarked on developing a new version of the backend aimed at
            simplifying the existing complexities. This iteration was designed to improve performance and scalability by
            optimizing data handling and streamlining the recommendation processes, making the platform more efficient
            and user-friendly.</p>
        </section>

        <section class="key-features">
          <h2>Key Features</h2>
          <ul>
            <li><strong>Enhanced Article Discovery:</strong> Utilizing advanced search and filtering options, users can
              easily find articles containing specific keywords, delve into related research, and access detailed
              discussions on chosen topics.</li>
            <li><strong>Personalized Content Curation:</strong> Users can tailor their experience by setting interest
              tags and knowledge levels, which the system uses to deliver customized content recommendations.</li>
            <li><strong>Interactive User Interface:</strong> The React-based frontend facilitates a dynamic interaction
              where users can save favorite articles, revisit previous searches, and modify their user profiles with
              ease.</li>
          </ul>
        </section>

        <section class="user-interactions">
          <h2>User Interactions</h2>
          <ul>
            <li><strong>Keyword Search:</strong> Enter a keyword to receive a list of related articles.</li>
            <li><strong>Related Content:</strong> Explore articles linked through shared themes and keywords.</li>
            <li><strong>Detailed Article Views:</strong> Access comprehensive details about articles, including
              abstracts and author information.</li>
          </ul>
        </section>

        <section class="contributions">
          <h2>My Contributions</h2>
          <ul>
            <li><strong>Frontend Development:</strong> I designed and implemented the frontend using React, focusing on
              creating a responsive and accessible user interface.</li>
            <li><strong>Backend Simplification:</strong> In the newer version, I restructured the backend, employing
              streamlined methods for fetching and processing data, which included integrating simpler, more efficient
              APIs.</li>
          </ul>
        </section>

        <section class="technical-overview">
          <h2>Technical Overview</h2>
          <p>While detailed technical specifics and setup guidelines are documented in the GitHub repository, it’s
            important to note that the system utilizes tools such as Flask, React, NewsAPI, and various NLP techniques
            to deliver a rich user experience.</p>
        </section>

        <section class="demo">
          <h2>Demonstration</h2>
          <p>The video showcases how users interact with the system and the various features it offers.</p>
          <iframe src="https://drive.google.com/file/d/1PbX2J1u5CPqEkSmGoqQxYRFQz9jaKSbQ/preview" width="640"
            height="360" allow="autoplay"></iframe>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AirsProject",
};
</script>

<style scoped>
.oasis-project {
  background: white;
}

.cover-image {
  background-color: #3658d2;
}
</style>
