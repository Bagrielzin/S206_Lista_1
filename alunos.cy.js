/// <reference = cypress>
const uuid = () => Cypress._.random(0, 1e6)
const id = uuid()
const testname = `testname${id}`

describe('Testes de criação de um usuário do tipo aluno', () => {
  it('Teste de criar usuário com sucesso', () => {
    cy.visit('https://confianopai.com/login')
    cy.get(':nth-child(2) > .sc-ktwOfi').type("matheusb@")
    cy.get(':nth-child(3) > .sc-ktwOfi').type("123")
    cy.get('.sc-csKJxZ').click()
    cy.get('[href="/adm/novo-usuario"]').click()
    cy.get('.sc-dsAqUS').select('Aluno')
    cy.get(':nth-child(1) > .sc-bqOYya > .sc-gHjVMF').type(testname)
    cy.get(':nth-child(2) > .sc-bqOYya > .sc-gHjVMF').type(testname + "@")
    cy.get(':nth-child(3) > .sc-bqOYya > .sc-gHjVMF').type(testname)
    cy.get(':nth-child(4) > .sc-irLvIq > .sc-csKJxZ').click()
    cy.get('.Toastify__toast-body > :nth-child(2)').should("contain.text", "Usuário criado com sucesso!")
  })
  
  it('Teste de criar usuário com mesmo email', () => {
    cy.visit('https://confianopai.com/login')
    cy.get(':nth-child(2) > .sc-ktwOfi').type("matheusb@")
    cy.get(':nth-child(3) > .sc-ktwOfi').type("123")
    cy.get('.sc-csKJxZ').click()
    cy.get('[href="/adm/novo-usuario"]').click()
    cy.get('.sc-dsAqUS').select('Aluno')
    cy.get(':nth-child(1) > .sc-bqOYya > .sc-gHjVMF').type("Axl")
    cy.get(':nth-child(2) > .sc-bqOYya > .sc-gHjVMF').type("Axl8@")
    cy.get(':nth-child(3) > .sc-bqOYya > .sc-gHjVMF').type("666")
    cy.get(':nth-child(4) > .sc-irLvIq > .sc-csKJxZ').click()
    cy.get('.Toastify__toast-body > :nth-child(2)').should("contain.text", "Falha ao criar usuário.")
  })
  
  it('Teste de criar usuário com email invalido', () => {
    cy.visit('https://confianopai.com/login')
    cy.get(':nth-child(2) > .sc-ktwOfi').type("matheusb@")
    cy.get(':nth-child(3) > .sc-ktwOfi').type("123")
    cy.get('.sc-csKJxZ').click()
    cy.get('[href="/adm/novo-usuario"]').click()
    cy.get('.sc-dsAqUS').select('Aluno')
    cy.get(':nth-child(1) > .sc-bqOYya > .sc-gHjVMF').type(testname)
    cy.get(':nth-child(2) > .sc-bqOYya > .sc-gHjVMF').type(testname)
    cy.get(':nth-child(3) > .sc-bqOYya > .sc-gHjVMF').type(testname)
    cy.get(':nth-child(4) > .sc-irLvIq > .sc-csKJxZ').click()
    cy.get('.Toastify__toast-body > :nth-child(2)').should("contain.text", "Por favor, insira um endereço de email válido.")
  })

  it('Teste de tentativa de login de um novo usuário', () => {
    cy.visit('https://confianopai.com/login')
    cy.get(':nth-child(2) > .sc-ktwOfi').type("joao@")
    cy.get(':nth-child(3) > .sc-ktwOfi').type("123")
    cy.get('.sc-csKJxZ').click()
    cy.url().should('eq', 'https://confianopai.com/aluno/projetos')
  })

  it('Teste de tentativa de login de um novo usuário com senha errada', () => {
    cy.visit('https://confianopai.com/login')
    cy.get(':nth-child(2) > .sc-ktwOfi').type("joao@")
    cy.get(':nth-child(3) > .sc-ktwOfi').type("1234")
    cy.get('.sc-csKJxZ').click()
    cy.url().should('eq', 'https://confianopai.com/login')
  })

  it('Nome de usuário não é case sensetive (não difere letras maiusculas e minusculas', () => {
    cy.visit('https://confianopai.com/login')
    cy.get(':nth-child(2) > .sc-ktwOfi').type("JOAO@")
    cy.get(':nth-child(3) > .sc-ktwOfi').type("123")
    cy.get('.sc-csKJxZ').click()
    cy.wait(1000)
    cy.url().should('eq', 'https://confianopai.com/login')
  })
})