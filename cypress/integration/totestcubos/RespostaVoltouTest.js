import {When, Then,} from 'cypress-cucumber-preprocessor/steps'


When('interajo com o link voltar', () =>{
    
    cy.xpath('//body/center/a')
        .click()
})

Then('vejo a mensagem Voltou!', () =>{
    
   cy.get('div[id="resultado"]')
   .should('have.text', 'Voltou!')
})