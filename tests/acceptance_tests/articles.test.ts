import * as request from "supertest";
import { app } from '../../src/server'

describe("GET /articles", () => {
 it("SHOULD return 200Ok", done => {
  request(app)
   .get("/articles")
   .end((err, res) => {
      expect(res.status).toBe(200);
      done();
   });
 });
});