<template>
  <div class="fim-project project-container">
    <div class="cover-image">
      <img src="/src/assets/fim/fim-mockup.png" alt="FIM Mockup" />
    </div>
    <div class="content">
      <section class="overview">
        <h1>Front-End Development Internship at Benewake Co., Ltd.</h1>
        <p><strong>Duration:</strong> June 2023 - February 2024</p>
        <p><strong>Location:</strong> Beijing, China</p>

      </section>

      <section class="project-overview">
        <h2>Project Overview</h2>
        <p>During my time as a Front-End Development Intern at Benewake Co., Ltd., I spearheaded a comprehensive revamp
          of the existing order management system. The primary objective was to enhance the sales team's efficiency by
          streamlining workflows and automating repetitive tasks, thereby reducing their operational burden.</p>
        <h5>(Due to the confidential nature of this project, specific images and detailed technical information will not
          be disclosed.)</h5>
      </section>

      <section class="challenges-objectives">
        <h2>Challenges and Objectives</h2>
        <p>The main challenge was to design a system that could handle complex order data while being intuitive for the
          users. The system needed to be robust yet flexible enough to adapt to the dynamic requirements of the sales
          team, facilitating quick decision-making through predictive sales analytics.</p>
      </section>

      <section class="contributions">
        <h2>My Contributions</h2>
        <ul>
          <li><strong>System Design and Development:</strong> I spearheaded the project, starting from the initial
            design to the final deployment of the new order management system. This involved gathering requirements,
            designing the user interface, and implementing the frontend logic.</li>
          <li><strong>React and React Context API:</strong> I utilized React for building a responsive and dynamic user
            interface. To manage the state across the application without props drilling, I implemented React Context
            API, which simplified the state management and made the application easier to maintain.</li>
          <li><strong>Dynamic Data Visualization:</strong> To aid the sales team in visualizing order data and
            forecasts, I integrated ECharts, a powerful charting and visualization library. This allowed for real-time
            data representation and helped in uncovering insights through predictive analytics.</li>
        </ul>
      </section>

      <section class="technologies">
        <h2>Technologies Used</h2>
        <ul>
          <li><strong>React:</strong> For building the user interface with a component-based architecture.</li>
          <li><strong>React Context API:</strong> For managing the application state globally.</li>
          <li><strong>ECharts:</strong> For creating dynamic and interactive charts for data visualization.</li>
        </ul>
      </section>

      <section class="outcome">
        <h2>Outcome</h2>
        <p>The new order management system was a significant upgrade from the previous one, offering a much more
          user-friendly interface and enhanced capabilities in data handling and visualization. The system played a
          crucial role in improving the productivity of the sales team by streamlining their workflows and providing
          them with powerful tools to analyze and predict sales trends.</p>
      </section>

    </div>
  </div>
</template>

<script>
export default {
  name: "FimProject",
};
</script>

<style scoped>
.oasis-project {
  background: white;
}

.cover-image {
  background-color: #8cc1f1;
}
</style>
