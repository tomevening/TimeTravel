<script setup lang="ts">
  import {
    Checkpoint,
    CheckpointAddPost,
    CheckpointDeletePost,
  } from '@/models';
  import { computed } from 'vue';

  const props = defineProps<{
    checkpoint: Checkpoint;
  }>();

  const color = computed(() => {
    if (props.checkpoint instanceof CheckpointAddPost) return 'blue-lighten-4';
    if (props.checkpoint instanceof CheckpointDeletePost)
      return 'red-lighten-4';
    return 'green-lighten-4';
  });

  const header = computed(() => {
    if (props.checkpoint instanceof CheckpointAddPost)
      return 'Checkpoint - Add';
    if (props.checkpoint instanceof CheckpointDeletePost)
      return 'Checkpoint - Delete';
    return 'Checkpoint - Swap';
  });

  const icon = computed(() => {
    if (props.checkpoint instanceof CheckpointAddPost) return 'mdi-plus-circle';
    if (props.checkpoint instanceof CheckpointDeletePost)
      return 'mdi-delete-empty';
    return 'mdi-swap-vertical-variant';
  });

  const emit = defineEmits<{
    (event: 'rewind', checkpoint: Checkpoint): void;
  }>();
</script>

<template>
  <v-card
    variant="elevated"
    class="m-1"
    elevation="2"
    max-width="100%"
    :prepend-icon="icon"
    :color="color"
    :title="header"
    :text="checkpoint.description"
  >
    <template v-slot:actions>
      <v-btn
        @click="emit('rewind', checkpoint)"
        text="Rewind"
      ></v-btn>
    </template>
  </v-card>
</template>

<style lang="scss"></style>
