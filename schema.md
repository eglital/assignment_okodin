User
username: STRING no null, is STRING
email: STRING no null, is email
image: string (pathname), no null,
profileid: int no null

Location:
distance: int no null
city: string

MaritalStatus
status: STRING

BodyType
type: STRING

Occupation
name: STRING

Pet:
species: STRING

Education:
level:

Profile
age: int
location: int FK:location.id
about: text length >= 50
talents: STRING
favorite_things: STRING
why_message: text
gender: STRING
maritalId: INT
height: STRING
bodyTypeId: INT
have_kids: BOOLEAN
petsId: INT
educationId: INT

sequelize model:create --name Profile --attributes "image:string age:int locationid:int about:text talents:string favorite_things:string why_message:text gender:string maritalid:int height:string body_typeid:int have_kids:boolean petsid:int educationid:int"

//////////////////////////////////////////




INSERT INTO "Locations" (distance, city)
VALUES (500, 'Agartha');

INSERT INTO "Locations" (distance, city)
VALUES (400, 'Alfheim');

INSERT INTO "Locations" (distance, city)
VALUES (300, 'Annwn');

INSERT INTO "Locations" (distance, city)
VALUES (200, 'Asgard');


INSERT INTO "MaritalStatuses" (status)
VALUES ('single');

INSERT INTO "MaritalStatuses" (status)
VALUES ('married');

INSERT INTO "MaritalStatuses" (status)
VALUES ('divorced');


INSERT INTO "Occupations" (name)
VALUES ('Wrestler');


INSERT INTO "Occupations" (name)
VALUES ('God of Thunder');


INSERT INTO "Occupations" (name)
VALUES ('Pet Detective');


INSERT INTO "Occupations" (name)
VALUES ('Student');


INSERT INTO "BodyTypes" (type)
VALUES ('sheep herder');

INSERT INTO "BodyTypes" (type)
VALUES ('blacksmith');

INSERT INTO "BodyTypes" (type)
VALUES ('built like a god');


INSERT INTO "Pets" (species)
VALUES ('sheep');

INSERT INTO "Pets" (species)
VALUES ('dog');

INSERT INTO "Pets" (species)
VALUES ('cow');

INSERT INTO "Pets" (species)
VALUES ('pig');


INSERT INTO "Education" (level)
VALUES ('preschool');

INSERT INTO "Education" (level)
VALUES ('viking middle school');

INSERT INTO "Education" (level)
VALUES ('viking school');

INSERT INTO "Education" (level)
VALUES ('thunder god school');
