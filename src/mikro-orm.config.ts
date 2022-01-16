import { Options } from '@mikro-orm/core';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';

const config: Options = {
  metadataProvider: TsMorphMetadataProvider,
  entities: ['./dist/entities'],
  entitiesTs: ['./src/entities'],
  dbName: 'db/inventory',
  type: 'sqlite',
};

export default config;
