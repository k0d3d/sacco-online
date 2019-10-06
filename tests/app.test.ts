import "dotenv/config";
import * as request from "supertest";
import App from "../src/app";
import MemberController from "../src/member/member.controller";

describe("creates the application http server properly", () => {
  it("should start listening for connections", async () => {
    const app = new App([
      new MemberController(),
    ]);
    const server = await app.listen();
    // const {port} = server.address();
    expect(server.address()).toHaveProperty("port");
    // expect(port).toEqual(process.env.PORT)
  });
});
