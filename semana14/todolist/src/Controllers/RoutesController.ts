import { Response, Request } from 'express';

class RoutesController {
      async createUser(req: Request, res: Response) {
            const { name, nickname, email } = req.body;

            try {
                  //new user to db
                  /* - O seu código deve validar se os três campos estão completos (ou seja se não foram enviados ou se não estão vazios) e retornar um erro caso não estejam válidos
                  - O seu código deve gerar o id do usuário */
            } catch (error) {}
      }
      async getUser(req: Request, res: Response) {
            const { id } = req.params;

            try {
                  /* - O seu código deve validar se o id do usuário foi enviado
                  - O endpoint deve retornar um erro se não encontrar o usuário */
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
