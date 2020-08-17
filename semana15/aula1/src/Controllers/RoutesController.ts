import express, { Request, Response } from 'express';
import errorHandler from '../Helpers/errorHandler';

class RoutesController {
      async signUp(req: Request, res: Response) {
            const { name, email, password } = req.body;

            try {
                  //add to database
            } catch (error) {
                  errorHandler(error, res);
            }
      }
}
