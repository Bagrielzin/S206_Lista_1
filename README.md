# S206-Lista-1
Repositório da primeira lista do laboratório de S206
<br>
<br>

# Testes do site https://confianopai.com/
<br>
<br>

# Alunos

Variáveis auxiliares utilizadas
```javascript
const uuid = () => Cypress._.random(0, 1e6)
const id = uuid()
const testname = `testname${id}`
```
<br>
<br>

1º Teste: Teste de criar usuário com sucesso
Esse teste verifica se é possível criar um usuário (aluno)
```javascript
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
```
<br>
<br>

2º Teste: Teste de criar usuário com mesmo email
Esse teste verifica se é possível criar um usuário com o mesmo email já utilizado na criação de outro usuário
```javascript
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
```

<br>
<br>

3º Teste: Teste de criar usuário com email invalido
Esse teste verifica se é possível criar um usuário (aluno) com um email não existente
```javascript
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
```

<br>
<br>

4º Teste: Teste de tentativa de login de um novo usuário
Esse teste verifica se é possível fazer o login 
com um usuário criado
```javascript
it('Teste de tentativa de login de um novo usuário', () => {
    cy.visit('https://confianopai.com/login')
    cy.get(':nth-child(2) > .sc-ktwOfi').type("joao@")
    cy.get(':nth-child(3) > .sc-ktwOfi').type("123")
    cy.get('.sc-csKJxZ').click()
    cy.url().should('eq', 'https://confianopai.com/aluno/projetos')
  })
```

<br>
<br>

5º Teste: Teste de tentativa de login de um novo usuário com senha errada
Esse teste verifica se é possível um usuário fazer login utilizando uma senha incorreta
```javascript
it('Teste de tentativa de login de um novo usuário com senha errada', () => {
    cy.visit('https://confianopai.com/login')
    cy.get(':nth-child(2) > .sc-ktwOfi').type("joao@")
    cy.get(':nth-child(3) > .sc-ktwOfi').type("1234")
    cy.get('.sc-csKJxZ').click()
    cy.url().should('eq', 'https://confianopai.com/login')
  })
```

<br>
<br>

6º Teste: Nome de usuário não é case sensetive (não difere letras maiusculas e minusculas)
Esse teste verifica se o site faz diferença entre letras maiusculas e minusculas no login de um usuário
```javascript
it('Nome de usuário não é case sensetive (não difere letras maiusculas e minusculas', () => {
    cy.visit('https://confianopai.com/login')
    cy.get(':nth-child(2) > .sc-ktwOfi').type("JOAO@")
    cy.get(':nth-child(3) > .sc-ktwOfi').type("123")
    cy.get('.sc-csKJxZ').click()
    cy.wait(1000)
    cy.url().should('eq', 'https://confianopai.com/login')
  })
```

<br>
<br>

Relatório mochawesme dos teste dos alunos:
![Screenshot_2](https://github.com/user-attachments/assets/d6245059-a9a2-4f25-afb2-0d1c7f744bd8)

