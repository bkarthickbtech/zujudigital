const Form_URL = '/#sign-in'

describe('Logout', () => {
  it(' Logout', () => {
    cy.xpath('//*[@id="settings-option"]').click()
    cy.wait(2000);

    cy.xpath('//*[@id="inner-container"]/div/div[1]/div/div[1]/ul/li[2]').click()
    cy.wait(2000);

    cy.xpath('/html/body/div[2]/div[3]/div/div/button[1]').click()
    cy.wait(2000)
   })

})
