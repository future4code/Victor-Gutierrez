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
                  await this.getUserInDB(task.creator);
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

      async getTaskInDB(id: string) {
            try {
                  const request = await this.db('todolist')
                        .select('*')
                        .where({ id: id });

                  return {
                        title: request[0].title,
                        description: request[0].description,
                        deadline_date: request[0].deadline_date,
                        creator: request[0].creator,
                  };
            } catch (error) {
                  this.db.destroy();
                  throw 'Tarefa inexistente ou id inválido';
            }
      }

      async getTaskInDBByQuery(query: string) {
            try {
                  const request = await this.db('todolist')
                        .select('*')
                        .where('title', 'like', `%${query}%`);

                  return request.map((item) => {
                        return new Task(
                              item.title,
                              item.description,
                              item.deadline_date,
                              item.creator
                        );
                  });
            } catch (error) {
                  this.db.destroy();
                  throw 'Houve um erro na busca';
            }
      }

      async deleteTaskinDB(id: string) {
            try {
                  await this.db('todolist').delete().where({ id: id });
            } catch (error) {
                  this.db.destroy();
                  throw 'Tarefa inexistente ou id inválido';
            }
      }
}

export default new DBController();
