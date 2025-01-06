<template>
  <div class="q-gutter-y-md">
    <q-tabs v-model="tab" no-caps class="bg-orange text-white shadow-2">
      <q-tab name="mails" label="최신" @click="newP()" />
      <q-tab name="alarms" label="인기" @click="bestP()" />
    </q-tabs>
  </div>
  <div class="q-pa-md">
    <q-list bordered separator>
      <q-item
        clickable
        v-ripple
        v-for="(p, index) in paginatedPosts"
        :key="index"
        @click="showBody(p.id)"
      >
        <q-item-section>
          <q-item-label>{{ p.title }}</q-item-label>
          <q-item-label caption>by {{ p.userId }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script setup>
import { api } from 'src/boot/axios';
import { onMounted, computed, ref } from 'vue';
import { useRouter } from 'vue-router';

//라우터 설정
const router = useRouter();

//글 목록 변수 설정
const postList = ref([]);

// 글 목록 요청
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

// 로드된 후 바로 요청
onMounted(() => {
  getPost();
});

// 특정 글 클릭 시 글 내용 보여주는 .vue 이동
const showBody = pnum => {
  router.push({ name: 'post', params: { pnum: pnum } });
};

// 페이지네이션

// 현재페이지
const currentPage = ref(1);
// 한 페이지에 보여줄 글 갯수
const pageSize = 50;

// 목록에서 보여줄 글 계산
const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * pageSize;
  const end = start + pageSize;
  return postList.value.slice(start, end);
});

// 최신 탭 클릭 시 페이지 계산
const newP = () => {
  currentPage.value = 1;
};

// 인기 탭 클릭 시 페이지 계산
const bestP = () => {
  currentPage.value = 2;
};
</script>

<style lang="scss" scoped></style>
