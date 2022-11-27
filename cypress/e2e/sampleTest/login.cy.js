const Form_URL = '/#sign-in'

describe('Forms', () => {
  before(() => {
    cy.visit(Form_URL)
    cy.url()
      .should('eq', Cypress.config().baseUrl + Form_URL)
  })

  it('should display the Autocomplete title', () => {
    cy.get('.MuiTypography-h2')
      .should('contain', 'Welcome to ZUJU KICKOFF')
      
  })

  it('Invalid Login - Invalid Email', () => {
    cy.wait(1000);
    cy.xpath('/html/body/div[2]/div[3]/form/div/div[1]/div/input')
      .type('zujutest+automation12@gmail.com', {
      delay: 100
    })
    cy.wait(2000);
    cy.xpath('/html/body/div[2]/div[3]/form/div/div[2]/div/input')
      .type('TestAuto123', {
        delay: 100
      })
    cy.xpath('/html/body/div[2]/div[3]/form/div/div[4]/button[1]').click()
    cy.wait(2000);
    cy.xpath('/html/body/div[2]/div[3]/form/div/div[4]/div/p')
        .should('have.text', 'The email or password you entered is incorrect. Please try again.')
    cy.wait(2000);
  })

  it('Valid Login', () => {
    cy.xpath('/html/body/div[2]/div[3]/form/div/div[1]/div/input')
    cy.get('[type="text"]').clear() 
          .type('zujutest+automation@gmail.com', {
            delay: 100
          })
            
    cy.xpath('/html/body/div[2]/div[3]/form/div/div[2]/div/input')
    cy.get('[type="password"]').clear() 
          .type('TestAuto123', {
              delay: 100
          })
    cy.xpath('/html/body/div[2]/div[3]/form/div/div[4]/button[1]').click()
    cy.wait(2000);
    cy.title().should('contain', 'Zuju Kickoff | Watch Football Matches and Play Live Match Quiz')


  })

})
