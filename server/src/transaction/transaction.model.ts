import * as mongoose from "mongoose";
import ITransaction from "./transaction.interface";

const transactionSchema = new mongoose.Schema({
  transactionType: String,
  transactionAmount: Number,
  transactionStatus: Boolean,
  created: String,
  author: String,
});

const transactionModel = mongoose.model<ITransaction & mongoose.Document>("transaction", transactionSchema);

export default transactionModel;
