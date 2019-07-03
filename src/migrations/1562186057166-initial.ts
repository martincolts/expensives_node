import {MigrationInterface, QueryRunner} from "typeorm";

export class initial1562186057166 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query('create table if not exists expensive ('+
            'id serial not null unique,'+
            'name varchar(32) not null,'+
            'description varchar(256) not null,'+
            'created date not null,'+
            'price numeric(11,2) not null,'+
            '"categoryId" integer not null'+
        ');');
        await queryRunner.query('create table if not exists category ('+
            'id serial not null unique,'+
            'name varchar(32) not null'+
        ');');
        await queryRunner.query(
            'alter table expensive add constraint expensive_category_relation foreign key ("categoryId") references category(id);'
        );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query('drop table if exists expensive;');
        await queryRunner.query('drop table if exists category;');
    }

}
