import { wrap } from '@mikro-orm/core';
import { Item, ItemInfo } from '../../entities/Item';
import { DI } from '../../server';
import ItemRepository from './ItemRepository';

const fieldNames = ['name, description, price_cents, inventory_count'];

const listItems = async (deleted = false) => {
  const fields = deleted ? [...fieldNames, 'deleted_reason'] : fieldNames;
  return DI.em.find(Item, { deleted }, { fields });
};

const saveItem = async (item: Item) => {
  await DI.em.persistAndFlush(item);
  return item;
};

const updateItem = async (uuid: string, data: ItemInfo) => {
  const item = await DI.em.findOne(
    Item,
    { uuid, deleted: false },
    { fields: fieldNames }
  );

  if (item) {
    wrap(item).assign(data);
    await DI.em.flush();
  }

  return item;
};

const deleteItem = async (uuid: string, reason: string) => {
  const item = await DI.em.findOne(Item, uuid);

  if (item) {
    item.deleted = true;
    item.deletedReason = reason;
    await DI.em.flush();
    return true;
  }

  return false;
};

const restoreItem = async (uuid: string) => {
  const item = await DI.em.findOne(Item, uuid);

  if (item) {
    item.deleted = false;
    delete item.deletedReason;
    await DI.em.flush();
    return item;
  }

  return item;
};

export default {
  listItems,
  saveItem,
  updateItem,
  deleteItem,
  restoreItem,
} as ItemRepository;
