import {When, Then,} from 'cypress-cucumber-preprocessor/steps'

When('efetuo o cadastrado somente com nome',     () =>{

    cy.get('input[id="elementosForm:nome"]')
        .type('Igor')
})

Then('vejo a mensagem Sobrenome eh obrigatorio', () =>{

    const stub = cy.stub()  
    cy.on ('window:alert', stub)
    cy.get('input[id="elementosForm:cadastrar"]')
        .click('bottom')
        .then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Sobrenome eh obrigatorio')      
        })  
})