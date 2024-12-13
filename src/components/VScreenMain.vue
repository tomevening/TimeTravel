<script setup lang="ts">
  import { useStoreMain } from '@/stores';
  import VPosts from './VPosts.vue';
  const storeMain = useStoreMain();
</script>

<template>
  <div>
    <VPosts :posts="storeMain.posts" />
  </div>
  <button @click="storeMain.postAdd">Add post</button>
</template>

<style lang="scss"></style>
