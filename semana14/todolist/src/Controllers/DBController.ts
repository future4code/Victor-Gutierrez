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

      async createUserInDB(user: User) {
            try {
                  await this.db
                        .insert({
                              id: user.id,
                              name: user.name,
                              nickname: user.nickname,
                              email: user.email,
                        })
                        .into('users');

                  this.db.destroy();
            } catch (error) {
                  this.db.destroy();
                  throw 'Nickname ou email já existente';
            }
      }

      async getUserInDB(id: string) {
            try {
                  const request = await this.db
                        .select('name', 'email')
                        .from('users')
                        .where({ id: id });
                  
                  return {
                        name: request[0].name,
                        email: request[0].email,
                  };
            } catch (error) {
                  this.db.destroy();
                  throw 'Usuário inexistente ou id inválido';
            }
      }
}

export default new DBController();
