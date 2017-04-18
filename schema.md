User
user: STRING no null, is STRING
email: STRING no null, is email
image: string (pathname), no null,
profileid: int no null

Location:
distance: int no null
city: string

Talents
name:

profile talents join
talentsid:int
profileid:int

Profile
age: int
location: int FK:location.id
about: text length >= 50
