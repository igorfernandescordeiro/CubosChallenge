import {When, And, Then,} from 'cypress-cucumber-preprocessor/steps'


When('efetuo o cadastro ate genero', () =>{

    cy.get('input[id="elementosForm:nome"]')
        .type('Igor')
    cy.get('input[id="elementosForm:sobrenome"]')
        .type('Fernandes Cordeiro')
        cy.get('input[id="elementosForm:sexo:0"]')  
        .click()      
})

And('selecionando carne e vegetariano', ()=>{

    cy.get('input[id="elementosForm:comidaFavorita:0"]')
        .click()
    cy.get('input[id="elementosForm:comidaFavorita:3"]')
        .click()   
})

Then('vejo a mensagem Tem certeza que voce eh vegetariano?', () =>{
    
    const stub = cy.stub()  
    cy.on ('window:alert', stub)
    cy.get('input[id="elementosForm:cadastrar"]')
        .click()
        .then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Tem certeza que voce eh vegetariano?')      
      }) 
})


 