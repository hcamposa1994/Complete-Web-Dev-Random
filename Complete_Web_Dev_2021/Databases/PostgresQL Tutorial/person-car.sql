create table car (
    car_uuid UUID NOT NULL PRIMARY KEY,
    make VARCHAR(100) NOT NULL,
    model VARCHAR(100) NOT NULL,
    price NUMERIC(19, 2) NOT NULL
);

create table person (
    person_uuid UUID NOT NULL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    gender VARCHAR(50) NOT NULL,
    email VARCHAR(100),
    date_of_birth DATE NOT NULL,
    country_of_birth VARCHAR(50) NOT NULL,
    car_uuid UUID REFERENCES car(car_uuid),
    UNIQUE(car_uuid)
);

insert into person (person_uuid, first_name, last_name, gender, email, date_of_birth, country_of_birth) values (uuid_generate_v4(), 'Sam', 'Iam', 'Male', 'samiam@suess.com', DATE '1953-10-20', 'Bolivia');
insert into person (person_uuid, first_name, last_name, gender, email, date_of_birth, country_of_birth) values (uuid_generate_v4(), 'Rick', 'Sanchez', 'Male', 'rick@gmail.com', DATE '2013-7-2', 'Egypt');
insert into person (person_uuid, first_name, last_name, gender, email, date_of_birth, country_of_birth) values (uuid_generate_v4(), 'Virgil', 'Scott', 'Female', 'virt@yahoo.com', DATE '1914-12-25', 'China');

insert into car (car_uuid, make, model, price) values (uuid_generate_v4(), 'GMC', 'Acadia', '17622.69');
insert into car (car_uuid, make, model, price) values (uuid_generate_v4(), 'Ford', 'Escape', '21069.99');