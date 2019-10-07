import * as mongoose from "mongoose";
import IMember from "./member.interface";

const memberSchema = new mongoose.Schema({
  email: String,
  firstName: String,
  lastName: String,
  role: String,
});

const memberModel = mongoose.model<IMember & mongoose.Document>("Member", memberSchema);

export default memberModel;
