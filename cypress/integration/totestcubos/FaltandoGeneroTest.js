import {When, Then,} from 'cypress-cucumber-preprocessor/steps'


When('efetuo o cadastro ate sobrenome', () =>{
    
    cy.get('input[id="elementosForm:nome"]')
        .type('Igor')
    cy.get('input[id="elementosForm:sobrenome"]')
        .type('Fernandes Cordeiro')   
})

Then('vejo a mensagem Sexo eh obrigatorio', () =>{

    const stub = cy.stub()  
    cy.on ('window:alert', stub)
    cy.get('input[id="elementosForm:cadastrar"]')
        .click()
        .then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Sexo eh obrigatorio')      
      }) 
})