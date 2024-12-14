type TCheckpointSwapPosts = {
  firstIndex: number;
  secondIndex: number;
  checkpointId: string;
};

type TCheckpointAddPost = {
  index: number;
  checkpointId: string;
};

type TCheckpointDeletePost = {
  index: number;
  id: number;
  checkpointId: string;
};

export type TCheckpoint =
  | TCheckpointAddPost
  | TCheckpointDeletePost
  | TCheckpointSwapPosts;
