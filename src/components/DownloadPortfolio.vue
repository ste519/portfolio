<!-- DownloadButton.vue -->
<template>
  <button @click="downloadPortfolio" class="download-button">
    下载中文作品集
  </button>
</template>

<script>
export default {
  methods: {
    downloadPortfolio() {
      // The URL of the resume file
      const url = 'src/assets/李芊姿作品集中文.pdf';

      // Create an anchor element to download the file
      const link = document.createElement('a');
      link.href = url;
      link.download = '李芊姿作品集中文.pdf';
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
  background-color: #5c5c5c;
  border: none;
  color: white;
  padding: 20px 40px;
  font-size: 36px;
  font-weight: 300;
  font-family: 'Noto Sans', san-serif;
}

.download-button:hover, .download-button:focus {
  box-shadow: 0 0 10px rgba(0,0,0, 0.5)
}
</style>
