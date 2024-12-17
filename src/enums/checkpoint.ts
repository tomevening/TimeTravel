export const ECheckpoint = {
  SWAP: 0,
  ADD: 1,
  DELETE: 2,
} as const;

export type ECheckpoint = (typeof ECheckpoint)[keyof typeof ECheckpoint];
