import { ECheckpoint } from '@/enums';
import { createId } from '@/utils';

/** Checkpoint: an abstract class that provides data found in all checkpoint types */
export abstract class Checkpoint {
  public constructor(
    public readonly checkpointType: ECheckpoint,
    public description: string,
    public readonly checkpointId: string = createId(),
  ) {}
}
