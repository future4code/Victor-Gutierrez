const env = require('../.env');

module.exports = {
      client: 'mysql',
      connection: {
            host: env.DB_HOST,
            port: Number(env.DB_PORT || '3306'),
            user: env.DB_USER,
            password: env.DB_PASSWORD,
            database: env.DB_NAME,
      },
      migrations: {
            tableName: 'knex_migrations',
      },
};
