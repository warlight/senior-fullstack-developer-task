import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterUserStatus1754555394931 implements MigrationInterface {
  name = 'AlterUserStatus1754555394931';

  public async up(queryRunner: QueryRunner): Promise<void> {
    try {
      await queryRunner.query(`ALTER TABLE users DROP COLUMN status`);
      await queryRunner.query(
        `ALTER TABLE users
          ADD COLUMN status TEXT CHECK(status IN ('Enabled', 'Disabled', 'Deleted')) NOT NULL DEFAULT 'Enabled'`,
      );
      // await queryRunner.query(`UPDATE users SET status = 'Enabled'`);
    } catch (error) {
      console.error('Migration up error:', error);
      throw error;
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE users DROP COLUMN status`);
    await queryRunner.query(`ALTER TABLE users ADD COLUMN status INTEGER NULL`);
  }
}
