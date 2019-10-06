import * as express from "express";
// import PostNotFoundException from "../exceptions/PostNotFoundException";
import IController from "../interfaces/controller.interface";
// import RequestWithUser from "../interfaces/requestWithUser.interface";
// import authMiddleware from "../middleware/auth.middleware";
// import validationMiddleware from "../middleware/validation.middleware";
// import CreatePostDto from "./post.dto";
import IMember from "./member.interface";
import memberModel from "./member.model";

class MemberController implements IController {
  public path = "/members";
  public router = express.Router();
  private member = memberModel;
 
  public create = async (memberData: IMember): Promise<IMember | any> => {
    return memberModel.create(memberData);
  }

}

export default MemberController;
