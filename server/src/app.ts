import * as bodyParser from "body-parser";
import * as express from "express";
import * as mongoose from "mongoose";
import Controller from "./interfaces/controller.interface";

class App {
  public app: express.Application;

  constructor(controllers: Controller[]) {
    this.app = express();

    this.connectToTheDatabase()

    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }

  public listen() {
    return this.app.listen(process.env.PORT);
  }

  public connectToTheDatabase() {
    const {
      MONGO_USER,
      MONGO_PASSWORD,
      MONGO_PATH,
    } = process.env;
    const path = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}${MONGO_PATH}?authSource=admin`;
    return mongoose.connect(
      path, { useNewUrlParser: true }
      );
    // @todo should handle promise here;
  }

  public getServer() {
    return this.app;
  }


  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
  }

  private initializeControllers(controllers: Controller[]) {
    controllers.forEach((controller) => {
      this.app.use("/", controller.router);
    });
  }
}

export default App;