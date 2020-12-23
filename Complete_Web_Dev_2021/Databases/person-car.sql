create table car (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    make VARCHAR(100) NOT NULL,
    model VARCHAR(100) NOT NULL,
    price NUMERIC(19, 2) NOT NULL
);

create table person (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    gender VARCHAR(50) NOT NULL,
    email VARCHAR(100),
    date_of_birth DATE NOT NULL,
    country_of_birth VARCHAR(50) NOT NULL,
    car_id BIGINT REFERENCES car (id),
    UNIQUE(car_id)
);

insert into person (first_name, last_name, gender, email, date_of_birth, country_of_birth) values ('Sam', 'Iam', 'Male', 'samiam@suess.com', DATE '1953-10-20', 'Bolivia');
insert into person (first_name, last_name, gender, email, date_of_birth, country_of_birth) values ('Rick', 'Sanchez', 'Male', 'rick@gmail.com', DATE '2013-7-2', 'Egypt');
insert into person (first_name, last_name, gender, email, date_of_birth, country_of_birth) values ('Virgil', 'Scott', 'Female', 'virt@yahoo.com', DATE '1914-12-25', 'China');

insert into car (make, model, price) values ('GMC', 'Acadia', '17622.69');
insert into car (make, model, price) values ('Ford', 'Escape', '21069.99');