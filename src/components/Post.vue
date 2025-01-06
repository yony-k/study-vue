<template>
  <tr>
    <td>{{ postDto.userId }}</td>
    <td>{{ postDto.id }}</td>
    <td>{{ postDto.title }}</td>
    <td>{{ postDto.body }}</td>
  </tr>
</template>

<script setup>
import { defineProps, ref } from 'vue';

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});

const postDto = ref({ ...props.post });
</script>

<style lang="scss" scoped></style>
