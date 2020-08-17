import express from 'express';
import RoutesController from './Controllers/RoutesController';

class Server {
      public app: express.Application;

      constructor() {
            this.app = express();
            this.routes();
      }

      routes() {
            this.app.use(express.json());
            this.app.route('/api/signup').post(RoutesController.signUp);
            this.app.route('/api/login').post(RoutesController.login);
      }
}

export default new Server();
