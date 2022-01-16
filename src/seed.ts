import { MikroORM } from '@mikro-orm/core';
import { exit } from 'process';
import { Item } from './entities/Item';
import config from './mikro-orm.config';

(async () => {
  const orm = await MikroORM.init({ ...config, debug: true });

  // seeds new items (with _new_ random ids)
  const existing = await orm.em.find(Item, {});
  await orm.em.removeAndFlush(existing);

  const created = [];
  for (let i = 1; i <= 10; i++) {
    created.push(
      new Item({
        name: `Some inventory item #${i}`,
        description: `description for item #${i}.`,
        priceCents: 1999,
        inventoryCount: 23,
      })
    );
  }

  await orm.em.persistAndFlush(created);
})().then(() => {
  console.log('added a few items to the db');
  exit();
});
