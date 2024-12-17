<script setup lang="ts">
  // import type { TCheckpoint } from '@/types';
  import { Checkpoint } from '@/models';
  import VCheckpointCheckpoints from './VCheckpointCheckpoints.vue';

  defineProps<{
    checkpoints: Checkpoint[];
  }>();
</script>

<template>
  <div>
    <VCheckpointCheckpoints
      v-for="checkpoint in checkpoints"
      :key="checkpoint.checkpointId"
      :checkpoint="checkpoint"
    />
  </div>
</template>

<style lang="scss"></style>
