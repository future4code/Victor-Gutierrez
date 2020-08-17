import User from '../Models/User';
import knex from 'knex';
import Task from '../Models/Task';
import dateSQLParser from '../Helpers/dateSQLParser';
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
                  await this.db('users').insert({
                        id: user.id,
                        name: user.name,
                        nickname: user.nickname,
                        email: user.email,
                  });
            } catch (error) {
                  this.db.destroy();
                  throw 'Nickname ou email já existente';
            }
      }

      async getUserInDB(id: string) {
            try {
                  const request = await this.db('users')
                        .select('name', 'email', 'nickname')
                        .where({ id: id });

                  return {
                        name: request[0].name,
                        email: request[0].email,
                        nickname: request[0].nickname,
                  };
            } catch (error) {
                  this.db.destroy();
                  throw 'Usuário inexistente ou id inválido';
            }
      }

      async editUser(id: string, name: string, nickname: string) {
            try {
                  await this.db('users')
                        .update({ name: name, nickname: nickname })
                        .where({ id: id });
            } catch (error) {
                  this.db.destroy();
                  throw 'Usuário inexistente ou id inválido';
            }
      }

      async createTask(task: Task) {
            try {
                  await this.db('todolist').insert({
                        id: task.id,
                        title: task.title,
                        description: task.description,
                        creator: task.creator,
                        deadline_date: dateSQLParser(task.deadline_date),
                  });
            } catch (error) {
                  this.db.destroy();
                  throw error;
            }
      }
}

export default new DBController();
