describe("Test card elements", function () {
  it("click a Read me in IDC card ", function () {
    cy.visit("localhost:8080/");
    cy.get("#1").within(() => {
      return cy.contains("Read me").click();
    });
    cy.url().should("include", "/new/1");
    cy.contains("IDC");
  });

  it("click a Read me in Milestones card ", function () {
    cy.visit("localhost:8080/");
    cy.get("#2").within(() => {
      return cy.contains("Read me").click();
    });
    cy.url().should("include", "/new/2");
    cy.contains("Milestones");
  });

  it("click a Read me in Teaching code card ", function () {
    cy.visit("localhost:8080/");
    cy.get("#3").within(() => {
      return cy.contains("Read me").click();
    });
    cy.url().should("include", "/new/3");
    cy.contains("Teaching code");
  });
});

describe("Test home page", function () {
  it("click home element ", function () {
    cy.visit("localhost:8080/new/3");
    cy.contains("Home").click();
    cy.url().should("contain", "localhost:8080/");
    cy.contains("Milestones");
  });
});

describe("Test Nav bar", function () {
  it("show navbar ", function () {
    cy.visit("localhost:8080/new/3");
    cy.get(".navbar").should("be.visible");
  });
});
