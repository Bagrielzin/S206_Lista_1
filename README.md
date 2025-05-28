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


# Orientador

Variáveis auxiliares utilizadas
```javascript
const uuid = () => Cypress._.random(0, 1e6)
const id = uuid()
const testname = `testname${id}`
```
<br>
<br>

Funções auxiliares utilizadas
```javascript
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
```
<br>
<br>

1º Teste: Teste de criar orientador com sucesso
Esse teste cria um orientador e verifica se a criação foi realizada com sucesso
```javascript
it('Teste de criar orientador com sucesso', () => {
    login()
    seleciona_orientador()
    cy.get(':nth-child(1) > .sc-bqOYya > .sc-gHjVMF').type(testname)
    cy.get(':nth-child(2) > .sc-bqOYya > .sc-gHjVMF').type(testname + "@")
    cy.get(':nth-child(3) > .sc-bqOYya > .sc-gHjVMF').type(testname)
    cy.get(':nth-child(4) > .sc-irLvIq > .sc-csKJxZ').click()
    cy.get('.Toastify__toast-body > :nth-child(2)').should("contain.text", "Usuário criado com sucesso!")
  })
```
<br>
<br>

2º Teste: Teste de criar orientador já existente
Esse teste verifica se é possível criar um orientador que já foi criado
```javascript
it('Teste de criar orientador já existente', () => {
    login()
    seleciona_orientador()
    cy.get(':nth-child(1) > .sc-bqOYya > .sc-gHjVMF').type("testname782721")
    cy.get(':nth-child(2) > .sc-bqOYya > .sc-gHjVMF').type("testname782721@")
    cy.get(':nth-child(3) > .sc-bqOYya > .sc-gHjVMF').type("testname782721")
    cy.get(':nth-child(4) > .sc-irLvIq > .sc-csKJxZ').click()
    cy.get('.Toastify__toast-body > :nth-child(2)').should("contain.text", "Falha ao criar usuário.")
  })
```
<br>
<br>

3º Teste: Teste de criar orientador com email invalido
Esse teste verifica se é possível criar um orientador com email inválido
```javascript
it('Teste de criar orientador com email invalido', () => {
    login()
    seleciona_orientador()
    cy.get(':nth-child(1) > .sc-bqOYya > .sc-gHjVMF').type(testname)
    cy.get(':nth-child(2) > .sc-bqOYya > .sc-gHjVMF').type(testname)
    cy.get(':nth-child(3) > .sc-bqOYya > .sc-gHjVMF').type(testname)
    cy.get(':nth-child(4) > .sc-irLvIq > .sc-csKJxZ').click()
    cy.get('.Toastify__toast-body > :nth-child(2)').should("contain.text", "Por favor, insira um endereço de email válido.")
  })
```
<br>
<br>

4º Teste: Teste de criar orientador com campos obrigatórios vazios
Esse teste verifica se é possível criar um orientador sem preencher informação nenhuma
```javascript
it('Teste de criar orientador com campos obrigatórios vazios', () => {
    login()
    seleciona_orientador()
    cy.get(':nth-child(4) > .sc-irLvIq > .sc-csKJxZ').click()
    cy.url().should('eq', 'https://confianopai.com/adm/novo-usuario')
    
  })
```
<br>
<br>

5º Teste: Teste de criar orientador com senha curta demais
Esse teste verifica se é possível criar um orientador com uma senha fraca
```javascript
it('Teste de criar orientador com senha curta demais', () => {
    login()
    seleciona_orientador()
    cy.get(':nth-child(1) > .sc-bqOYya > .sc-gHjVMF').type(testname)
    cy.get(':nth-child(2) > .sc-bqOYya > .sc-gHjVMF').type(`${testname}@email.com`)
    cy.get(':nth-child(3) > .sc-bqOYya > .sc-gHjVMF').type("12")
    cy.get(':nth-child(4) > .sc-irLvIq > .sc-csKJxZ').click()
    cy.url().should('eq', 'https://confianopai.com/adm/novo-usuario')

  })
```
<br>
<br>

6º Teste: Teste de criar usuário sem selecionar tipo de usuário (FALHA)
Esse teste verifica se é possível criar um usuário sem sem selecionar o tipo
```javascript
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
```
<br>
<br>

