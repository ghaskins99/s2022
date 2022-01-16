import { wrap } from '@mikro-orm/core';
import { Item, ItemInfo } from '../../entities/Item';
import { DI } from '../../server';
import ItemRepository from './ItemRepository';

const listItems = async () => {
  return DI.em.find(Item, {});
};

const saveItem = async (item: Item) => {
  await DI.em.persistAndFlush(item);
  return item;
};

const updateItem = async (id: string, data: ItemInfo) => {
  const item = await DI.em.findOne(Item, id);

  if (item) {
    wrap(item).assign(data);
    await DI.em.flush();
  }

  return item;
};

const deleteItem = async (id: string) => {
  const item = await DI.em.findOne(Item, id);

  if (item) {
    await DI.em.removeAndFlush(item);
    return true;
  }

  return false;
};

export default {
  listItems,
  saveItem,
  updateItem,
  deleteItem,
} as ItemRepository;
