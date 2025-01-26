<script setup lang="ts">
  import { useStoreMain } from '@/stores';

  import { useTimeTravel } from '@/composables';
  import VCheckpoints from './VCheckpoints.vue';
  import VPosts from './VPosts.vue';

  const storeMain = useStoreMain();

  const timeTravel = useTimeTravel(storeMain.posts, storeMain.checkpoints);
</script>

<template>
  <div class="grid grid-cols-5 gap-2">
    <div class="col-span-3 w-4/6">
      <div>
        <VPosts
          :posts="storeMain.posts"
          :post-move-up="timeTravel.postMoveUp"
          :post-move-down="timeTravel.postMoveDown"
          :post-delete="timeTravel.postDelete"
        />
      </div>

      <v-btn
        @click="timeTravel.postAdd"
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
      <VCheckpoints
        :checkpoints="storeMain.checkpoints"
        :rewind="timeTravel.rewind"
      />
    </div>
  </div>
</template>

<style lang="scss"></style>
