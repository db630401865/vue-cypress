/// <reference types="Cypress" />

// https://docs.cypress.io/api/introduction/api.html

// describe("My First Test", () => {
//   it("Visits the app root url", () => {
//     cy.visit("/");
//     cy.contains("h1", "conduit");
//   });
// });



describe("用户登陆", () => {
  it("登陆成功，跳转到首页", () => {
    cy.visit("#/login");
    cy.get('input[data-testid="email"]')
      .type('lpzmail@163.com') // 输入邮箱
    cy.get('input[data-testid="password"]')
      .type('12345678') // 输入密码
    cy.get('button[data-testid="submit"]')
      .click() // 点击登录按钮

    cy.url().should('contain', '#/') //url是否包含#/
    cy.contains("h1", "conduit"); // h1标签是否包含conduit
  });

  it("用户失败，展示错误提示现象", () => {
    cy.visit("#/login");
    cy.get('input[data-testid="email"]')
      .type('lpzmail@163.com') // 输入邮箱
    cy.get('input[data-testid="password"]')
      .type('12345678') // 输入密码
    cy.get('button[data-testid="submit"]')
      .click() // 点击登录按钮

    cy.get('[data-testid="error-message"]').should('exist')
  });
});


//当我们测试登陆状态的时候手动写死
