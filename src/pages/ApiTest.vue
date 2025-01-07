<script setup>
import { useAlbum } from 'src/stores/apiTest';

const { fetchAlbums, getAlbums } = useAlbum();

fetchAlbums().then(res => {
  if (res) {
    console.log('vue 결과: ', getAlbums());
  }
});
</script>

<template>
  <div></div>
</template>

<style lang="scss" scoped></style>
