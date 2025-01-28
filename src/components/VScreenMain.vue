<script setup lang="ts">
  import { useStoreMain } from '@/stores';

  import { useTimeTravel } from '@/composables';
  import VCheckpoints from './VCheckpoints.vue';
  import VPosts from './VPosts.vue';

  const storeMain = useStoreMain();

  const timeTravel = useTimeTravel(storeMain.posts, storeMain.checkpoints);
</script>

<template>
  <div class="mx-auto flex max-w-[80rem] justify-between p-[0.9375rem]">
    <div>
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
    <div>
      <VCheckpoints
        :checkpoints="storeMain.checkpoints"
        :rewind="timeTravel.rewind"
      />
    </div>
  </div>
</template>

<style lang="scss"></style>
