import { Request, Response } from 'express';
import errorHandler from '../Helpers/errorHandler';
import checkForMissingParams from '../Helpers/checkMissingParams';
import DatabaseController from './DatabaseController';
import User from '../Models/User';

import validateEmail from '../Helpers/validateEmail';
import validadeParamLenght from '../Helpers/validateParamLenght';
import { Authenticator } from '../Services/authentication';

class RoutesController {
      async signUp(req: Request, res: Response) {
            const { name, email, password } = req.body;

            try {
                  checkForMissingParams(name, email, password);
                  validateEmail(email);
                  validadeParamLenght(password, 'senha', 6);

                  await DatabaseController.createUser(
                        new User(name, email, password)
                  );

                  res.status(201).json({
                        message: 'Usuário criado com sucesso',
                  });
            } catch (error) {
                  if (error === 'O usuário já existe') {
                        errorHandler(error, res, 403);
                  } else if (
                        error === 'Houve um erro ao criar o novo usuário'
                  ) {
                        errorHandler(error, res, 500);
                  } else {
                        errorHandler(error, res);
                  }
            }
      }
      async login(req: Request, res: Response) {
            const { email, password } = req.body;

            try {
                  checkForMissingParams(email, password);
                  validateEmail(email);

                  const request = await DatabaseController.getUserByEmail(
                        email
                  );

                  res.status(201).json({
                        message: `Usuário ${request.email} logado com sucesso`,
                        token: new Authenticator().generateToken(request.id),
                  });
            } catch (error) {
                  if (error === 'O usuário já existe') {
                        errorHandler(error, res, 403);
                  } else if (
                        error === 'Houve um erro ao criar o novo usuário'
                  ) {
                        errorHandler(error, res, 500);
                  } else {
                        errorHandler(error, res);
                  }
            }
      }
}

export default new RoutesController();
