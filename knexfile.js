// Update with your config settings.

module.exports = {

  staging: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    }
  },

  development: {
    client: 'mysql',
    version: '8.0',
    connection: {
      host:     'db4free.net',
      port:     '3306',
      database: 'tc2sfasfasf',
      user:     'artootestdb',
      password: 'artootestdb'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
