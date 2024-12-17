<script setup lang="ts">
  import { ECheckpoint } from '@/enums';
  import type {
    TCheckpoint,
    TCheckpointAddPost,
    TCheckpointDeletePost,
    TCheckpointSwapPosts,
  } from '@/types';
  import { computed } from 'vue';

  const props = defineProps<{
    checkpoint: TCheckpoint;
  }>();

  const checkpointData = computed(() => {
    switch (props.checkpoint.type) {
      case ECheckpoint.ADD: {
        const checkpoint = props.checkpoint as TCheckpointAddPost;
        return {
          color: 'blue-lighten-4',
          header: 'Checkpoint - Add',
          text: `Added post with index ${checkpoint.index}`,
        };
      }

      case ECheckpoint.DELETE: {
        const checkpoint = props.checkpoint as TCheckpointDeletePost;
        return {
          color: 'red-lighten-4',
          header: 'Checkpoint - Delete',
          text: `Deleted post with id ${checkpoint.id} and index ${checkpoint.index}`,
        };
      }

      default: {
        const checkpoint = props.checkpoint as TCheckpointSwapPosts;
        return {
          color: 'green-lighten-4',
          header: 'Checkpoint - Swap',
          text: `Swapped posts with indexes ${checkpoint.firstIndex} and ${checkpoint.secondIndex}`,
        };
      }
    }
  });
</script>

<template>
  <v-card
    variant="elevated"
    class="m-1"
    elevation="2"
    max-width="444"
    :color="checkpointData.color"
    :title="checkpointData.header"
    :text="checkpointData.text"
  >
    <template v-slot:actions>
      <v-btn text="Rewind"></v-btn>
    </template>
  </v-card>
</template>

<style lang="scss"></style>
