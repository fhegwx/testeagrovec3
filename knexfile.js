
module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: "agrovec",
      user: "postgres",
      password: "admin"
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`
    }
  }
};