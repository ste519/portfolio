<!-- DownloadButton.vue -->
<template>
  <button @click="downloadResume" class="download-button">
    Download Resume
  </button>
</template>

<script>
export default {
  methods: {
    downloadResume() {
      // The URL of the resume file
      const resumeUrl = 'https://drive.google.com/uc?export=download&id=1jCLBcofz0hSdFA4YbQZmzOpClA1JzQA3';

      // Create an anchor element to download the file
      const link = document.createElement('a');
      link.href = resumeUrl;
      link.download = 'resume.pdf'; // The file name for the downloaded file
      link.target = '_blank';
      link.style.display = 'none';

      // Add the link to the DOM, click it to download, and remove it afterward
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
  },
};
</script>

<style scoped>
.download-button {
    background-color: white;
    border: none;
    color: black;
    padding: 20px 40px;
    border-radius: 50px;
    font-size: 36px;
    font-weight: 300;
    font-family: 'Noto Sans', san-serif;
}
</style>