Relatório mochawesme dos teste do orientador:
![image](https://github.com/user-attachments/assets/a50e0649-895f-479f-9f65-2610f12c4b8b)

<br>
<br>

# Projetos

1º Teste: Teste de adicionar membro com falha
Esse teste verifica se se há alguma falha ao adicionar um membro no grupo
```javascript
it('passes', () => {
    cy.visit('https://confianopai.com/login')
    cy.get(':nth-child(2) > .sc-ktwOfi').type('matheusb@')
    cy.get(':nth-child(3) > .sc-ktwOfi').type('123')
    cy.get('.sc-csKJxZ').click()
    cy.get('.sc-ckdEwu').click()
    cy.get('.sc-ckdEwu').type('projeto x')
    cy.get('.sc-gjLLEI').click()
    cy.get('.sc-cPtzlb > .sc-irLvIq > .sc-csKJxZ').click()
    cy.get('.sc-ppzwM').type('ppppp@gmail.com')
    cy.get('.sc-hiTDLB').click()
    cy.get('.sc-cSxRuM > :nth-child(5) > :nth-child(3)').should("contain.text","Integrante 3")
  })
})
```
<br>
<br>

2º Teste: Teste de excluir um membro
Esse teste verifica se é possível excluir um membro da equipe
```javascript
it('passes', () => {
    cy.visit('https://confianopai.com/login')
    cy.get(':nth-child(2) > .sc-ktwOfi').type('matheusb@')
    cy.get(':nth-child(3) > .sc-ktwOfi').type('123')
    cy.get('.sc-csKJxZ').click()
    cy.get('.sc-ckdEwu').click()
    cy.get('.sc-ckdEwu').type('projeto x')
    cy.get('.sc-gjLLEI').click()
    cy.get('.sc-cPtzlb > .sc-irLvIq > .sc-csKJxZ').click()
    cy.get('.sc-ppzwM').type('ppppp@gmail.com')
    cy.get('.sc-hiTDLB').click()
    cy.get(':nth-child(5) > .sc-jiaSqj > .sc-hVcFVo').click()
    cy.get('.sc-bbxCgr > :nth-child(1)').click()
    cy.get('.sc-cSxRuM > :nth-child(5) > :nth-child(2)').should('not.exist')
  })
```

<br>
<br>

3º Teste: Teste de criar um projeto
Esse teste verifica se é possível criar um novo projeto
```javascript
it('passes', () => {
    cy.visit('https://confianopai.com/login')
    cy.get(':nth-child(2) > .sc-ktwOfi').type('matheusb@')
    cy.get(':nth-child(3) > .sc-ktwOfi').type('123')
    cy.get('.sc-csKJxZ').click()
    cy.get('.sc-jdHILj').click()
    cy.get('[href="/adm/add-projeto/cadastro"]').click()
    cy.get('.sc-fYrVWQ > .sc-hsaIUA').type('Projeto teste')
    cy.get(':nth-child(2) > :nth-child(2) > .sc-hsaIUA').type('anna.clara@ges.inatel.br')
    cy.get(':nth-child(3) > :nth-child(2) > .sc-hsaIUA').type('gabiru@inatel.br')
    cy.get(':nth-child(6) > :nth-child(2) > .sc-hsaIUA').type('felipeb@inatel.br')
    cy.get(':nth-child(1) > .sc-bZTyFN > .sc-hlqirL').select('Com pendência')
    cy.get(':nth-child(2) > .sc-bZTyFN > .sc-hlqirL').select('Projeto Internacional')
    cy.get('.sc-eGgGjL > :nth-child(1)').click()
    cy.get('.Toastify__toast-body > :nth-child(2)').should("contain.text","Equipe criada com sucesso!")
  })
```

<br>
<br>

4º Teste: Teste uma fase
Esse teste verifica se é possível criar uma fase
```javascript
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
```

<br>
<br>

5º Teste: Teste de uma fase com o mesmo nome
Esse teste verifica se é possível criar uma fase com o mesmo nome
```javascript
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
```

<br>
<br>

6º Teste: Teste de uma fase com entregas igual a 0
```javascript
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
```

<br>
<br>

Relatório mochawesme dos teste dos alunos:
![Screenshot_2](https://github.com/user-attachments/assets/d6245059-a9a2-4f25-afb2-0d1c7f744bd8)

