Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

describe('Teams page', () => {
  it('Visit Teams page', () => {
    
  //Navigate to teams page

  cy.xpath('//*[@id="__next"]/div[1]/header/div[4]/h4').click()
  cy.wait(2000);

  //Search the team name
  cy.xpath('//*[@id="team-list-page"]/div/div[2]/div[2]/div/input').click()
  cy.wait(1000);
    cy.xpath('//*[@id="team-list-page"]/div/div[2]/div[2]/div/input')
            .type('Manchester city', {
              delay: 100
            })

    //Mark Manchester city as favourite
    
    cy.xpath('//*[@id="team-list-page"]/div/div[3]/div/div/div/div[1]/div/div[2]/div/div/div[2]/span').click()
    cy.wait(1000);

    cy.xpath('/html/body/div[2]/div[3]/div/div/div[1]/div[1]/button[2]').click()
    cy.wait(1000)

    cy.xpath('/html/body/div[2]/div[3]/div/div/div[1]/div[1]/button[1]').click()
    cy.wait(2000)

    //Unfavourite Manchester city  using fav icon
    cy.xpath('//*[@id="team-list-page"]/div/div[3]/div/div/div/div[1]/div/button').click()
    cy.wait(1000);
  })

})