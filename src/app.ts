import express from 'express';
import cors from 'cors';
import swaggerUI from 'swagger-ui-express';

import routes from './routes/index.router';
import swaggerDocs from './swagger.json';

class App {
  public server: express.Application;

  public constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  public init(): express.Application {
    return this.server;
  }

  private middlewares(): void {
    this.server.use(express.json({}));
    this.server.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
    this.server.use(
      express.urlencoded({
        extended: true,
      })
    );
    this.server.use(cors());
  }

  private routes(): void {
    this.server.use(...routes);
  }
}

export default App;
