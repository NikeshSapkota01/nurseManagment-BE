### Nurse Profile Management

- Create a simple Nurse Profile Management application
- Create POST /signup endpoint for user signup. The endpoint should take email and password as payload.
- Create POST /signin endpoint for user signin. The endpoint should take the same payload as /signup.
- Create a token-based authentication mechanism.
  - Access token and refresh token is created.
- Create GET /nurse endpoint to fetch all nurses.
- Create POST /nurse endpoint to add a new nurse.
- Create PUT /nurse/{nurse_id} to update a nurse.
- Create DELETE /nurse/{nurse_id} to delete a nurse.
- All endpoints is accessible only to authenticated users.
- Create a user and nurse table for storing details.
- The mandatory fields for a nurse are Full Name, Email, Contact, Working Days, Duty Start Time and Duty End Time.
- Upload the photographs
- Unit tests and test coverage report

# Prerequisites

- [Node.js](https://yarnpkg.com/en/docs/install)
- [Yarn](https://yarnpkg.com/en/docs/install)
- [PostgreSQL](https://www.postgresql.org/download/)

#### Make new migration file (To create a new migration already here)

    $ yarn run make:migration user
    $ yarn run make:migration nurse
    $ yarn run make:migration refreshToken

#### Run migration

    $ yarn run migrate

### make seed (To create a new seed already here)

    $ yarn run make:seed User
    $ yarn run make:seed Nurse

### run seed to insert some data

    $ yarn run seed1
    $ yarn run seed2
