import { ECheckpoint } from '@/enums';
import { Checkpoint } from './checkpoint';

export class CheckpointSwapPosts extends Checkpoint {
  public constructor(
    public readonly checkpointType: ECheckpoint = ECheckpoint.SWAP,
    public readonly firstIndex: number,
    public readonly secondIndex: number,
  ) {
    super(
      checkpointType,
      `Swapped posts with indexes ${firstIndex} and ${secondIndex}`,
    );
  }

  public rewind(): void {}
}
