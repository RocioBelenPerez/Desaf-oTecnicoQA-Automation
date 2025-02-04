const url = Cypress.env("URL");
const user = Cypress.env("USERS");

class Demo {
  elements = {
    logo: () => cy.get(".login_logo"),
    username: () => cy.get('[data-test="username"]'),
    password: () => cy.get('[data-test="password"]'),
    btnLogin: () => cy.get('[data-test="login-button"]'),
    header: () => cy.get(".header_label"),
    logoDashboard: () => cy.get(".app_logo"),
    title: () => cy.get('[data-test="title"]'),
    inventoryList: () => cy.get('[data-test="inventory-list"]'),
  };

  url() {
    cy.visit(url, { cache: false });
    cy.url().should("eq", "https://www.saucedemo.com/");
  }
  typeUsername() {
    this.elements.username().should("be.visible").type(user.userStandard.user);
  }
  typePassword() {
    this.elements.password().should("be.visible").type(user.userStandard.pass);
  }
  clickBtnLogin() {
    this.elements.btnLogin().should("be.visible").click();
  }
  dashboard() {
    this.elements.header().should("be.visible");
    this.elements.logoDashboard().should("be.visible");
  }
  inventoryList() {
    this.elements.title().should("be.visible").and("contain.text", "Products");
  }
}

export default new Demo();
