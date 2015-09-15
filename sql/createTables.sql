
create table event_type(
	id int not null auto_increment,
	name varchar(200),
	description varchar(5000),
	primary key(id)
);



create table job_type(
	id int not null auto_increment,
	name varchar(200),
	description varchar(5000),
	primary key(id)
);

create table sport_type(
	id int not null auto_increment,
	name varchar(200),
	description varchar(5000),
	primary key(id)
);

create table event(
	eventID int not null auto_increment,
	name varchar(500),
	event_info varchar(5000),
	eventDate date,
	type int not null,
	foreign key(type) references event_type(id),
	primary key(eventID)
);




create table sport_articles(
	id int not null auto_increment,
	title varchar(300),
	author varchar(400),
	description varchar(5000),
	articleDate date,
	type int not null,
	primary key(id),
	foreign key(type) references sport_type(id)


);


create table job_articles(
	id int not null auto_increment,
	title varchar(300),
	description varchar(5000),
	due_date date,
	state bool not null default 1,
	type int not null,
	primary key(id),
	foreign key(type) references job_type(id)

);