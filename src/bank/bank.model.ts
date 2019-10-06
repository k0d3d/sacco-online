import * as mongoose from "mongoose";
import IBank from "./bank.interface";

const bankSchema = new mongoose.Schema({
  accountNumber: String,
  accountOwner: String,
  accountBalance: Number,
});

const bankModel = mongoose.model<IBank & mongoose.Document>("Bank", bankSchema);

export default bankModel;
