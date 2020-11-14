 Write a "single" SQL Query that returns data from the `TEAMS` and `PLAYERS` tables such that

1. All teams are returned, even if there are no players included in that team.

2. List `TEAM_ID` and `TEAM_NAME`.

3. List player's `FULLNAME` (First and Last Name separated by a space).

4. If the player `weight` is greater than 200 lbs, return the text `"Heavy"`.  (Hint: you may use CASE).  Else, return the text `“Medium”`.

5. Order by player's `weight` in descending order.

The output may look something like this. Some intermediate rows have been removed for brevity.

```
 team_id |  name  |     city      | state |     fullname      | weight | Weight Category
---------+--------+---------------+-------+-------------------+--------+-----------------
       1 | Royals | Kansas City   | MO    | Jarrod Dyson      |    160 | Medium
       1 | Royals | Kansas City   | MO    | Terrance Gore     |    165 | Medium
       1 | Royals | Kansas City   | MO    | Tim Collins       |    170 | Medium
       1 | Royals | Kansas City   | MO    | Nori Aoki         |    180 | Medium
       ...
       1 | Royals | Kansas City   | MO    | Francisco Pena    |    230 | Heavy
       1 | Royals | Kansas City   | MO    | Erik Kratz        |    240 | Heavy
       1 | Royals | Kansas City   | MO    | Billy Butler      |    240 | Heavy
       1 | Royals | Kansas City   | MO    | Salvador Perez    |    240 | Heavy
       1 | Royals | Kansas City   | MO    | Carlos Peguero    |    250 | Heavy

       2 | Giants | San Francisco | CA    | Joaquin Arias     |    165 | Medium
       2 | Giants | San Francisco | CA    | Tim Lincecum      |    170 | Medium
       2 | Giants | San Francisco | CA    | Matt Duffy        |    170 | Medium
       2 | Giants | San Francisco | CA    | Ehire Adrianza    |    170 | Medium
       2 | Giants | San Francisco | CA    | Gregor Bianco     |    175 | Medium
       2 | Giants | San Francisco | CA    | Kendry Flores     |    175 | Medium
       ...
       2 | Giants | San Francisco | CA    | Erik Cordier      |    250 | Heavy
       2 | Giants | San Francisco | CA    | Angel Villalona   |    255 | Heavy
       2 | Giants | San Francisco | CA    | Jean Machi        |    255 | Heavy
```


The connection details to our class SQL database are as follows:

{
  "label": "acc-postgres-aws",
  "host": "pgdb.accsoftwarebootcamp.com",
  "user": "acc",
  "port": 5432,
  "certPath": "",
  "database": "accsoftwarebootcamp",
  "password": "accrocks"
}