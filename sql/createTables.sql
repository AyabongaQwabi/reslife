
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


INSERT INTO `reslife`.`event` (`eventID`, `name`, `event_info`, `eventDate`, `type`, `image`) VALUES (NULL, 'ipotsoyi', 'Hip-hop, the spring blooms and the perfect party atmosphere collide at the Ipotsoyi (a proudly local term meaning party) Spring Festival. If you fancy an outdoor jol featuring some of SA’s hottest acts then trek your way down to the Cape Town Ostrich Ranch on Saturday, 12 September 2015.

This year the beloved bash moves beyond the gritty city centre streets and gets outdoorsy.  And the line-up certainly is one that skriks vir niks, with the self-proclaimed ‘Supa Mega’ rapper AKA, Kwa-Zulu Natal’s very own Riky Rick and award-winning rapper and ‘Doc Shebeleza’ hit-maker Cassper Nyovest amongst many others bringing thumping beats.', '2015-10-21', '1', '''spring.jpg'''), (NULL, 'Graduation', '​​​​​​​​​​​​​The University hosts 2 graduation events annually namely in March and in September and for the first time this year, graduations will be held in December for some of our programmes.The upcoming spring graduation takes place on the 16th and 17th of September and the schedule can be viewed in the table seen below.The table also indicates which faculty and award will be presented at the various ceremonies. This webpage provides guidance on how to experience a seamless graduation process from the time you have met the requirements to being a graduate. For detailed information about our processes and procedures, hover over one of the menu items above to see information that might be applicable to you. ', '2015-10-28', '2', '''graduation.jpg''')

INSERT INTO `reslife`.`event_type` (`id`, `name`, `description`) VALUES (NULL, 'Party', 'Celebrations'), (NULL, 'Oficial ', 'UWC oifficial event e.g graduation');

INSERT INTO `reslife`.`job_type` (`id`, `name`, `description`) VALUES (NULL, 'Staff', 'Existing employee jobs'), (NULL, 'Student', 'UWC student''s Job');

INSERT INTO `reslife`.`job_articles` (`id`, `title`, `description`, `due_date`, `state`, `type`, `image`, `email`, `telephone`) VALUES (NULL, 'Care Taker', '3 to 5 years store management experience within a luxury furniture retail
Must have excellent administration skills
Must have strong experience and skills with understanding of stock movement and replenishment as well as a thorough understanding of ER/IR processes', '2015-10-23', '1', '2', 'job_default.jpg', 'sadasd@asdasda', '4040520405045');

INSERT INTO `reslife`.`job_articles` (`id`, `title`, `description`, `due_date`, `state`, `type`, `image`, `email`, `telephone`) VALUES (NULL, 'FINGO', '"ESPONSIBILITIES INCLUDE:Responsible for all functions associated with the design, implementation andmaintenance of SQL server databases including security, back-up, logging, reportingand recovery procedures.Manage all technical aspects of the database..."', '2015-10-22', '1', '2', 'job_default.jpg', 'asdasdas@sdsf.vo', '012404042');