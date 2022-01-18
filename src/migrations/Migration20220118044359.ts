import { Migration } from '@mikro-orm/migrations';

export class Migration20220118044359 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table `item` add column `deleted` integer null;');
    this.addSql('alter table `item` add column `deleted_reason` varchar null;');
  }

}
