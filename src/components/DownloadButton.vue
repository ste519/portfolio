<!-- DownloadButton.vue -->
<script setup>
const props = defineProps({
  text: String,
  path: String,
  filename: String
})

const downloadFile = () => {
  const link = document.createElement('a');
  link.href = `/portfolio/${props.path}`;
  link.download = props.filename;
  link.target = '_blank';
  link.style.display = 'none';

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
</script>

<template>
  <button @click="downloadFile" class="download-button">
    {{ text }}
  </button>
</template>

<style scoped>
.download-button {
  font-size: 18px;
  appearance: none;
  border: none;
  background: none;
  color: inherit;
  font-weight: 600;
  font-family: inherit;
  padding: 0;
}
</style>
