import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Jeans1726122199694 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'user_name',
                        type: 'varchar',
                        length: '255',
                        isNullable: true
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'phone_number',
                        type: 'varchar',
                        length: '10',
                        isNullable: true
                    },
                    {
                        name: 'password',
                        type: 'varchar',
                        length: '50',
                        isNullable: false
                    }
                ]
            })
        );

        await queryRunner.createTable(
            new Table({
                name: 'products',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'article_no',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        length: '255',
                        isNullable: false
                    },
                    {
                        name: 'style',
                        type: 'varchar',
                        length: '255',
                        isNullable: true
                    },
                    {
                        name: 'color',
                        type: 'varchar',
                        length: '255',
                        isNullable: true
                    },
                    {
                        name: 'category',
                        type: 'varchar',
                        length: '255',
                        isNullable: true
                    },
                    {
                        name: 'gender',
                        type: 'varchar',
                        length: '255',
                        isNullable: true
                    },
                    {
                        name: 'price',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'image_url',
                        type: 'varchar',
                        length: '255',
                        isNullable: true
                    },
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('products');
        await queryRunner.dropTable('users');
    }

}