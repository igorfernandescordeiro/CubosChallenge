import {When, And, Then,} from 'cypress-cucumber-preprocessor/steps'


When('efetuo o cadastro ate comida favorita', () =>{
    
    cy.get('input[id="elementosForm:nome"]')
        .type('Igor')
    cy.get('input[id="elementosForm:sobrenome"]')
        .type('Fernandes Cordeiro')
    cy.get('input[id="elementosForm:sexo:0"]')  
        .click()     
    cy.get('input[id="elementosForm:comidaFavorita:1"]')
        .click()
})

And('selecionando futebol e o que eh esporte', ()=>{

    cy.get('select[id="elementosForm:esportes"]')
        .select(['Futebol','O que eh esporte?'])
        .invoke('val')
        .should('deep.equal', ['futebol', 'nada'])
})

Then('vejo a mensagem Voce faz esporte ou nao?', () =>{

    const stub = cy.stub()  
    cy.on ('window:alert', stub)
    cy.get('input[id="elementosForm:cadastrar"]')
        .click()
        .then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Voce faz esporte ou nao?')      
      }) 
})