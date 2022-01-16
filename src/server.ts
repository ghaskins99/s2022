import { MikroORM } from '@mikro-orm/core';
import { EntityManager } from '@mikro-orm/sqlite';
import { AsyncLocalStorage } from 'async_hooks';
import express from 'express';
import config from './mikro-orm.config';
import DbItemRepository from './repository/Item/DbItemRepository';
import ItemRepository from './repository/Item/ItemRepository';
import routes from './routes/routes';

// simple solution as suggested by MikroOrm example
export const DI = {} as {
  orm: MikroORM;
  em: EntityManager;
  itemRepository: ItemRepository;
};

const PORT = 8000;
const API_ROOT = '/api';
const ENV = process.env.NODE_ENV || 'development';

const storage = new AsyncLocalStorage<EntityManager>();

const app = express();

(async () => {
  DI.orm = await MikroORM.init({
    ...config,
    context: () => storage.getStore(),
    debug: ENV === 'development',
  });

  DI.em = DI.orm.em as EntityManager;
  DI.itemRepository = DbItemRepository;

  app.use(express.json());

  app.use((req, res, next) => {
    storage.run(DI.em.fork(true, true), next);
  });

  app.use(API_ROOT, routes);

  app.listen(PORT);
  console.log(`listening on port ${PORT}`);
})();
