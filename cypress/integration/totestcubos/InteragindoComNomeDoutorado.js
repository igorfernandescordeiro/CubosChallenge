import {When, Then,} from 'cypress-cucumber-preprocessor/steps'


When('interajo com os campos da direita para esquerda', () =>{
    
    cy.xpath('//table[@id="elementosForm:tableUsuarios"]//tr[4]/td[6]/input')
        .type('Olha lá')
    cy.xpath('//table[@id="elementosForm:tableUsuarios"]//tr[4]/td[5]//input')
        .click()
    cy.xpath('//table[@id="elementosForm:tableUsuarios"]//tr[4]/td[4]/input')
        .click()
    cy.xpath('//table[@id="elementosForm:tableUsuarios"]//tr[4]/td[6]/input')
        .type(', Olha só')
})

Then('vejo a mensagem Doutorado', () =>{
    
   const stub = cy.stub()  
    cy.on ('window:alert', stub)
    cy.xpath('//table[@id="elementosForm:tableUsuarios"]//tr[4]/td[3]/input')
        .click()
        .then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Doutorado')      
      })
})