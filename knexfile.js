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
      host:     'ec2-54-243-253-24.compute-1.amazonaws.com',
      port:     '5432',
      database: 'dbd0cgtuf7pkpq',
      user:     'mmnmobalbkgsvt',
      password: '32debd7086615dce02c47ecb45da4d4f5ce58e8ceb155ff9503510867a3d55d6'
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
