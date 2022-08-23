# everyio_challenge

## Database
```
1. docker pull postgres:latest
2. docker run --name postgres-everyio-db -e POSTGRES_PASSWORD=everyio -e POSTGRES_USER=everyio -e POSTGRES_DB=everyio -p 5432:5432 -d postgres
```
## Local environment
```
1. NodeJS => v12.22.1
2. npm install (will install knex for DB)
```

## Data migrations and Seed
```
1. knex migrate:latest
2. knex seed:run
    * This will add a few records for the userId 1 and 2.
```

## Curls
```
curl --location --request GET 'localhost:3000/tasks'

' This will return 'User is not authenticated, the autentication is done with a header, to emulate a token

curl --location --request GET 'localhost:3000/tasks' \
--header 'userId: 1'

' This returns data (from the seed)

curl --location --request POST 'localhost:3000/tasks/3/ToDo' \
--header 'userId: 1'

curl --location --request POST 'localhost:3000/tasks/3/InProgress' \
--header 'userId: 1'

curl --location --request POST 'localhost:3000/tasks/3/Done' \
--header 'userId: 1'

curl --location --request DELETE 'localhost:3000/tasks/3' \
--header 'userId: 1'

' In case to try to update other user's task it will not update as the update requires to match userId and taskId
```

## Tests
```
1. npm run test
' The tests require the seed data as no stubbing were used in order to test end to end.
```
## Docker
```
1. docker build . -t everyio 
2. docker run --name everyio -p 3000:3000 -d everyio:latest
```
