Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

describe('Add Teams ', () => {
  it(' Add Teams', () => {
    cy.login("zujutest+automation@gmail.com","TestAuto123")
    //Add favourite Teams using Add Teams 

    cy.xpath('//*[@id="inner-container"]/div/div[1]/div/div[1]/div/span[1]/div').click()
    cy.wait(2000);

    // Select the team from displayed option
    cy.xpath('//*[@id="fav-team-list"]/div[1]/div[1]/div[1]/span/div/span/img').click()
    cy.wait(2000);
    
    // Search the team using search field
    cy.xpath('/html/body/div[2]/div[3]/div[1]/div[1]/div/input').click()
            .type('Manchester united', {
              delay: 100
            })
    
    // Select the searched item
    cy.xpath('//*[@id="fav-team-list"]/div[1]/div[1]/div[2]/span/div/span/img')
    .click()
    cy.wait(1000)

    //Finish Adding teams

    cy.xpath('/html/body/div[2]/div[3]/div[2]/button').click()
    cy.wait(2000);        
  })
})
