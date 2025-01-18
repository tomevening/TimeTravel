<script setup lang="ts">
  import { Checkpoint } from '@/models';
  import { useStoreMain } from '@/stores';
  import VCheckpointsCheckpoint from './VCheckpointsCheckpoint.vue';

  defineProps<{
    checkpoints: Checkpoint[];
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
      <VCheckpointsCheckpoint
        v-for="checkpoint in checkpoints"
        :key="checkpoint.checkpointId"
        :checkpoint="checkpoint"
        @rewind="useStoreMain().timeTravel.rewind"
      />
    </TransitionGroup>
  </div>
</template>

<style scoped lang="scss">
  .list-move,
  .list-enter-active,
  .list-leave-active {
    transition: all 0.1s ease;
  }

  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateX(10px);
  }

  .list-leave-active {
    position: absolute;
  }
</style>
