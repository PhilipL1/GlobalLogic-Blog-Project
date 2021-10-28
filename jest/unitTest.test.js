const { checkUser } = require("./unitTest");

describe("Name of the group", () => {
  it("should workkkk", () => {
    const user = checkUser();
    expect(user).toEqual({ firstName: "IDC" });
  });
});
