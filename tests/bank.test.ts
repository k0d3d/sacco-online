import "dotenv/config";
import BankController from "../src/bank/bank.controller";
import IBank from "../src/bank/bank.interface";
import App from "../src/app";

import * as faker from "faker";

describe("fetch members account information", () => {
  it("should check if member has an account", async (done) => {

    const memberData = {
      email: faker.internet.email(),
    };
    const bank = new BankController();

    const app = new App([bank]);

    await app.connectToTheDatabase();

    const balance =  await bank.getMemberBalance(memberData.email);
    expect(balance).toBe(null);
    done();
  });

  it("should create a new bank account", async (done) => {
    const memberData = {
      email: faker.internet.email(),
    };
    const bank = new BankController();

    const app = new App([bank]);

    await app.connectToTheDatabase();

    const member = await bank.createMemberAccount(memberData.email);

    expect(member.accountNumber).toBeDefined();
    expect(member.accountBalance).toBe(0);
    done();
  });

  it("should allow a user make a payment", async () => {
    
  })

});
