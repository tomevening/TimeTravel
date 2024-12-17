import { ECheckpoint } from '@/enums';

export type TCheckpointSwapPosts = {
  firstIndex: number;
  secondIndex: number;
  checkpointId: string;
  type: ECheckpoint;
};

export type TCheckpointAddPost = {
  index: number;
  checkpointId: string;
  type: ECheckpoint;
};

export type TCheckpointDeletePost = {
  index: number;
  id: number;
  checkpointId: string;
  type: ECheckpoint;
};

export type TCheckpoint =
  | TCheckpointAddPost
  | TCheckpointDeletePost
  | TCheckpointSwapPosts;
