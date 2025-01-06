<template>
  <div>{{ post.title }}</div>
  <div>{{ post.body }}</div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { api } from 'src/boot/axios';

//쿼리파라미터로 받은 고유번호 받기
const props = defineProps({
  pnum: {
    type: Number,
    required: true,
  },
});

// 특정 글 요청시 받을 변수
const post = ref({});

// 특정 글 요청
async function getBody(pnum) {
  try {
    const response = await api.get(`/posts/${pnum}`);
    post.value = response.data;
    console.log('결과:', post.value);
  } catch (error) {
    alert('글 불러오기 실패');
    console.error('글 불러오기 에러: ', error);
  }
}

// 로드된 후 바로 요청
onMounted(() => {
  getBody(props.pnum);
});
</script>

<style lang="scss" scoped></style>
