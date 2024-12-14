<script setup lang="ts">
  import TempTest from '@/components/TempTest.vue';
  import { useStoreMain } from '@/stores';
  import VCheckpoints from './VCheckpoints.vue';
  import VPosts from './VPosts.vue';
  const storeMain = useStoreMain();
</script>

<template>
  <div class="grid grid-cols-5 gap-2">
    <div class="col-span-3">
      <div>
        <VPosts :posts="storeMain.posts" />
      </div>
      <button @click="storeMain.postAdd">Add post</button>
    </div>
    <div class="col-span-2">
      <VCheckpoints :checkpoints="storeMain.checkpoints" />
    </div>
  </div>
  <TempTest />
</template>

<style lang="scss"></style>
