const request = require("supertest")("http://localhost:3000/api");
const expect = require("chai").expect;

describe("POST /jobs", function () {
  it("get jobs", async function () {
    const response = await request.post("/jobs").send({
      search: "",
      sortBy: {
        department: "",
        education: "",
        experience: "",
        location: "",
        role: "",
      },
    });
    expect(response.status).to.eql(200);
    expect(response.body.jobs.length).to.eql(20);
  });
});
