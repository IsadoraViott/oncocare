create database oncocare;
use oncocare;
 
create table usuarios(
	id int primary key not null auto_increment,
    nome varchar(255) not null,
    email varchar(255) not null,
    idade varchar(255) not null,
    cpf varchar(255) not null,
    senha varchar(255) not null,
    status enum ('ativo', 'inativo') default ('ativo'),
    created_at timestamp default current_timestamp
);

select * FROM usuarios;