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
      variant="outlined"
      class="m-1"
      elevation="1"
      color="surface-variant"
      max-width="444"
      prepend-avatar="/icons/post.svg"
      :title="post.text"
    >
      <template v-slot:actions>
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
        <v-btn
          @click="emit('post-delete', post)"
          text="Delete"
        ></v-btn>
      </template>
    </v-card>
  </div>
  <!-- <div class="border-2">
    {{ post.text }}
    <button @click="emit('post-delete', post)">(delete)</button>
    <button
      v-show="showMoveUp"
      @click="emit('post-move-up', post)"
    >
      (move up)
    </button>
    <button
      v-show="showMoveDown"
      @click="emit('post-move-down', post)"
    >
      (move down)
    </button>
  </div> -->
</template>

<style lang="scss"></style>
