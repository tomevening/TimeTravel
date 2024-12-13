import type { TPost } from '@/types';
import { defineStore } from 'pinia';
import { shallowReactive } from 'vue';

import { myFetch } from '@/utils';

export const useStoreMain = defineStore('store-main', () => {
  const posts = shallowReactive<TPost[]>([]);
  let currentIndex = 1;

  myFetch('/posts/').then(value => {
    const postsIds = value as number[];
    for (const post of postsIds) {
      posts.push({ id: post, text: `Post ${post}` });
      ++currentIndex;
    }
  });

  function postAdd() {
    posts.push({ id: currentIndex, text: `Post ${currentIndex}` });
    ++currentIndex;
  }

  function postDelete(post: TPost) {
    const postToDelete = posts.find(p => p.id === post.id);
    if (!postToDelete) return;
    posts.splice(posts.indexOf(postToDelete), 1);
  }

  function postsSwap(postOneIndex: number, postTwoIndex: number) {
    const postOne = posts[postOneIndex];
    posts[postOneIndex] = posts[postTwoIndex];
    posts[postTwoIndex] = postOne;
  }

  function postMoveUp(post: TPost) {
    const postIndex = posts.indexOf(post);
    const secondPostIndex = postIndex - 1;
    if (secondPostIndex < 0) return;
    postsSwap(postIndex, secondPostIndex);
  }

  function postMoveDown(post: TPost) {
    const postIndex = posts.indexOf(post);
    const secondPostIndex = postIndex + 1;
    if (secondPostIndex >= posts.length) return;
    postsSwap(postIndex, secondPostIndex);
  }

  return { posts, postAdd, postDelete, postMoveUp, postMoveDown };
});
