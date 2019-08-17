import {When, Then,} from 'cypress-cucumber-preprocessor/steps'


When('efetuo o cadastro em branco', () =>{
    
})

Then('vejo a mensagem Nome eh obrigatorio', () =>{

    const stub = cy.stub()  
    cy.on ('window:alert', stub)
    cy.get('input[id="elementosForm:cadastrar"]')
        .click()
        .then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Nome eh obrigatorio')      
      }) 
})

