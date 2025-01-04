import { Checkpoint } from '@/models';
import type { TPost } from '@/types';
import { defineStore } from 'pinia';
import { shallowReactive } from 'vue';

import { useTimeTravel } from '@/composables';

export const useStoreMain = defineStore('store-main', () => {
  const posts = shallowReactive<TPost[]>([]);
  const checkpoints = shallowReactive<Checkpoint[]>([]);
  const timeTravel = useTimeTravel(posts, checkpoints);

  return {
    posts,
    checkpoints,
    timeTravel,
  };
});
