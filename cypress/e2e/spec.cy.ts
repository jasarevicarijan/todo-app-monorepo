describe("Todo End to End test", () => {
  it("Rendering test", () => {
    cy.visit("/");
    cy.contains("Todo Planner").should("be.visible");
    cy.contains("Add new Todo").should("be.visible");
    cy.get("input").should("be.visible");
  });
  it("Search contains user input", () => {
    cy.visit("/");
    cy.get("input").type("Fake description");
    cy.get("input").should("have.value", "Fake description");
  });
  it("Test Add Todo", () => {
    cy.visit("/");
    cy.contains("Add new Todo").click();
    cy.url().should("include", "/todo/create");
    cy.get("textarea").type("Fake Todo note");
    cy.get("textarea").should("have.value", "Fake Todo note");
    cy.get("button").contains("Save Todo").click();
    cy.url().should("include", "/todo/list");
    cy.get("p").contains("Status: pending");
    cy.contains("Fake Todo note").click();
    cy.url().should("include", "/todo/edit");
  });
  it("Test Cancel on Add new Todo screen", () => {
    cy.visit("/");
    cy.get("button").contains("Add new Todo").click();
    cy.get("button").contains("Cancel").click();
    cy.url().should("include", "/todo/list");
  });
  it("Test Cancel on Edit Todo screen", () => {
    cy.visit("/");
    cy.contains("Add new Todo").click();
    cy.get("textarea").type("Fake Todo note");
    cy.get("button").contains("Save Todo").click();
    cy.contains("Fake Todo note").click();
    cy.url().should("include", "/todo/edit");
    cy.get("button").contains("Cancel").click();
    cy.url().should("include", "/todo/list");
  });
  it("Test Search by description finds nothing", () => {
    cy.visit("/");
    cy.contains("Add new Todo").click();
    cy.get("textarea").type("Fake Todo note");
    cy.get("button").contains("Save Todo").click();
    cy.get("input").type("Fakedd");
    cy.get("p").contains("Fake Todo note").should("not.exist");
  });
  it("Test Search by description finds match", () => {
    cy.visit("/");
    cy.contains("Add new Todo").click();
    cy.get("textarea").type("Fake Todo note");
    cy.get("button").contains("Save Todo").click();
    cy.get("input").type("Fake");
    cy.get("p").contains("Fake Todo note").should("exist");
  });
  it("Test Save on EditTodo screen", () => {
    cy.visit("/");
    cy.contains("Add new Todo").click();
    cy.get("textarea").type("Fake Todo note");
    cy.get("button").contains("Save Todo").click();
    cy.contains("Fake Todo note").click();
    cy.get("textarea").clear().type("Fake Todo note updated");
    cy.get("button").contains("Save Todo").click();
    cy.get("p").contains("Fake Todo note updated").should("exist");
  });
  it("Test Move to In Progress", () => {
    cy.visit("/");
    cy.contains("Add new Todo").click();
    cy.get("textarea").type("Fake Todo note");
    cy.get("button").contains("Save Todo").click();
    cy.contains("Fake Todo note").click();
    cy.get("button").contains("Move to In Progress").click();
    cy.get("p").contains("Status: in_progress");
  });
  it("Test Delete Todo", () => {
    cy.visit("/");
    cy.contains("Add new Todo").click();
    cy.get("textarea").type("Fake Todo note");
    cy.get("button").contains("Save Todo").click();
    cy.contains("Fake Todo note").click();
    cy.get("button").contains("Save Todo").click();
    cy.url().should("include", "/todo/list");
    cy.get("p").should("not.contain", "Fake Todo note");
  });
  it("Test Mark as Done", () => {
    cy.visit("/");
    cy.contains("Add new Todo").click();
    cy.get("textarea").type("Fake Todo note");
    cy.get("button").contains("Save Todo").click();
    cy.contains("Fake Todo note").click();
    cy.get("button").contains("Move to In Progress").click();
    cy.contains("Fake Todo note").click();
    cy.get("button").contains("Mark as Done").click();
    cy.get("p").contains("Status: done");

  });
});
