import { Migration } from '@mikro-orm/migrations';

export class Migration20220118044323 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `item` (`uuid` varchar not null, `name` varchar not null, `description` varchar not null, `price_cents` integer not null, `inventory_count` integer not null, primary key (`uuid`));');
  }

}
