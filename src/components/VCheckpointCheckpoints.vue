<script setup lang="ts">
  import type { TCheckpoint } from '@/types';

  defineProps<{
    checkpoint: TCheckpoint;
  }>();
</script>

<template>
  <div>{{ checkpoint }}</div>
</template>

<style lang="scss"></style>
