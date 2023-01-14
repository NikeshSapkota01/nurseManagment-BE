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

### make seed

    $ yarn run make:seed User                                      │

### run seed to insert some data

    $ yarn run seed
