import express from 'express';

class Server {
      public app: express.Application;

      constructor() {
            this.app = express();
            this.routes();
      }

      routes() {
            this.app.use(express.json());
            this.app.route('/signup').post()
      }
}

export default new Server();
