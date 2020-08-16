import User from '../Models/User';
import knex from 'knex';
const env = require('../../.env');

class DBController {
      db = knex({
            client: 'mysql',
            connection: {
                  host: env.DB_HOST,
                  port: Number(env.DB_PORT || '3306'),
                  user: env.DB_USER,
                  password: env.DB_PASSWORD,
                  database: env.DB_NAME,
            },
      });

      createUserInDB(user: User) {
            this.db
                  .insert({
                        id: user.id,
                        name: user.name,
                        nickname: user.nickname,
                        email: user.email,
                  })
                  .into('users')
                  .then((res) => {
                        this.db.destroy();
                        return 'Usuário criado com sucesso';
                  })
                  .catch((err) => {
                        this.db.destroy();
                        throw 'Nickname ou email já existe';
                  });
      }
}

export default new DBController();
