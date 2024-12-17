import { ECheckpoint } from '@/enums';
import { Checkpoint } from './checkpoint';

export class CheckpointDeletePost extends Checkpoint {
  public constructor(
    public readonly checkpointType: ECheckpoint = ECheckpoint.DELETE,
    public readonly index: number,
    public readonly id: number,
  ) {
    super(checkpointType, `Deleted post with id ${id} and index ${index}`);
  }
}
