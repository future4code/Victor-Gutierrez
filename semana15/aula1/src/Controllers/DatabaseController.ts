import { IUser } from '../Types/index';
import { v4 } from 'uuid';

import dotenv from 'dotenv';
import knex from 'knex';

dotenv.config();

class DatabaseController {
      database = knex({
            client: 'mysql',
            connection: {
                  host: process.env.DB_HOST,
                  port: Number(process.env.DB_PORT || '3306'),
                  user: process.env.DB_USER,
                  password: process.env.DB_PASSWORD,
                  database: process.env.DB_NAME,
            },
      });

      async createUser(user: IUser): Promise<void> {
            try {
                  await this.database
                        .insert({
                              id: v4(),
                              name: user.name,
                              email: user.email,
                              password: user.password, // =( Add bycrpt please
                        })
                        .into('users');
            } catch (error) {
                  console.log(error);
                  throw 'Não foi possível criar o usuário';
            }
      }
}

export default new DatabaseController();
