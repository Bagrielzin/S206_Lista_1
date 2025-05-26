/// <reference types="cypress" />

describe('Teste de criar uma nova fase', ()=>{
    it('Teste de uma fase com sucesso', () => {
        cy.visit('https://confianopai.com/login')
        cy.get(':nth-child(2) > .sc-ktwOfi').type("matheusb@")
        cy.get(':nth-child(3) > .sc-ktwOfi').type("123")
        cy.get('.sc-csKJxZ').click()
        cy.get('[href="/adm/fases"]').click()
        cy.get('.sc-ia-dotI').click()
        cy.get(':nth-child(1) > .sc-jnbAOD').type('Final')
        cy.get(':nth-child(2) > .sc-jnbAOD').type('2025-06-09')
        cy.get(':nth-child(3) > .sc-jnbAOD').type('6')
        cy.get('.btn-primary').click()

    })
})

    it('Teste de uma fase com mesmo nome', () => {
        cy.visit('https://confianopai.com/login')
        cy.get(':nth-child(2) > .sc-ktwOfi').type("matheusb@")
        cy.get(':nth-child(3) > .sc-ktwOfi').type("123")
        cy.get('.sc-csKJxZ').click()
        cy.get('[href="/adm/fases"]').click()
        cy.get('.sc-ia-dotI').click()
        cy.get(':nth-child(1) > .sc-jnbAOD').type('Final')
        cy.get(':nth-child(2) > .sc-jnbAOD').type('2025-09-09')
        cy.get(':nth-child(3) > .sc-jnbAOD').type('2')
        cy.get('.btn-primary').click()

    })

    it('Teste de uma fase com data limite ja passada', () => {
        cy.visit('https://confianopai.com/login')
        cy.get(':nth-child(2) > .sc-ktwOfi').type("matheusb@")
        cy.get(':nth-child(3) > .sc-ktwOfi').type("123")
        cy.get('.sc-csKJxZ').click()
        cy.get('[href="/adm/fases"]').click()
        cy.get('.sc-ia-dotI').click()
        cy.get(':nth-child(1) > .sc-jnbAOD').type('Final')
        cy.get(':nth-child(2) > .sc-jnbAOD').type('2025-05-05')
        cy.get(':nth-child(3) > .sc-jnbAOD').type('2')
        cy.get('.btn-primary').click()

    })

    it('Teste de uma fase com entregas = 0', () => {
        cy.visit('https://confianopai.com/login')
        cy.get(':nth-child(2) > .sc-ktwOfi').type("matheusb@")
        cy.get(':nth-child(3) > .sc-ktwOfi').type("123")
        cy.get('.sc-csKJxZ').click()
        cy.get('[href="/adm/fases"]').click()
        cy.get('.sc-ia-dotI').click()
        cy.get(':nth-child(1) > .sc-jnbAOD').type('Final')
        cy.get(':nth-child(2) > .sc-jnbAOD').type('2025-07-07')
        cy.get(':nth-child(3) > .sc-jnbAOD').type('0')
        cy.get('.btn-primary').click()

    })
