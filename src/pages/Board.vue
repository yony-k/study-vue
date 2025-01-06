<template>
  <table>
    <thead>
      <tr>
        <th>userId</th>
        <th>id</th>
        <th>title</th>
        <th>body</th>
      </tr>
    </thead>
    <tbody>
      <Post v-for="p in postList" :post="p" :key="p.id"> </Post>
    </tbody>
  </table>
</template>

<script setup>
import { api } from 'src/boot/axios';
import { onMounted, ref } from 'vue';
import Post from 'src/components/Post.vue';

const postList = ref([]);

async function getPost() {
  try {
    const response = await api.get('/posts');
    postList.value = response.data;
    console.log('결과:', response.data);
  } catch (error) {
    alert('글 불러오기 실패');
    console.error('글 불러오기 에러: ', error);
  }
}

onMounted(() => {
  getPost();
});
</script>

<style lang="scss" scoped></style>
