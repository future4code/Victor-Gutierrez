import { Request, Response } from 'express';
import errorHandler from '../Helpers/errorHandler';
import checkForMissingParams from '../Helpers/checkMissingParams';
import DatabaseController from './DatabaseController';
import User from '../Models/User';

class RoutesController {
      async signUp(req: Request, res: Response) {
            const { name, email, password } = req.body;

            try {
                  checkForMissingParams(name, email, password);

                  await DatabaseController.createUser(
                        new User(name, email, password)
                  );

                  res.status(201).json({
                        message: 'Usuário criado com sucesso',
                  });
            } catch (error) {
                  errorHandler(error, res);
            }
      }
}

export default new RoutesController();
