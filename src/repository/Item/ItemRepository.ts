import { Item, ItemInfo } from '../../entities/Item';

export default interface ItemRepository {
  listItems(deleted?: boolean): Promise<Item[]>;
  saveItem(item: Item): Promise<Item>;
  updateItem(uuid: string, item: ItemInfo): Promise<Item>;
  deleteItem(uuid: string, reason: string): Promise<boolean>;
  restoreItem(uuid: string): Promise<Item>;
}
