import { Checkpoint } from '@/models';
import type { TPost } from '@/types';
import { defineStore } from 'pinia';
import { shallowReactive } from 'vue';

export const useStoreMain = defineStore('store-main', () => {
  const posts = shallowReactive<TPost[]>([]);
  const checkpoints = shallowReactive<Checkpoint[]>([]);

  return {
    posts,
    checkpoints,
  };
});
