<script setup lang="ts">
  import type { TPost } from '@/types';

  defineProps<{
    post: TPost;
    showMoveUp: boolean;
    showMoveDown: boolean;
  }>();

  const emit = defineEmits<{
    (event: 'post-delete', post: TPost): void;
    (event: 'post-move-up', post: TPost): void;
    (event: 'post-move-down', post: TPost): void;
  }>();
</script>

<template>
  <div>
    <v-card
      variant="elevated"
      class="mx-1 mb-1"
      elevation="1"
      color="blue-grey-darken-1"
      max-width="500%"
      prepend-icon="mdi-note"
      width="27rem"
      :title="post.text"
    >
      <template v-slot:actions>
        <v-btn
          @click="emit('post-delete', post)"
          text="Delete"
        ></v-btn>
        <v-btn
          :disabled="!showMoveUp"
          @click="emit('post-move-up', post)"
          text="Move up"
        ></v-btn>
        <v-btn
          :disabled="!showMoveDown"
          @click="emit('post-move-down', post)"
          text="Move down"
        ></v-btn>
      </template>
    </v-card>
  </div>
</template>

<style lang="scss"></style>
