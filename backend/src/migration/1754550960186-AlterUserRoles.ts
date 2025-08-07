import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterUserRoles1754550960186 implements MigrationInterface {
  name = 'AlterUserRoles1754550960186';

  public async up(queryRunner: QueryRunner): Promise<void> {
    try {
      await queryRunner.query(`ALTER TABLE users ADD COLUMN roles JSON`);
      await queryRunner.query(`UPDATE users SET roles = json_array(role)`);
      await queryRunner.query(`ALTER TABLE users DROP COLUMN role`);
    } catch (error) {
      console.error('Migration up error:', error);
      throw error;
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    try {
      await queryRunner.query(
        `ALTER TABLE users ADD COLUMN role TEXT NOT NULL DEFAULT 'User'`,
      );
      await queryRunner.query(
        `UPDATE users SET role = json_extract(roles, '$.roles[0]'`,
      );
      await queryRunner.query(`ALTER TABLE users DROP COLUMN roles`);
    } catch (error) {
      console.error('Migration down error:', error);
      throw error;
    }
  }
}
