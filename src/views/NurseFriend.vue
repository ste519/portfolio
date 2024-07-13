<template>
  <div class="nurse-friend-project">
    <div class="cover-image">
      <img src="/src/assets/nurse-friend/nf_mockup.png" alt="NurseFriend Mockup" />
    </div>
    <div class="content">
      <div>
        <h1>NurseFriend: Helping Patients and Caregivers Navigate Medical Crises</h1>
        <h2>Project Overview:</h2>
        <p>
          Nurse Friend is a mobile app where a family caregiver and their loved one who is hospitalized can receive
          <strong>emotional and educational content and support</strong> customized to address the key moments in the
          patient’s medical journey and recovery.
        </p>
        <p>
          By informing the caregivers and patients of key questions to ask and actions to take, we
          <strong>empower</strong> the patient and the caregiver to take care of themselves during this experience and
          <strong>reduce the fear and uncertainty</strong> faced during medical crises or hospitalizations.
        </p>
      </div>

      <div>
        <h2>Client</h2>
        <p>
          NurseFriend is a project proposed by the University of Michigan School of Nursing. The School of Nursing works
          to advance health for all by educating and developing nurses and other professionals as leaders, generating
          and applying knowledge, and serving individuals, communities, and populations.
        </p>
      </div>

      <div>
        <h2>Team</h2>
        <p>
          Qianzi (Stella) Li, Maryam Namakforoosh, Spandan Sharma, Jinjie Xu, Iris Yuning Ye
        </p>
      </div>

      <div>
        <h2>Timeline</h2>
        <p>
          January 24th - April 24th (4 months)
        </p>
      </div>

      <div>
        <h2>UX Methods Used</h2>
        <ul>
          <li>Literary Research</li>
          <li>User Research Interviews</li>
          <li>Wireframing</li>
          <li>Prototyping</li>
        </ul>
      </div>

      <div>
        <h2>Technologies Used</h2>
        <ul>
          <li>React Native</li>
          <li>MongoDB</li>
          <li>Express.js</li>
          <li>Node.js</li>
          <li>Firebase</li>
        </ul>
      </div>

      <div>
        <h2>Project Background</h2>
        <h3>Problem Statement</h3>
        <p>Caregivers often experience psychological distress during a critical care hospitalization. This can:</p>
        <ul>
          <li>Compromise their ability to effectively function and make decisions</li>
          <li>Affect their ability to engage with the clinical team</li>
          <li>Cause short-term or long-term anxiety and depression</li>
          <li>Influence their ability to manage their patient’s condition after discharge</li>
        </ul>
        <p>Factors such as involvement in decision-making, caregiver burden, lack of information, and dissatisfaction
          with staff communication are some of the influencing elements we sought out address</p>

        <h3>Project Goals</h3>
        <p>Effectively develop an application that</p>
        <ul>
          <li>Assesses the stage of crisis the user is in</li>
          <li>Provides informational and emotional support tailored for user in key moments during medical crisis to
            reduce fear and uncertainty</li>
          <li>Tracks a patient’s recovery process through guided journaling to give the user an emotional outlet.</li>
        </ul>
        <p>These 3 project goals help in making the application a reflective space for the user so that they can learn
          from past situations to draw insights and develop strategies for coping with similar situations in the future.
        </p>
      </div>

      <div>
        <h2>UX Research and UX Design</h2>
        <p>
          During the research phase, our team seeked to familiarize itself with the problem through literary research,
          UX interviews through a webinar for veterans, the client’s project proposal documents and a thorough analysis
          of product feature requirements. Additionally, the client had provided us with low fidelity wireframes that we
          then modified based on our findings and meetings with the client.
        </p>

        <h3>Low Fidelity Wireframes</h3>
        <img src='/src/assets/nurse-friend/nf-lofi.png' alt="Low Fidelity Wireframes" />

        <h3>High Fidelity Wireframes</h3>
        <img src="/src/assets/nurse-friend/nf-hifi.png" alt="High Fidelity Wireframes" />
      </div>

      <div>
        <h2>Project Development and Technology</h2>
        <p>
          We decided to use the MERN stack—MongoDB, Express.js, React, and Node.js—for our project due to its
          flexibility, efficiency, and scalability. Additionally, we hosted our database on Firebase.
        </p>
        <img src="/src/assets/nurse-friend/nf-MERN.png" alt="Project Development and Technology" />
        <p>
          Throughout the development process, we used Agile methodologies, a dynamic approach that allowed us to adapt
          and respond to changing requirements efficiently. We built the project through four sprints that lasted
          between 2-4 weeks. We used the use cases established with the client to determine tasks and managed tasks and
          responsibilities using JIRA.
        </p>
      </div>

      <div>
        <h2>Our Solution</h2>
        <ul>
          <li>Assessment of Crisis
            <ul>
              <li>Quickly identifies users' stage of crisis through targeted questions</li>
              <li>Prioritizes users' top concerns to provide a focused starting point for app use.</li>
            </ul>
          </li>
          <li>Healthcare Journey Timeline:
            <ul>
              <li>Offers a look at past, present, and planned healthcare steps.</li>
              <li>Allows users to revisit and save previously accessed content for easy future reference.</li>
            </ul>
          </li>
          <li>Guided Journal:
            <ul>
              <li>Provides a personal space for reflective writing and guided entries to navigate common emotional
                challenges.</li>
              <li>Helps users track their thoughts, experiences, and progress over time in a structured manner.</li>
            </ul>
          </li>
          <li>Customized Resources Delivery:
            <ul>
              <li>Delivers personalized content based on the user’s specific stage of crisis, focusing on immediate
                needs and concerns.</li>
              <li>Categorizes resources into self-care, communication strategies, and future planning for comprehensive
                support.</li>
            </ul>
          </li>
        </ul>
      </div>
      <div>
        <h2>Project Videos</h2>
        <div>
          <iframe src="https://www.youtube.com/embed/G-Usoj0RFAs?rel=0" frameborder="0" allowfullscreen></iframe>
          <p>NurseFriend project overview</p>
        </div>
        <div>
          <iframe src="https://www.youtube.com/embed/G-Usoj0RFAs?rel=0" frameborder="0" allowfullscreen></iframe>
          <p>NurseFriend project demo</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NurseFriendProject",
};
</script>

<style scoped>
.nurse-friend-project {
  background: white;
}

.cover-image {
  background-color: #E0EFFC;
}
</style>
