<script setup lang="ts">
  import { useStoreMain } from '@/stores';
  import type { TPost } from '@/types';
  import VPostsPost from './VPostsPost.vue';

  const postDelete = useStoreMain().timeTravel.postDelete;
  const postMoveUp = useStoreMain().timeTravel.postMoveUp;
  const postMoveDown = useStoreMain().timeTravel.postMoveDown;

  defineProps<{
    posts: TPost[];
  }>();
</script>

<template>
  <VPostsPost
    v-for="post in posts"
    :key="post.id"
    :post="post"
    :show-move-up="posts.indexOf(post) > 0"
    :show-move-down="posts.indexOf(post) < posts.length - 1"
    @post-delete="postDelete"
    @post-move-up="postMoveUp"
    @post-move-down="postMoveDown"
  ></VPostsPost>
</template>

<style lang="scss"></style>
