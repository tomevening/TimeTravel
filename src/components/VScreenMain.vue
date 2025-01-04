<script setup lang="ts">
  import { useStoreMain } from '@/stores';

  import VCheckpoints from './VCheckpoints.vue';
  import VPosts from './VPosts.vue';

  const storeMain = useStoreMain();
</script>

<template>
  <div class="grid grid-cols-5 gap-2">
    <div class="col-span-3 w-4/6">
      <div>
        <VPosts :posts="storeMain.posts" />
      </div>

      <v-btn
        @click="storeMain.timeTravel.postAdd"
        block
        class="m-1"
        size="large"
        prepend-icon="mdi-note"
        variant="tonal"
      >
        Add post
      </v-btn>
    </div>
    <div class="col-span-2">
      <VCheckpoints :checkpoints="storeMain.checkpoints" />
    </div>
  </div>
</template>

<style lang="scss"></style>
