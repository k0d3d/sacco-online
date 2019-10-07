import * as express from "express";
import IController from "../interfaces/controller.interface";

export default class TransactionController implements IController {
  public path = "transaction";
  public router = express.Router();

}