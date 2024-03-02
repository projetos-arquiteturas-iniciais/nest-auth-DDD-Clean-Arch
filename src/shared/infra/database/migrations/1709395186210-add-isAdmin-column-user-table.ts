import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddIsAdminColumnUserTable1709395186210
  implements MigrationInterface
{
  name = 'AddIsAdminColumnUserTable1709395186210';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" ADD "is_admin" boolean NOT NULL DEFAULT false`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "is_admin"`);
  }
}
