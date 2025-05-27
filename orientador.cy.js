/// <reference = cypress>
const uuid = () => Cypress._.random(0, 1e6)
const id = uuid()
const testname = `testname${id}`

describe('Testes de criação de usuário', () => {

  it('Teste de criar orientador com sucesso', () => {
    login()
    seleciona_orientador()
    cy.get(':nth-child(1) > .sc-bqOYya > .sc-gHjVMF').type(testname)
    cy.get(':nth-child(2) > .sc-bqOYya > .sc-gHjVMF').type(testname + "@")
    cy.get(':nth-child(3) > .sc-bqOYya > .sc-gHjVMF').type(testname)
    cy.get(':nth-child(4) > .sc-irLvIq > .sc-csKJxZ').click()
    cy.get('.Toastify__toast-body > :nth-child(2)').should("contain.text", "Usuário criado com sucesso!")
  })

  it('Teste de criar orientador já existente', () => {
    login()
    seleciona_orientador()
    cy.get(':nth-child(1) > .sc-bqOYya > .sc-gHjVMF').type("testname782721")
    cy.get(':nth-child(2) > .sc-bqOYya > .sc-gHjVMF').type("testname782721@")
    cy.get(':nth-child(3) > .sc-bqOYya > .sc-gHjVMF').type("testname782721")
    cy.get(':nth-child(4) > .sc-irLvIq > .sc-csKJxZ').click()
    cy.get('.Toastify__toast-body > :nth-child(2)').should("contain.text", "Falha ao criar usuário.")
  })

  it('Teste de criar orientador com email invalido', () => {
    login()
    seleciona_orientador()
    cy.get(':nth-child(1) > .sc-bqOYya > .sc-gHjVMF').type(testname)
    cy.get(':nth-child(2) > .sc-bqOYya > .sc-gHjVMF').type(testname)
    cy.get(':nth-child(3) > .sc-bqOYya > .sc-gHjVMF').type(testname)
    cy.get(':nth-child(4) > .sc-irLvIq > .sc-csKJxZ').click()
    cy.get('.Toastify__toast-body > :nth-child(2)').should("contain.text", "Por favor, insira um endereço de email válido.")
  })

  it('Teste de criar orientador com campos obrigatórios vazios', () => {
    login()
    seleciona_orientador()
    cy.get(':nth-child(4) > .sc-irLvIq > .sc-csKJxZ').click()
    cy.url().should('eq', 'https://confianopai.com/adm/novo-usuario')
    
  })

  it('Teste de criar orientador com senha curta demais', () => {
    login()
    seleciona_orientador()
    cy.get(':nth-child(1) > .sc-bqOYya > .sc-gHjVMF').type(testname)
    cy.get(':nth-child(2) > .sc-bqOYya > .sc-gHjVMF').type(`${testname}@email.com`)
    cy.get(':nth-child(3) > .sc-bqOYya > .sc-gHjVMF').type("12")
    cy.get(':nth-child(4) > .sc-irLvIq > .sc-csKJxZ').click()
    cy.url().should('eq', 'https://confianopai.com/adm/novo-usuario')

  })

  it('Teste de criar usuário sem selecionar tipo de usuário', () => {
    login()

    cy.get('[href="/adm/novo-usuario"]').click()
    cy.get('input[name="nome"]').should('not.exist')
    cy.get('input[name="email"]').should('not.exist')
    cy.get('input[name="senha"]').should('not.exist')
    cy.get('button[type="submit"]').should('not.exist')
    cy.get(':nth-child(4) > .sc-irLvIq > .sc-csKJxZ').click()
    cy.get('.Toastify__toast-body > :nth-child(2)').should("contain.text", "Falha ao criar usuário.")

  })
})

function login() {
  cy.visit('https://confianopai.com/login')
  cy.get(':nth-child(2) > .sc-ktwOfi').type("matheusb@")
  cy.get(':nth-child(3) > .sc-ktwOfi').type("123")
  cy.get('.sc-csKJxZ').click()
}

function seleciona_orientador() {
  cy.get('[href="/adm/novo-usuario"]').click()
  cy.get('.sc-dsAqUS').select('Orientador')
}