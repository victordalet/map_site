create table user(
    id integer primary key autoincrement,
    name text not null,
    password text not null,
    token text,
    latitude real not null,
    longitude real not null,
);


create table position(
    id integer primary key autoincrement,
    name text not null,
    points integer not null
);


create table city(
    id integer primary key autoincrement,
    user text not null,
    latitude real not null,
    longitude real not null,
    points integer not null,
);