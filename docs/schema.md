# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## hosts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
city_id     | integer   | not null, foreign key (references cities), indexed
name        | string    | not null
age         | integer   | not null
sex         | string    | not null
city        | string    | not null
location    | string    | not null
lat         | float     | not null
lon         | float     | not null
interests   | string    | default: [], array: true
about me    | text      |
image_url   | string    | not null
house_image_url   | string    | not null
status      | string    | not null, default: 'Accepting Guests'

## cities
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
description | string    | not null
image_url   | string    | not null
banner_url  | string    | not null
map_url     | string    | not null

## reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | string    | not null, foreign key (references users), indexed
host_id     | string    | not null, foreign key (references hosts), indexed
body        | text      | not null


## user_reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | string    | not null, foreign key (references users), indexed
host_id     | string    | not null, foreign key (references hosts), indexed
body        | text      | not null
