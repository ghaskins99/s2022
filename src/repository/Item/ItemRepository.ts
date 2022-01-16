import { Item, ItemInfo } from '../../entities/Item';

export default interface ItemRepository {
  listItems(): Promise<Item[]>;
  saveItem(item: Item): Promise<Item>;
  updateItem(id: string, item: ItemInfo): Promise<Item>;
  deleteItem(id: string): Promise<boolean>;
}
