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

Occupation-Profile JOIN
occupationId: INT
profileId: INT

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

