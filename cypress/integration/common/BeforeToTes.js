import { Given } from 'cypress-cucumber-preprocessor/steps';

const url = './toTest.html'

Given('que estou no site', () => {    
    cy.visit(url)
})