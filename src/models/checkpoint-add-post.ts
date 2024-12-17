import { ECheckpoint } from '@/enums';
import { Checkpoint } from './checkpoint';

export class CheckpointAddPost extends Checkpoint {
  public constructor(
    public readonly checkpointType: ECheckpoint = ECheckpoint.ADD,
    public readonly index: number,
  ) {
    super(checkpointType, `Added post with index ${index}`);
  }
}
