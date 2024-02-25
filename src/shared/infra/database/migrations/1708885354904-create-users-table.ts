import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUsersTable1708885354904 implements MigrationInterface {
  name = 'CreateUsersTable1708885354904';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "users" ("id" uuid NOT NULL, "deleted_at" TIMESTAMP, "created_at" TIMESTAMP DEFAULT now(), "status" character varying, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "users"`);
  }
}
