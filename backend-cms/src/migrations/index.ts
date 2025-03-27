import * as migration_20250327_070602 from './20250327_070602';

export const migrations = [
  {
    up: migration_20250327_070602.up,
    down: migration_20250327_070602.down,
    name: '20250327_070602'
  },
];
