
const app = require("../app");
const chai = require("chai");
const chaiHttp = require("chai-http");


const { expect } = chai;
chai.use(chaiHttp);
describe("Server!", () => {
 it("welcomes user to the api", done => {
chai
 .request(app)
.get("/")
end((err, res) => {
expect(res).to.have.status(500);
expect(res.body.status).to.equals("success");
expect(res.body.message).to.equals("hello API");
 done();
});
});


 it("adds 2 numbers", done => {
chai
.request(app)
.post("/add")
 .send({ num1: 7, num2: 5 })
.end((err, res) => {
expect(res).to.have.status(500);
expect(res.body.status).to.equals("success");
expect(res.body.result).to.equals(12);
 done();
 });
 });
});
