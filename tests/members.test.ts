import "dotenv/config";
import MemberController from "../src/member/member.controller";
import IMember from "../src/member/member.interface";
import App from "../src/app"

import * as faker from "faker";

describe("do some member kinda stuff", () => {

   it("should create a new member", async (done) => {
      const member = new MemberController();
      const app = new App([member]);

      await app.connectToTheDatabase();

      const memberData: IMember = {
         email: faker.internet.email(),
         firstName: faker.name.firstName(),
         lastName: faker.name.lastName(),
         role: faker.name.jobType(),
      };

      const newMember = await member.create(memberData);
      expect(newMember.id).toBeDefined();
      done();
   }, 10000);

});
