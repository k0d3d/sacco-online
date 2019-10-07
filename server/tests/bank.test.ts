import "dotenv/config";
import BankController from "../src/bank/bank.controller";
import IBank from "../src/bank/bank.interface";
import App from "../src/app";

import * as faker from "faker";

describe("fetch members account information", async () => {
  const bank = new BankController();

  const app = new App([bank]);

  await app.connectToTheDatabase();

  it("should check if member has an account", async (done) => {

    const memberData = {
      email: faker.internet.email(),
    };

    const balance =  await bank.getMemberBalance(memberData.email);
    expect(balance).toBe(null);
    done();
  });

  it("should create a new bank account", async (done) => {
    const memberData = {
      email: faker.internet.email(),
    };

    const member = await bank.createMemberAccount(memberData.email);

    expect(member.accountNumber).toBeDefined();
    expect(member.accountBalance).toBe(0);
    done();
  });

  it("should submit a loan request thats below members savings", async () => {
    expect(canLoadApproved).toBe(true)
  })

  it("should require a 3rd party to approve the loan request", () => {
    expect(canBeApproved).toBe(false)
  });

  it("should check if a user can be a guarantor for a loan", async () => {
    expect(canBeGuarantor).toBeDefined();
  })

  it("should return a list of possible 3rd party guarantors", async () => {
    expect(guarantors.length).toBeGreaterThan(1);
  })

});
