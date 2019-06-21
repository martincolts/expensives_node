drop table if exists expensive;
drop table if exists category;


create table if not exists expensive (
	id serial not null unique,
	name varchar(32) not null,
	description varchar(256) not null,
	created date not null,
	price numeric(11,2) not null,
	"categoryId" integer not null
);

create table if not exists category (
	id serial not null unique,
	name varchar(32) not null
);

alter table expensive add constraint expensive_category_relation foreign key ("categoryId") references category(id);

insert into category values (1, 'Mercaderia');
insert into category values (2, 'Arreglos del auto');
insert into category values (3, 'Comida pedida');