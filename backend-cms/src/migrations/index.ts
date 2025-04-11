import * as migration_20250411_164000 from './20250411_164000';

export const migrations = [
  {
    up: migration_20250411_164000.up,
    down: migration_20250411_164000.down,
    name: '20250411_164000'
  },
];
