import { Response, Request, response } from 'express';
import DBController from './DBController';
import checkForMissingParams from '../Helpers/missingParamValidator';
import User from '../Models/User';
import errorHandler from '../Helpers/errorHandler';
import Task from '../Models/Task';

class RoutesController {
      db = DBController;

      async createUser(req: Request, res: Response) {
            const { name, nickname, email } = req.body;

            try {
                  checkForMissingParams(name, nickname, email);
                  await DBController.createUserInDB(
                        new User(name, nickname, email)
                  );

                  res.status(200).json({
                        message: 'Usuário criado com sucesso',
                  });
            } catch (error) {
                  errorHandler(error, res);
            }
      }
      async getUser(req: Request, res: Response) {
            const { id } = req.params;

            try {
                  checkForMissingParams(id);
                  const request = await DBController.getUserInDB(id);

                  res.status(200).json({ user: request });
            } catch (error) {
                  errorHandler(error, res);
            }
      }
      async editUser(req: Request, res: Response) {
            const { id } = req.params;
            const { name, nickname } = req.body;

            try {
                  checkForMissingParams(id, name, nickname);
                  DBController.editUser(id, name, nickname);

                  res.status(200).json({
                        user: await DBController.getUserInDB(id),
                  });
            } catch (error) {
                  errorHandler(error, res);
            }
      }
      async createTask(req: Request, res: Response) {
            const { title, description, deadline_date, creator } = req.body;

            try {
                  checkForMissingParams(
                        title,
                        description,
                        deadline_date,
                        creator
                  );
                  await DBController.createTask(
                        new Task(title, description, deadline_date, creator)
                  );

                  res.status(200).json({
                        message: 'Tarefa criada com sucesso',
                  });
            } catch (error) {
                  errorHandler(error, res);
            }
      }
      async getTaskById(req: Request, res: Response) {
            const { id } = req.params;

            try {
                  checkForMissingParams(id);

                  const task = await DBController.getTaskInDB(id);

                  return res.status(200).json({ task: task });
            } catch (error) {
                  errorHandler(error, res);
            }
      }

      async deleteTask(req: Request, res: Response) {
            const { id } = req.params;
            try {
            } catch (error) {
                  errorHandler(error, res);
            }
      }

      async searchTask(req: Request, res: Response) {
            const { query } = req.query;

            try {
                  const search = await DBController.getTaskInDBByQuery(
                        String(query)
                  );

                  return res.status(200).json({ tasks: search });
            } catch (error) {
                  errorHandler(error, res);
            }
      }
}

export default new RoutesController();
