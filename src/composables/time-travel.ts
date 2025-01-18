import { ECheckpoint } from '@/enums';
import {
  Checkpoint,
  CheckpointAddPost,
  CheckpointDeletePost,
  CheckpointSwapPosts,
} from '@/models';
import type { TPost } from '@/types';
import { myFetch } from '@/utils';
import type { ShallowReactive } from 'vue';

export function useTimeTravel(
  posts: ShallowReactive<TPost[]>,
  checkpoints: ShallowReactive<Checkpoint[]>,
) {
  let currentIndex = 1;

  myFetch('/posts/').then(value => {
    const postsIds = value as number[];
    for (const post of postsIds) {
      posts.push({ id: post, text: `Post ${post}` });
      ++currentIndex;
    }
  });

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

  function postsSwap(postAIndex: number, postBIndex: number) {
    const postA = posts[postAIndex];
    posts[postAIndex] = posts[postBIndex];
    posts[postBIndex] = postA;
    checkpoints.unshift(
      new CheckpointSwapPosts(ECheckpoint.SWAP, postAIndex, postBIndex),
    );
  }

  function postAdd() {
    posts.push({ id: currentIndex, text: `Post ${currentIndex}` });
    checkpoints.unshift(new CheckpointAddPost(ECheckpoint.ADD, currentIndex));
    ++currentIndex;
  }

  function postDelete(post: TPost) {
    const postToDelete = posts.find(p => p.id === post.id);
    if (!postToDelete) return;
    const postIndex = posts.indexOf(postToDelete);
    posts.splice(postIndex, 1);
    checkpoints.unshift(
      new CheckpointDeletePost(ECheckpoint.DELETE, postIndex, postToDelete.id),
    );
  }

  function undo(checkpoint: Checkpoint) {
    if (checkpoint instanceof CheckpointAddPost) {
      undoAdd(checkpoint);
      return;
    }
    if (checkpoint instanceof CheckpointDeletePost) {
      undoDelete(checkpoint);
      return;
    }
    if (checkpoint instanceof CheckpointSwapPosts) {
      undoSwap(checkpoint);
      return;
    }
  }

  function undoSwap(checkpoint: CheckpointSwapPosts) {
    const postA = posts[checkpoint.firstIndex];
    posts[checkpoint.firstIndex] = posts[checkpoint.secondIndex];
    posts[checkpoint.secondIndex] = postA;
  }

  function undoAdd(checkpoint: CheckpointAddPost) {
    // We don't need any data from this checkpoint yet but further improvements may require it
    console.log(checkpoint);
    posts.pop();
    --currentIndex;
  }

  function undoDelete(checkpoint: CheckpointDeletePost) {
    const temp = {
      id: checkpoint.id,
      text: `Post ${checkpoint.id}`,
    };
    posts.splice(checkpoint.index, 0, temp);
  }

  function rewind(checkpoint: Checkpoint) {
    let lastCheckpoint: Checkpoint;
    do {
      lastCheckpoint = checkpoints.shift() as Checkpoint;
      undo(lastCheckpoint);
    } while (checkpoint != lastCheckpoint);
  }

  return { postsSwap, postAdd, postDelete, rewind, postMoveUp, postMoveDown };
}
