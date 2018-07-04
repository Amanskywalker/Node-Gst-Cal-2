// Update with your config settings.

module.exports = {

  staging: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    }
  },

  development: {
    client: 'pg',
    version: '10.4',
    connection: {
      host:     'ec2-54-225-230-142.compute-1.amazonaws.com',
      port:     '5432',
      database: 'd4lddbu015btv5',
      user:     'osuhliuihgsrog',
      password: '591eebe7e4fc5c3c9814e33e2022b987c2e47289eb38aad1c09ba40be11b6d76'
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
