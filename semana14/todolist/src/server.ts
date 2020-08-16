import express from 'express';
//Import controller de rotas

class Server {
      public app: express.Application;

      constructor() {
            this.app = express();
            this.routes();
            this.middleware();
      }

      middleware() {
            this.app.use(express.json());
      }

      routes() {}
}

export default new Server();
