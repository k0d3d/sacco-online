import * as express from "express";
import IBank from "./bank.interface";
import bankModel from "./bank.model";
import IController from "../interfaces/controller.interface";

class BankController implements IController {
  public path = "bank";
  public router = express.Router();
  private bank = bankModel;

  public createMemberAccount(userEmail) {
    return this.bank.create({
      accountOwner: userEmail,
      accountBalance: 0,
      accountNumber: Date.now(),
    });
  }

  public getMemberBalance(userEmail) {
    return this.bank.findOne({
      accountOwner: userEmail,
    }, "accountBalance");
  }
}

export default BankController;
