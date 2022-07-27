drop schema if exists zeradengue_banco_dados;
create schema zeradengue_banco_dados;
use zeradengue_banco_dados;

create table usuarios (
id 				int not null auto_increment,
email 			varchar(50) not null,
senha 			varchar(255) not null,
data_cadastro 	timestamp not null default current_timestamp(),
ativo 			tinyint(1) not null default 1,	
nome 			varchar(45) not null default "Anonimo",
imagem			varchar(200) not null default "avatar.png",
primary key (id)
);

create table status (
id 				int not null auto_increment,
descricao		varchar(45) not null,
primary key (id)
);

insert into status(descricao) values("Pendente"),("Concluido");
select * from status;

create table estados (
id 				int not null auto_increment,
sigla			char(2) not null,
descricao		varchar(50) not null,
primary key (id)
);

create table cidades (
id 				int not null auto_increment,
descricao		varchar(50) not null,
cep				varchar(8) not null,
estado_id			int not null,
primary key (id),
constraint fk_cidades_estado_id foreign key (estado_id) references estados(id)
);


create table ocorrencias (
id 				int not null auto_increment,
imagem			varchar(200) not null default "no_image.png",
descricao		varchar(50) not null,
endereco		varchar(80) not null,
bairro   		varchar(80) not null,
data_hora   	timestamp not null default current_timestamp(),
usuario_id			int not null,
status_id			int not null default 1,
cidades_id			int not null,
primary key (id),
constraint fk_ocorrencias_usuario_id foreign key (usuario_id) references usuarios(id),
constraint fk_ocorrencias_status_id foreign key (status_id) references status(id),
constraint fk_ocorrencias_cidades_id foreign key (cidades_id) references cidades(id)
);