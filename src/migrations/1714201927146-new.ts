import { MigrationInterface, QueryRunner } from "typeorm";

export class New1714201927146 implements MigrationInterface {
    name = 'New1714201927146'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "booklibrary" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "title" character varying NOT NULL,
                "author" character varying,
                "publishedYear" integer,
                "createdAt" TIMESTAMP DEFAULT '"2024-04-27T07:12:09.697Z"',
                "updatedAt" TIMESTAMP,
                CONSTRAINT "PK_a852e759a0dd99ca5ee407476f8" PRIMARY KEY ("id")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "booklibrary"
        `);
    }

}
