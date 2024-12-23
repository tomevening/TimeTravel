import { Checkpoint } from '@/models';
import type { TPost } from '@/types';
import { defineStore } from 'pinia';
import { shallowReactive } from 'vue';

import { useTimeTravel } from '@/composables';

export const useStoreMain = defineStore('store-main', () => {
  const posts = shallowReactive<TPost[]>([]);
  const checkpoints = shallowReactive<Checkpoint[]>([]);
  const timeTravel = useTimeTravel(posts, checkpoints);
  // let currentIndex = 1;

  // function postAdd() {
  //   posts.push({ id: currentIndex, text: `Post ${currentIndex}` });
  //   // checkpoints.push({
  //   //   index: currentIndex,
  //   //   checkpointId: newID(),
  //   //   type: ECheckpoint.ADD,
  //   // });
  //   checkpoints.push(new CheckpointAddPost(ECheckpoint.ADD, currentIndex));
  //   ++currentIndex;
  // }

  // function postDelete(post: TPost) {
  //   const postToDelete = posts.find(p => p.id === post.id);
  //   if (!postToDelete) return;
  //   const postIndex = posts.indexOf(postToDelete);
  //   posts.splice(postIndex, 1);
  //   checkpoints.push(
  //     new CheckpointDeletePost(ECheckpoint.DELETE, postIndex, postToDelete.id),
  //   );
  //   // checkpoints.push({
  //   //   index: postIndex,
  //   //   id: postToDelete.id,
  //   //   checkpointId: newID(),
  //   //   type: ECheckpoint.DELETE,
  //   // });
  // }

  // function postsSwap(postOneIndex: number, postTwoIndex: number) {
  //   const postOne = posts[postOneIndex];
  //   posts[postOneIndex] = posts[postTwoIndex];
  //   posts[postTwoIndex] = postOne;
  //   checkpoints.push(
  //     new CheckpointSwapPosts(ECheckpoint.SWAP, postOneIndex, postTwoIndex),
  //   );
  //   // checkpoints.push({
  //   //   firstIndex: postOneIndex,
  //   //   secondIndex: postTwoIndex,
  //   //   checkpointId: newID(),
  //   //   type: ECheckpoint.SWAP,
  //   // });
  // }

  // function postMoveUp(post: TPost) {
  //   const postIndex = posts.indexOf(post);
  //   const secondPostIndex = postIndex - 1;
  //   if (secondPostIndex < 0) return;
  //   postsSwap(postIndex, secondPostIndex);
  // }

  // function postMoveDown(post: TPost) {
  //   const postIndex = posts.indexOf(post);
  //   const secondPostIndex = postIndex + 1;
  //   if (secondPostIndex >= posts.length) return;
  //   postsSwap(postIndex, secondPostIndex);
  // }

  return {
    posts,
    // postAdd,
    // postDelete,
    // postMoveUp,
    // postMoveDown,
    checkpoints,
    timeTravel,
  };
});
