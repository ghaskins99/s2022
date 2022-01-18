import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { v4 } from 'uuid';

export interface ItemInfo {
  name: string;
  description: string;
  priceCents: number;
  inventoryCount: number;
}

@Entity()
export class Item {
  @PrimaryKey()
  uuid = v4();

  @Property()
  name: string;

  @Property()
  description: string;

  @Property()
  priceCents: number;

  @Property()
  inventoryCount: number;

  @Property()
  deleted = false;

  @Property()
  deletedReason?: string;

  // unused by mikroORM but may be useful for other
  constructor({ name, description, priceCents, inventoryCount }: ItemInfo) {
    this.name = name;
    this.description = description;
    this.priceCents = priceCents;
    this.inventoryCount = inventoryCount;
  }
}
