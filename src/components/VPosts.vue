<script setup lang="ts">
  import type { TPost } from '@/types';
  import VPostsPost from './VPostsPost.vue';

  defineProps<{
    posts: TPost[];
    postMoveUp: (post: TPost) => void;
    postMoveDown: (post: TPost) => void;
    postDelete: (post: TPost) => void;
  }>();
</script>

<template>
  <div>
    <TransitionGroup
      name="list"
      tag="ul"
      :class="[
        'scrollbar-track-gray-200 scrollbar-thumb-gray-500',
        'scrollbar-track-rounded-full scrollbar-thumb-rounded-full',
        'h-[70vh] overflow-x-hidden overflow-y-scroll scrollbar scrollbar-w-1 scrollbar-h-[6.25rem]',
      ]"
    >
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
    </TransitionGroup>
  </div>
</template>

<style scoped lang="scss">
  .list-move {
    transition: all 0.3s ease;
  }
</style>
