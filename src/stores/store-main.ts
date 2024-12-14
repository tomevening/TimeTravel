import type { TCheckpoint, TPost } from '@/types';
import { myFetch, newID } from '@/utils';
import { defineStore } from 'pinia';
import { shallowReactive } from 'vue';

export const useStoreMain = defineStore('store-main', () => {
  const posts = shallowReactive<TPost[]>([]);
  const checkpoints = shallowReactive<TCheckpoint[]>([]);
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
    checkpoints.push({ index: currentIndex, checkpointId: newID() });
    ++currentIndex;
  }

  function postDelete(post: TPost) {
    const postToDelete = posts.find(p => p.id === post.id);
    if (!postToDelete) return;
    const postIndex = posts.indexOf(postToDelete);
    posts.splice(postIndex, 1);
    checkpoints.push({
      index: postIndex,
      id: postToDelete.id,
      checkpointId: newID(),
    });
  }

  function postsSwap(postOneIndex: number, postTwoIndex: number) {
    const postOne = posts[postOneIndex];
    posts[postOneIndex] = posts[postTwoIndex];
    posts[postTwoIndex] = postOne;
    checkpoints.push({
      firstIndex: postOneIndex,
      secondIndex: postTwoIndex,
      checkpointId: newID(),
    });
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

  return { posts, postAdd, postDelete, postMoveUp, postMoveDown, checkpoints };
});
