import { Response, Request } from 'express';
import DBController from './DBController';
import checkForMissingParams from '../Helpers/missingParamValidator';
import User from '../Models/User';

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
                  res.status(400).json({ message: error });
            }
      }
      async getUser(req: Request, res: Response) {
            const { id } = req.params;

            try {
                  checkForMissingParams(id);
            } catch (error) {}
      }
      async editUser(req: Request, res: Response) {
            const { id } = req.params;
            const { name, nickname, email } = req.body;

            //form destructuring
            try {
                  /* - O seu código deve validar se o id do usuário foi enviado
                        - O seu código só deve alterar o que for enviado
                  - Se algum valor enviado for vazio, deve retornar um erro */
            } catch (error) {}
      }
      async createTask(req: Request, res: Response) {
            const { title, description, deadline_date, creator } = req.body;

            try {
                  //new task
                  /* - O seu código deve validar se todos os campos não estão vazios,
- O seu código deve gerar o id da tarefa,
- A data deve se recebida no formato mostrado acima: `DD/MM/YYYY` e o seu código deve fazer a conversão necessária para salvar no banco */
            } catch (error) {}
      }
      async getTaskById(req: Request, res: Response) {
            const { id } = req.params;

            try {
                  //new task
                  /* -- O seu código deve validar se o id da task foi enviado
- O endpoint deve retornar um erro se não encontrar a task
- Perceba que o endpoint retorna informações tanto da tarefa como do usuário criador
- O seu código deve converter a data recebida do banco para o formato mostrado acima (`DD/MM/YYYY`) */
            } catch (error) {}
      }

      async deleteTask(req: Request, res: Response) {
            const { id } = req.params;
            try {
            } catch (error) {}
      }

      async searchTask(req: Request, res: Response) {
            const { query } = req.query;

            try {
                  //new task
                  /* -- O seu código deve validar se o id da task foi enviado
- O endpoint deve retornar um erro se não encontrar a task
- Perceba que o endpoint retorna informações tanto da tarefa como do usuário criador
- O seu código deve converter a data recebida do banco para o formato mostrado acima (`DD/MM/YYYY`) */
            } catch (error) {}
      }
}

export default new RoutesController();
