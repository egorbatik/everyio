import { Knex } from "knex";

const knexConfig: { [key: string]: Knex.Config } = {

  development: {
    client: "pg",
    connection: {
      database: "everyio",
      user: "everyio",
      password: "everyio"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

};

export default knexConfig;

